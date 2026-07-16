import { useState } from "react";
import {
  Dialog,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Field,
  Input,
  Select,
  Caption1,
  Body1,
  Body1Strong,
  Spinner,
  Badge,
} from "@fluentui/react-components";
import { Sparkle20Filled, Add16Regular } from "@fluentui/react-icons";
import { LANES, LANE_COLORS, type Lane, type LifeEvent } from "@/lib/events";
import { getEventSuggestions, type Suggestion } from "@/lib/suggestions.functions";

type Props = {
  open: boolean;
  initialLane: Lane;
  onClose: () => void;
  onSave: (e: LifeEvent) => void;
};

const VERB_COLORS: Record<string, "brand" | "success" | "warning" | "informative"> = {
  Suggests: "brand",
  Recommends: "success",
  Offers: "warning",
  Reminds: "informative",
};

export function AddEventDialog({ open, initialLane, onClose, onSave }: Props) {
  const [title, setTitle] = useState("");
  const [lane, setLane] = useState<Lane>(initialLane);
  const [when, setWhen] = useState("");
  const [duration, setDuration] = useState(60);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setTitle("");
    setWhen("");
    setDuration(60);
    setLocation("");
    setSuggestion(null);
    setError(null);
    setLoading(false);
  };

  const close = () => {
    reset();
    onClose();
  };

  const askUbu = async () => {
    if (!title.trim()) return;
    setLoading(true);
    setError(null);
    setSuggestion(null);
    try {
      const result = await getEventSuggestions({
        data: { title: title.trim(), lane, when: when || undefined },
      });
      setSuggestion(result);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const save = () => {
    if (!title.trim() || !when) return;
    onSave({
      id: `e${Date.now()}`,
      title: title.trim(),
      lane,
      start: new Date(when).toISOString(),
      duration,
      location: location.trim() || undefined,
    });
    close();
  };

  const laneColor = LANE_COLORS[lane];

  return (
    <Dialog open={open} onOpenChange={(_, d) => !d.open && close()}>
      <DialogSurface style={{ maxWidth: 640 }}>
        <DialogBody>
          <DialogTitle>Add to your Life Calendar</DialogTitle>
          <DialogContent>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalM)", paddingTop: "var(--spacingHorizontalS)" }}>
              <Field label="What's happening?" required>
                <Input
                  placeholder="e.g. Customer visit in Malaysia"
                  value={title}
                  onChange={(_, d) => setTitle(d.value)}
                />
              </Field>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacingHorizontalM)" }}>
                <Field label="Lane" required>
                  <Select value={lane} onChange={(_, d) => setLane(d.value as Lane)}>
                    {LANES.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="When" required>
                  <Input type="datetime-local" value={when} onChange={(_, d) => setWhen(d.value)} />
                </Field>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacingHorizontalM)" }}>
                <Field label="Duration (min)">
                  <Input
                    type="number"
                    value={String(duration)}
                    onChange={(_, d) => setDuration(Math.max(15, Number(d.value) || 60))}
                  />
                </Field>
                <Field label="Location">
                  <Input placeholder="Optional" value={location} onChange={(_, d) => setLocation(d.value)} />
                </Field>
              </div>

              <div
                style={{
                  border: `1px solid ${laneColor.accent}`,
                  background: laneColor.bg,
                  borderRadius: "var(--borderRadiusMedium)",
                  padding: "var(--spacingHorizontalM)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacingHorizontalS)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--spacingHorizontalM)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--spacingHorizontalS)", color: laneColor.fg }}>
                    <Sparkle20Filled />
                    <Body1Strong style={{ color: laneColor.fg }}>Ubu can help with this</Body1Strong>
                  </div>
                  <Button
                    size="small"
                    appearance="primary"
                    onClick={askUbu}
                    disabled={!title.trim() || loading}
                    icon={loading ? <Spinner size="tiny" /> : <Sparkle20Filled />}
                  >
                    {suggestion ? "Regenerate" : "Ask Ubu"}
                  </Button>
                </div>

                {!suggestion && !loading && !error && (
                  <Caption1 style={{ color: laneColor.fg, opacity: 0.85 }}>
                    Type a title above, then let Ubu suggest what else to line up — travel, bookings, reminders and more.
                  </Caption1>
                )}

                {loading && (
                  <Caption1 style={{ color: laneColor.fg }}>Ubu is thinking about your event…</Caption1>
                )}

                {error && (
                  <Caption1 style={{ color: "var(--colorStatusDangerForeground1)" }}>
                    {error}
                  </Caption1>
                )}

                {suggestion && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalS)" }}>
                    <Body1 style={{ color: laneColor.fg }}>{suggestion.intro}</Body1>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalXS)" }}>
                      {suggestion.subtasks.map((s, i) => (
                        <div
                          key={i}
                          style={{
                            background: "var(--colorNeutralBackground1)",
                            border: "1px solid var(--colorNeutralStroke2)",
                            borderRadius: "var(--borderRadiusMedium)",
                            padding: "var(--spacingHorizontalS) var(--spacingHorizontalM)",
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--spacingHorizontalM)",
                          }}
                        >
                          <Badge appearance="tint" color={VERB_COLORS[s.verb] ?? "brand"} size="small">
                            {s.verb}
                          </Badge>
                          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                            <Body1Strong>{s.title}</Body1Strong>
                            <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>{s.detail}</Caption1>
                          </div>
                          {s.bookable && (
                            <Button size="small" appearance="outline" icon={<Add16Regular />}>
                              Book
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button appearance="outline" onClick={close}>Cancel</Button>
            <Button appearance="primary" disabled={!title.trim() || !when} onClick={save}>
              Save event
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
