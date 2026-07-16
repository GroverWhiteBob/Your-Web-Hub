import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as fluentNs from "@fluentui/react-components";
const fluent: typeof fluentNs =
  (fluentNs as unknown as { default?: typeof fluentNs }).default ?? fluentNs;
const {
  Title1,
  Title3,
  Body1,
  Toaster,
  Toast,
  ToastTitle,
  ToastBody,
  useToastController,
  useId,
} = fluent;
import { getUser, type UbuUser } from "@/lib/auth";
import { SiteHeader } from "@/components/SiteHeader";
import { LifeCalendar } from "@/components/LifeCalendar";
import { AddEventDialog } from "@/components/AddEventDialog";
import { EventDetailDialog } from "@/components/EventDetailDialog";
import {
  getEvents,
  addEvent as addEventStore,
  getWeekStart,
  type LifeEvent,
  type Lane,
} from "@/lib/events";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Life Calendar — Ubu" },
      {
        name: "description",
        content:
          "One calendar for Work, Personal, Family and Pets — with Ubu suggesting what to line up next.",
      },
      { property: "og:title", content: "Life Calendar — Ubu" },
      {
        property: "og:description",
        content:
          "One calendar for Work, Personal, Family and Pets — with Ubu suggesting what to line up next.",
      },
    ],
  }),
  component: CalendarPage,
});

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function CalendarPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UbuUser | null>(null);
  const [ready, setReady] = useState(false);

  const [events, setEvents] = useState<LifeEvent[]>([]);
  const [weekStart, setWeekStart] = useState<Date>(() => getWeekStart());
  const [addOpen, setAddOpen] = useState(false);
  const [addLane, setAddLane] = useState<Lane>("Work");
  const [detailEvent, setDetailEvent] = useState<LifeEvent | null>(null);

  const toasterId = useId("calendar-toaster");
  const { dispatchToast } = useToastController(toasterId);

  useEffect(() => {
    const u = getUser();
    if (!u) {
      navigate({ to: "/login" });
      return;
    }
    setUser(u);
    setEvents(getEvents());
    setReady(true);
  }, [navigate]);

  if (!ready || !user) return null;

  const openAddEvent = (lane: Lane) => {
    setAddLane(lane);
    setAddOpen(true);
  };

  const handleSaveEvent = (e: LifeEvent) => {
    addEventStore(e);
    setEvents(getEvents());
    dispatchToast(
      <Toast>
        <ToastTitle>Added to your Life Calendar</ToastTitle>
        <ToastBody>
          {e.title} — {e.lane}
        </ToastBody>
      </Toast>,
      { intent: "success", timeout: 3500 },
    );
  };

  const shiftWeek = (days: number) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + days);
    setWeekStart(d);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--colorNeutralBackground3)" }}>
      <SiteHeader />

      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "var(--spacingHorizontalXXL) var(--spacingHorizontalXL)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacingHorizontalXXL)",
        }}
      >
        <section>
          <Title3
            as="p"
            block
            style={{
              color: "var(--colorNeutralForeground2)",
              marginBottom: "var(--spacingVerticalXS)",
              fontWeight: "var(--fontWeightBold)",
            }}
          >
            {getGreeting()}, {user.name?.split(" ")[0] ?? "there"} 👋
          </Title3>
          <Title1 as="h1" block>
            Your Life Calendar
          </Title1>
          <Body1 as="p" block style={{ color: "var(--colorNeutralForeground2)" }}>
            One calendar for Work, Personal, Family and Pets — with Ubu suggesting what to line up next.
          </Body1>
        </section>


        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacingHorizontalM)",
          }}
        >
          <LifeCalendar
            events={events}
            weekStart={weekStart}
            onPrevWeek={() => shiftWeek(-7)}
            onNextWeek={() => shiftWeek(7)}
            onToday={() => setWeekStart(getWeekStart())}
            onAddEvent={openAddEvent}
            onEventClick={(e) => setDetailEvent(e)}
          />
        </section>
      </main>

      <Toaster toasterId={toasterId} position="top-end" />

      <AddEventDialog
        open={addOpen}
        initialLane={addLane}
        onClose={() => setAddOpen(false)}
        onSave={handleSaveEvent}
      />

      <EventDetailDialog event={detailEvent} onClose={() => setDetailEvent(null)} />
    </div>
  );
}
