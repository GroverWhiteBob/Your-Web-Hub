import { useMemo } from "react";
import { Caption1, Body1Strong, Button } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { LANES, LANE_COLORS, getWeekStart, type LifeEvent, type Lane } from "@/lib/events";

type Props = {
  events: LifeEvent[];
  weekStart: Date;
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onToday: () => void;
  onAddEvent: (lane: Lane) => void;
  onEventClick: (e: LifeEvent) => void;
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function LifeCalendar({
  events,
  weekStart,
  onPrevWeek,
  onNextWeek,
  onToday,
  onAddEvent,
  onEventClick,
}: Props) {
  const weekEnd = useMemo(() => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + 6);
    return d;
  }, [weekStart]);

  const currentWeekStart = getWeekStart();
  const isCurrentWeek = weekStart.getTime() === currentWeekStart.getTime();

  const eventsByLaneDay = useMemo(() => {
    const map: Record<Lane, LifeEvent[][]> = {
      Work: [[], [], [], [], [], [], []],
      Personal: [[], [], [], [], [], [], []],
      Family: [[], [], [], [], [], [], []],
      Pets: [[], [], [], [], [], [], []],
    };
    for (const e of events) {
      const d = new Date(e.start);
      const diff = Math.floor((d.getTime() - weekStart.getTime()) / (1000 * 60 * 60 * 24));
      if (diff < 0 || diff > 6) continue;
      map[e.lane][diff].push(e);
    }
    return map;
  }, [events, weekStart]);

  const fmtRange = () => {
    const s = weekStart.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    const e = weekEnd.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    return `${s} — ${e}`;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div
      style={{
        background: "var(--colorNeutralBackground1)",
        border: "1px solid var(--colorNeutralStroke2)",
        borderRadius: "var(--borderRadiusLarge)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--spacingHorizontalL)",
          borderBottom: "1px solid var(--colorNeutralStroke2)",
          gap: "var(--spacingHorizontalM)",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalXXS)" }}>
          <Body1Strong>Your Life Calendar</Body1Strong>
          <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>{fmtRange()}</Caption1>
        </div>
        <div style={{ display: "flex", gap: "var(--spacingHorizontalS)", alignItems: "center" }}>
          <Button size="small" appearance="subtle" onClick={onPrevWeek}>‹ Prev</Button>
          <Button size="small" appearance={isCurrentWeek ? "primary" : "outline"} onClick={onToday}>This week</Button>
          <Button size="small" appearance="subtle" onClick={onNextWeek}>Next ›</Button>
        </div>
      </div>

      {/* Day header row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px repeat(7, 1fr)",
          borderBottom: "1px solid var(--colorNeutralStroke2)",
          background: "var(--colorNeutralBackground2)",
        }}
      >
        <div style={{ padding: "var(--spacingHorizontalS) var(--spacingHorizontalM)" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>Lane</Caption1>
        </div>
        {DAYS.map((label, i) => {
          const d = new Date(weekStart);
          d.setDate(d.getDate() + i);
          const isToday = d.getTime() === today.getTime();
          return (
            <div
              key={i}
              style={{
                padding: "var(--spacingHorizontalS) var(--spacingHorizontalM)",
                borderLeft: "1px solid var(--colorNeutralStroke2)",
                textAlign: "center",
              }}
            >
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{label}</Caption1>
              <div style={{
                fontWeight: isToday ? 700 : 500,
                color: isToday ? "var(--colorBrandForeground1)" : "var(--colorNeutralForeground1)",
                marginTop: 2,
              }}>
                {d.getDate()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lane rows */}
      {LANES.map((lane) => {
        const colors = LANE_COLORS[lane];
        return (
          <div
            key={lane}
            style={{
              display: "grid",
              gridTemplateColumns: "120px repeat(7, 1fr)",
              borderBottom: "1px solid var(--colorNeutralStroke2)",
              minHeight: 96,
            }}
          >
            <div
              style={{
                padding: "var(--spacingHorizontalM)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "var(--spacingHorizontalS)",
                borderLeft: `4px solid ${colors.accent}`,
              }}
            >
              <Body1Strong style={{ color: "var(--colorNeutralForeground1)" }}>{lane}</Body1Strong>
              <Button
                size="small"
                appearance="subtle"
                icon={<Add20Regular />}
                onClick={() => onAddEvent(lane)}
              >
                Add
              </Button>
            </div>
            {Array.from({ length: 7 }, (_, dayIdx) => (
              <div
                key={dayIdx}
                style={{
                  borderLeft: "1px solid var(--colorNeutralStroke2)",
                  padding: "var(--spacingHorizontalXS)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                {eventsByLaneDay[lane][dayIdx].map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => onEventClick(e)}
                    style={{
                      background: colors.bg,
                      color: colors.fg,
                      border: "none",
                      borderLeft: `3px solid ${colors.accent}`,
                      borderRadius: "var(--borderRadiusSmall)",
                      padding: "6px 8px",
                      textAlign: "left",
                      cursor: "pointer",
                      font: "inherit",
                      fontSize: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{e.title}</div>
                    <div style={{ opacity: 0.75, fontSize: 11, marginTop: 2 }}>
                      {new Date(e.start).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
