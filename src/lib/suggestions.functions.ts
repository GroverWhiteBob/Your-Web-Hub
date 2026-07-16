import { createServerFn } from "@tanstack/react-start";
import { generateText, Output, NoObjectGeneratedError } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";

const InputSchema = z.object({
  title: z.string().min(1).max(300),
  lane: z.enum(["Work", "Personal", "Family", "Pets"]),
  when: z.string().optional(),
});

const SuggestionSchema = z.object({
  intro: z.string(),
  subtasks: z.array(
    z.object({
      verb: z.enum(["Suggests", "Recommends", "Offers", "Reminds"]),
      title: z.string(),
      detail: z.string(),
      bookable: z.boolean(),
    }),
  ),
});

export type Suggestion = z.infer<typeof SuggestionSchema>;

export const getEventSuggestions = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<Suggestion> => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const gateway = createLovableAiGatewayProvider(key);

    const systemPrompt = `You are Ubu, a proactive life orchestrator AI. When a user adds an event to their calendar, you analyze it and generate a short intro plus 3-5 concrete sub-tasks Ubu can help with. Sub-tasks should feel proactive and cross-domain: think travel logistics, bookings, reminders, documents, weather, family/pet handoffs.

For each sub-task, choose a verb that fits:
- "Suggests" — proactive ideas the user probably hasn't thought of
- "Recommends" — best-fit provider or option
- "Offers" — Ubu can do it now with one tap
- "Reminds" — heads-up about time-sensitive details

Mark bookable=true only if it maps to a real service (transportation, sitter, home watch, appointment booking, purchase). Keep titles under 8 words and details under 20 words. Be specific to the event, not generic.`;

    const userPrompt = `Event: "${data.title}"
Lane: ${data.lane}
${data.when ? `When: ${data.when}` : ""}

Generate an intro and 3-5 sub-tasks tailored to this event.`;

    try {
      const { output } = await generateText({
        model: gateway("google/gemini-3-flash-preview"),
        system: systemPrompt,
        prompt: userPrompt,
        output: Output.object({ schema: SuggestionSchema }),
      });
      return output;
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error)) {
        try {
          return SuggestionSchema.parse(JSON.parse(error.text ?? "{}"));
        } catch {
          // fall through
        }
      }
      throw error;
    }
  });
