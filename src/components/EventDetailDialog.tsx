import {
  Dialog,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Body1,
  Body1Strong,
  Caption1,
} from "@fluentui/react-components";
import { Sparkle20Filled, Checkmark16Regular } from "@fluentui/react-icons";
import { LANE_COLORS, type LifeEvent } from "@/lib/events";

type Suggestion = {
  kind: "suggests" | "recommends" | "offers" | "reminds";
  items: string[];
};

// Map event ids (or title keywords) to Ubu suggestions
function getSuggestion(e: LifeEvent): Suggestion | null {
  const id = e.id;
  const t = e.title.toLowerCase();

  if (id === "w-tue-malaysia" || t.includes("malaysia")) {
    return {
      kind: "suggests",
      items: [
        "Flight reminder + hotel booking",
        "Passport validity",
        "Weather",
        "Taxi booking",
      ],
    };
  }
  if (id === "w-wed-geneva" || t.includes("geneva")) {
    return {
      kind: "recommends",
      items: [
        "Visa reminder",
        "Meeting agenda",
        "Presentation checklist",
        "Connect with colleagues already in Geneva",
      ],
    };
  }
  if (id === "p-thu-ac" || t.includes("air-conditioner") || t.includes("air conditioner")) {
    return {
      kind: "offers",
      items: [
        "Book trusted technician",
        "Compare prices",
        "Schedule automatically",
        "Notify when completed",
      ],
    };
  }
  if (id === "pet-wed-worm" || t.includes("deworm") || t.includes("vaccination")) {
    return {
      kind: "reminds",
      items: [
        "Vet appointment",
        "Vaccination records",
        "Nearby clinic",
        "Arrange transportation if needed",
      ],
    };
  }
  if (t.includes("dentist")) {
    return {
      kind: "reminds",
      items: [
        "Confirm appointment time",
        "Insurance card ready",
        "Last cleaning: 6 months ago",
        "Book Uber for the ride back",
      ],
    };
  }
  if (t.includes("groom")) {
    return {
      kind: "offers",
      items: [
        "Book preferred groomer",
        "Compare mobile groomers nearby",
        "Reminder to bring vaccination record",
      ],
    };
  }
  if (t.includes("friends") && t.includes("boston")) {
    return {
      kind: "suggests",
      items: [
        "Restaurant reservations",
        "Airport pickup",
        "Guest room ready checklist",
        "Weekend activity ideas",
      ],
    };
  }
  return null;
}

const KIND_LABEL: Record<Suggestion["kind"], string> = {
  suggests: "UBU suggests",
  recommends: "UBU recommends",
  offers: "UBU offers",
  reminds: "UBU reminds",
};

type Props = {
  event: LifeEvent | null;
  onClose: () => void;
};

export function EventDetailDialog({ event, onClose }: Props) {
  const open = event !== null;
  const suggestion = event ? getSuggestion(event) : null;
  const colors = event ? LANE_COLORS[event.lane] : null;

  const start = event ? new Date(event.start) : null;
  const timeStr = start
    ? `${start.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
      })} · ${start.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      })}`
    : "";

  return (
    <Dialog open={open} onOpenChange={(_, d) => !d.open && onClose()}>
      <DialogSurface style={{ maxWidth: 560 }}>
        <DialogBody>
          <DialogTitle>{event?.title}</DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacingHorizontalL)",
              }}
            >
              {event && colors && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacingHorizontalS)",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      background: colors.bg,
                      color: colors.fg,
                      borderLeft: `3px solid ${colors.accent}`,
                      borderRadius: "var(--borderRadiusSmall)",
                      padding: "4px 10px",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {event.lane}
                  </span>
                  <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>
                    {timeStr} · {event.duration} min
                  </Caption1>
                  {event.location && (
                    <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>
                      · {event.location}
                    </Caption1>
                  )}
                </div>
              )}

              {suggestion ? (
                <div
                  style={{
                    background: "var(--colorNeutralBackground2)",
                    border: "1px solid var(--colorNeutralStroke2)",
                    borderRadius: "var(--borderRadiusMedium)",
                    padding: "var(--spacingHorizontalM)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacingHorizontalS)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--spacingHorizontalXS)",
                      color: "var(--colorBrandForeground1)",
                    }}
                  >
                    <Sparkle20Filled />
                    <Body1Strong style={{ color: "var(--colorBrandForeground1)" }}>
                      {KIND_LABEL[suggestion.kind]}
                    </Body1Strong>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {suggestion.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--spacingHorizontalS)",
                        }}
                      >
                        <Checkmark16Regular
                          style={{ color: "var(--colorPaletteGreenForeground1)", flexShrink: 0 }}
                        />
                        <Body1>{item}</Body1>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Body1 style={{ color: "var(--colorNeutralForeground2)" }}>
                  No suggestions from Ubu for this event.
                </Body1>
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <Button appearance="secondary" onClick={onClose}>
              Close
            </Button>
            {suggestion && (
              <Button appearance="primary" onClick={onClose}>
                Take action
              </Button>
            )}
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
