import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as fluentNs from "@fluentui/react-components";
const fluent: typeof fluentNs =
  (fluentNs as unknown as { default?: typeof fluentNs }).default ?? fluentNs;
const {
  Button,
  Title1,
  Title2,
  Title3,
  Subtitle2,
  Body1,
  Body1Strong,
  Caption1,
  Avatar,
  Dialog,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
  Field,
  Input,
  Textarea,
  Radio,
  RadioGroup,
  Toaster,
  Toast,
  ToastTitle,
  ToastBody,
  useToastController,
  useId,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} = fluent;
import {
  VehicleCar24Regular,
  PeopleTeam24Regular,
  Home24Regular,
  CalendarLtr24Regular,
  SignOut24Regular,
  Star16Filled,
  Navigation24Regular,
  CalendarEdit20Regular,
  Box20Regular,
  Mail20Regular,
} from "@fluentui/react-icons";
import { getUser, signOut, type UbuUser } from "@/lib/auth";
import { SiteHeader } from "@/components/SiteHeader";


export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function getGreeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

type Service = {
  id: string;
  type: "Transportation" | "Sitter" | "Home Watch" | "Appointment";
  title: string;
  when: string;
  location: string;
  provider: { name: string; rating: number; photo?: string };
};

const upcomingServices: Service[] = [
  {
    id: "1",
    type: "Transportation",
    title: "Ride to Dr. Patel's clinic",
    when: "Today, 2:30 PM",
    location: "1240 Oak Ave",
    provider: { name: "Marcus", rating: 4.9 },
  },
  {
    id: "2",
    type: "Sitter",
    title: "Evening sitter for Ellie",
    when: "Fri, Jul 10 · 6:00 – 10:00 PM",
    location: "Home",
    provider: { name: "Priya", rating: 4.8 },
  },
  {
    id: "3",
    type: "Home Watch",
    title: "Weekly home check-in",
    when: "Sat, Jul 11 · 10:00 AM",
    location: "12 Maple St",
    provider: { name: "David", rating: 5.0 },
  },
  {
    id: "4",
    type: "Appointment",
    title: "Dental cleaning",
    when: "Mon, Jul 13 · 9:15 AM",
    location: "Bright Smile Dental",
    provider: { name: "Sofia", rating: 4.7 },
  },
];

const completedServices: Service[] = [
  {
    id: "c1",
    type: "Transportation",
    title: "Ride to airport",
    when: "Mon, Jun 30 · 5:00 AM",
    location: "SFO Terminal 2",
    provider: { name: "Marcus", rating: 4.9 },
  },
  {
    id: "c2",
    type: "Sitter",
    title: "Afternoon sitter for Ellie",
    when: "Sat, Jun 28 · 1:00 – 5:00 PM",
    location: "Home",
    provider: { name: "Priya", rating: 4.8 },
  },
  {
    id: "c3",
    type: "Home Watch",
    title: "Electrician visit",
    when: "Thu, Jun 26 · 11:00 AM",
    location: "12 Maple St",
    provider: { name: "Sana", rating: 4.7 },
  },
  {
    id: "c4",
    type: "Appointment",
    title: "Annual physical booking",
    when: "Tue, Jun 24 · 9:00 AM",
    location: "Wellness Clinic",
    provider: { name: "Sofia", rating: 4.7 },
  },
];

const cancelledServices: Service[] = [
  {
    id: "x1",
    type: "Transportation",
    title: "Ride to gym",
    when: "Wed, Jun 25 · 6:30 AM",
    location: "Downtown Fitness",
    provider: { name: "Lena", rating: 4.8 },
  },
  {
    id: "x2",
    type: "Sitter",
    title: "Weekend pet sitter",
    when: "Sat, Jun 21 · All day",
    location: "Home",
    provider: { name: "Diego", rating: 4.9 },
  },
];

const stats = {
  upcoming: upcomingServices.length,
  completed: completedServices.length,
  cancelled: cancelledServices.length,
};

const quickSchedule: {
  key: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    key: "transportation",
    label: "Transportation",
    icon: <VehicleCar24Regular />,
    description: "Drive kids or elderly to appointments, school, errands & more",
  },
  {
    key: "sitter",
    label: "Sitter Services",
    icon: <PeopleTeam24Regular />,
    description: "Trusted sitters for children, elders or pets at your home",
  },
  {
    key: "home-watch",
    label: "Home Watch",
    icon: <Home24Regular />,
    description: "Someone present when your plumber, electrician, gardener or contractor visits",
  },
  {
    key: "appointment",
    label: "Appointment Scheduling",
    icon: <CalendarLtr24Regular />,
    description: "Delegate booking, confirming and managing your appointments",
  },
];

type Provider = { name: string; rating: number; specialty: string };

const providersByService: Record<string, Provider[]> = {
  transportation: [
    { name: "Marcus", rating: 4.9, specialty: "Airport & medical rides" },
    { name: "Lena", rating: 4.8, specialty: "School runs & errands" },
    { name: "Rahul", rating: 4.7, specialty: "Elderly companion driver" },
  ],
  sitter: [
    { name: "Priya", rating: 4.8, specialty: "Childcare, ages 2–10" },
    { name: "Diego", rating: 4.9, specialty: "Pet sitter & dog walker" },
    { name: "Amara", rating: 5.0, specialty: "Elder companion care" },
  ],
  "home-watch": [
    { name: "David", rating: 5.0, specialty: "General contractor liaison" },
    { name: "Sana", rating: 4.7, specialty: "Plumbing & electrical visits" },
    { name: "Tom", rating: 4.8, specialty: "Gardener & landscaping" },
  ],
  appointment: [
    { name: "Sofia", rating: 4.7, specialty: "Medical & dental bookings" },
    { name: "Ben", rating: 4.9, specialty: "Salon & personal services" },
    { name: "Kaya", rating: 4.8, specialty: "Auto & home service bookings" },
  ],
};

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UbuUser | null>(null);
  const [ready, setReady] = useState(false);
  const [openService, setOpenService] = useState<(typeof quickSchedule)[number] | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [travelers, setTravelers] = useState("");
  const [sitterFor, setSitterFor] = useState("");
  const [sitterDuration, setSitterDuration] = useState("");
  const [watchWork, setWatchWork] = useState("");
  const [watchDuration, setWatchDuration] = useState("");
  const [apptPurpose, setApptPurpose] = useState("");
  const [apptDetails, setApptDetails] = useState("");
  const [notes, setNotes] = useState("");
  const [filter, setFilter] = useState<"upcoming" | "completed" | "cancelled">("upcoming");

  const toasterId = useId("scheduler-toaster");
  const { dispatchToast } = useToastController(toasterId);

  useEffect(() => {
    const u = getUser();
    if (!u) {
      navigate({ to: "/login" });
      return;
    }
    setUser(u);
    setReady(true);
  }, [navigate]);

  if (!ready || !user) return null;




  const openScheduler = (svc: (typeof quickSchedule)[number]) => {
    setOpenService(svc);
    setSelectedProvider(providersByService[svc.key]?.[0]?.name ?? "");
    setDateTime("");
    setLocation("");
    setFromAddress("");
    setToAddress("");
    setTravelers("");
    setSitterFor("");
    setSitterDuration("");
    setWatchWork("");
    setWatchDuration("");
    setApptPurpose("");
    setApptDetails("");
    setNotes("");
  };


  const submitScheduler = () => {
    if (!openService) return;
    dispatchToast(
      <Toast>
        <ToastTitle>{openService.label} scheduled</ToastTitle>
        <ToastBody>With {selectedProvider}{dateTime ? ` on ${dateTime}` : ""}.</ToastBody>
      </Toast>,
      { intent: "success", timeout: 4000 },
    );
    setOpenService(null);
  };

  const greeting = getGreeting(new Date().getHours());
  const displayName = user.name || "there";

  const handleSignOut = () => {
    signOut();
    navigate({ to: "/login" });
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
        {/* Greeting */}
        <section>
          <Title1 as="h1" block>{`${greeting}, ${displayName}`}</Title1>
          <Body1 as="p" block style={{ color: "var(--colorNeutralForeground2)" }}>
            One calendar for Work, Personal, Family and Pets — with Ubu suggesting what to line up next.
          </Body1>
        </section>

        {/* Life Calendar CTA */}
        <section>
          <div
            style={{
              background: "var(--colorNeutralBackground1)",
              border: "1px solid var(--colorNeutralStroke2)",
              borderRadius: "var(--borderRadiusLarge)",
              padding: "var(--spacingHorizontalL)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--spacingHorizontalL)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalXS)", minWidth: 0 }}>
              <Title3>Your Life Calendar</Title3>
              <Body1 style={{ color: "var(--colorNeutralForeground2)" }}>
                One view for Work, Personal, Family and Pets — with Ubu suggesting what to line up next.
              </Body1>
            </div>
            <Button
              appearance="primary"
              icon={<CalendarLtr24Regular />}
              onClick={() => navigate({ to: "/calendar" })}
            >
              Open Life Calendar
            </Button>
          </div>
        </section>





        {/* Stats */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--spacingHorizontalL)",
          }}
        >
          <StatCard label="Upcoming services" value={stats.upcoming} tone="brand" active={filter === "upcoming"} onClick={() => setFilter("upcoming")} />
          <StatCard label="Completed services" value={stats.completed} tone="success" active={filter === "completed"} onClick={() => setFilter("completed")} />
          <StatCard label="Cancelled services" value={stats.cancelled} tone="danger" active={filter === "cancelled"} onClick={() => setFilter("cancelled")} />
        </section>

        {/* Service list */}
        <section style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalM)" }}>
          <Subtitle2>
            {filter === "upcoming" ? "Upcoming services" : filter === "completed" ? "Completed services" : "Cancelled services"}
          </Subtitle2>
          <div
            style={{
              background: "var(--colorNeutralBackground1)",
              border: "1px solid var(--colorNeutralStroke2)",
              borderRadius: "var(--borderRadiusLarge)",
              overflow: "hidden",
            }}
          >
            {(filter === "upcoming" ? upcomingServices : filter === "completed" ? completedServices : cancelledServices).length === 0 && (
              <div style={{ padding: "var(--spacingHorizontalL)" }}>
                <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>No services to show.</Caption1>
              </div>
            )}
            {(filter === "upcoming" ? upcomingServices : filter === "completed" ? completedServices : cancelledServices).map((s, idx) => (
              <div
                key={s.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacingHorizontalL)",
                  padding: "var(--spacingHorizontalL)",
                  borderTop:
                    idx === 0 ? "none" : "1px solid var(--colorNeutralStroke2)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--borderRadiusCircular)",
                    background: "var(--colorBrandBackground2)",
                    color: "var(--colorBrandForeground2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {iconForType(s.type)}
                </div>
                <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, gap: "var(--spacingHorizontalXXS)" }}>
                  <Body1Strong>{s.title}</Body1Strong>
                  <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>
                    {s.type} · {s.when} · {s.location}
                  </Caption1>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--spacingHorizontalXS)", marginTop: "var(--spacingHorizontalXXS)" }}>
                    <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>Provider:</Caption1>
                    <Avatar name={s.provider.name} image={s.provider.photo ? { src: s.provider.photo } : undefined} size={20} />
                    <Caption1 style={{ color: "var(--colorNeutralForeground1)" }}>{s.provider.name}</Caption1>
                    <Star16Filled style={{ color: "var(--colorStatusWarningForeground1)" }} />
                    <Caption1 style={{ color: "var(--colorNeutralForeground1)" }}>{s.provider.rating.toFixed(1)}</Caption1>
                  </div>
                </div>
                <Button appearance="subtle" size="small">
                  Details
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Schedule */}
        <section id="quick-schedule" style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalM)" }}>
          <Subtitle2>Quick schedule</Subtitle2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--spacingHorizontalL)",
            }}
          >
            {quickSchedule.map((q) => (
              <div
                key={q.key}
                style={{
                  background: "var(--colorNeutralBackground1)",
                  border: "1px solid var(--colorNeutralStroke2)",
                  borderRadius: "var(--borderRadiusLarge)",
                  padding: "var(--spacingHorizontalL)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacingHorizontalM)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--borderRadiusMedium)",
                    background: "var(--colorBrandBackground2)",
                    color: "var(--colorBrandForeground2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {q.icon}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalXS)" }}>
                  <Title3>{q.label}</Title3>
                  <Body1 style={{ color: "var(--colorNeutralForeground2)" }}>
                    {q.description}
                  </Body1>
                </div>
                <Button appearance="primary" onClick={() => openScheduler(q)}>
                  Schedule
                </Button>
              </div>
            ))}
          </div>
        </section>

        <Caption1 style={{ color: "var(--colorNeutralForeground3)", textAlign: "center" }}>
          <Link to="/login">Not you? Sign in as someone else</Link>
        </Caption1>
      </main>

      <Toaster toasterId={toasterId} position="top-end" />

      <Dialog
        open={openService !== null}
        onOpenChange={(_, d) => !d.open && setOpenService(null)}
      >
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Schedule {openService?.label}</DialogTitle>
            <DialogContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalM)", paddingTop: "var(--spacingHorizontalS)" }}>
                <Field label="When" required>
                  <Input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(_, d) => setDateTime(d.value)}
                  />
                </Field>
                {openService?.key === "transportation" ? (
                  <>
                    <Field label="From address" required>
                      <Input
                        placeholder="Pickup address"
                        value={fromAddress}
                        onChange={(_, d) => setFromAddress(d.value)}
                      />
                    </Field>
                    <Field label="To address" required>
                      <Input
                        placeholder="Drop-off address"
                        value={toAddress}
                        onChange={(_, d) => setToAddress(d.value)}
                      />
                    </Field>
                    <Field label="Traveler names" required hint="Comma-separated if more than one">
                      <Input
                        placeholder="e.g. Ellie, Grandpa Joe"
                        value={travelers}
                        onChange={(_, d) => setTravelers(d.value)}
                      />
                    </Field>
                  </>
                ) : openService?.key === "sitter" ? (
                  <>
                    <Field label="Address" required>
                      <Input
                        placeholder="Where should the sitter go?"
                        value={location}
                        onChange={(_, d) => setLocation(d.value)}
                      />
                    </Field>
                    <Field label="Who is the sitter for?" required hint="Name and age(s), or pet name and type">
                      <Input
                        placeholder="e.g. Ellie (7), or Max the golden retriever"
                        value={sitterFor}
                        onChange={(_, d) => setSitterFor(d.value)}
                      />
                    </Field>
                    <Field label="Duration" required hint="e.g. 4 hours, 6pm–10pm">
                      <Input
                        placeholder="Duration"
                        value={sitterDuration}
                        onChange={(_, d) => setSitterDuration(d.value)}
                      />
                    </Field>
                  </>
                ) : openService?.key === "home-watch" ? (
                  <>
                    <Field label="Address" required>
                      <Input
                        placeholder="Where should we be present?"
                        value={location}
                        onChange={(_, d) => setLocation(d.value)}
                      />
                    </Field>
                    <Field label="Service or contract work to monitor" required hint="e.g. plumber, electrician, cleaner">
                      <Input
                        placeholder="What work will be happening?"
                        value={watchWork}
                        onChange={(_, d) => setWatchWork(d.value)}
                      />
                    </Field>
                    <Field label="Duration" required hint="e.g. 2 hours, 9am–12pm">
                      <Input
                        placeholder="Duration"
                        value={watchDuration}
                        onChange={(_, d) => setWatchDuration(d.value)}
                      />
                    </Field>
                  </>
                ) : openService?.key === "appointment" ? (
                  <>
                    <Field label="Appointment location" required>
                      <Input
                        placeholder="Address or venue"
                        value={location}
                        onChange={(_, d) => setLocation(d.value)}
                      />
                    </Field>
                    <Field label="Purpose of the appointment" required hint="e.g. dental cleaning, hair appointment">
                      <Input
                        placeholder="What is the appointment for?"
                        value={apptPurpose}
                        onChange={(_, d) => setApptPurpose(d.value)}
                      />
                    </Field>
                    <Field label="Details" required hint="Provider name, contact info, preferences">
                      <Textarea
                        rows={3}
                        placeholder="Anything we need to know to book or confirm this"
                        value={apptDetails}
                        onChange={(_, d) => setApptDetails(d.value)}
                      />
                    </Field>
                  </>
                ) : (
                  <Field label="Address">
                    <Input
                      placeholder="Enter an address"
                      value={location}
                      onChange={(_, d) => setLocation(d.value)}
                    />
                  </Field>
                )}
                <Field label="Notes for the provider">
                  <Textarea
                    rows={3}
                    placeholder="Anything they should know?"
                    value={notes}
                    onChange={(_, d) => setNotes(d.value)}
                  />
                </Field>
                <Field label="Choose a provider" required>
                  <RadioGroup
                    value={selectedProvider}
                    onChange={(_, d) => setSelectedProvider(d.value)}
                  >
                    {(openService ? providersByService[openService.key] ?? [] : []).map((p) => (
                      <Radio
                        key={p.name}
                        value={p.name}
                        label={
                          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacingHorizontalS)" }}>
                            <Avatar name={p.name} size={24} />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              <span style={{ color: "var(--colorNeutralForeground1)" }}>
                                {p.name} · ★ {p.rating.toFixed(1)}
                              </span>
                              <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>
                                {p.specialty}
                              </Caption1>
                            </div>
                          </div>
                        }
                      />
                    ))}
                  </RadioGroup>
                </Field>
              </div>
            </DialogContent>
            <DialogActions>
              <Button appearance="outline" onClick={() => setOpenService(null)}>
                Cancel
              </Button>
              <Button
                appearance="primary"
                disabled={
                  !dateTime ||
                  !selectedProvider ||
                  (openService?.key === "transportation" &&
                    (!fromAddress || !toAddress || !travelers)) ||
                  (openService?.key === "sitter" &&
                    (!location || !sitterFor || !sitterDuration)) ||
                  (openService?.key === "home-watch" &&
                    (!location || !watchWork || !watchDuration)) ||
                  (openService?.key === "appointment" &&
                    (!location || !apptPurpose || !apptDetails))
                }
                onClick={submitScheduler}
              >
                Confirm booking
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>


    </div>
  );
}

function iconForType(type: Service["type"]) {
  switch (type) {
    case "Transportation":
      return <VehicleCar24Regular />;
    case "Sitter":
      return <PeopleTeam24Regular />;
    case "Home Watch":
      return <Home24Regular />;
    case "Appointment":
      return <CalendarLtr24Regular />;
  }
}

function StatCard({
  label,
  value,
  tone,
  active,
  onClick,
}: {
  label: string;
  value: number;
  tone: "brand" | "success" | "danger";
  active?: boolean;
  onClick?: () => void;
}) {
  const color =
    tone === "brand"
      ? "var(--colorBrandForeground1)"
      : tone === "success"
        ? "var(--colorStatusSuccessForeground1)"
        : "var(--colorStatusDangerForeground1)";
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: "left",
        cursor: "pointer",
        background: active ? "var(--colorNeutralBackground1Selected)" : "var(--colorNeutralBackground1)",
        border: active ? `2px solid ${color}` : "1px solid var(--colorNeutralStroke2)",
        borderRadius: "var(--borderRadiusLarge)",
        padding: "var(--spacingHorizontalL)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacingHorizontalXS)",
        font: "inherit",
        color: "inherit",
      }}
    >
      <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>{label}</Caption1>
      <div style={{ fontSize: "var(--fontSizeHero800, 40px)", fontWeight: 700, color, lineHeight: 1 }}>
        {value}
      </div>
    </button>
  );
}
