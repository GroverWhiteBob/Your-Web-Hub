export type Lane = "Work" | "Personal" | "Family" | "Pets";

export type LifeEvent = {
  id: string;
  title: string;
  lane: Lane;
  /** ISO date-time */
  start: string;
  /** duration in minutes */
  duration: number;
  location?: string;
};

const KEY = "ubu.events.v6";

export const LANES: Lane[] = ["Work", "Personal", "Family", "Pets"];

export const LANE_COLORS: Record<Lane, { bg: string; fg: string; accent: string }> = {
  Work: {
    bg: "var(--colorPaletteBlueBackground2, #E5F2FF)",
    fg: "var(--colorPaletteBlueForeground2, #003D6B)",
    accent: "var(--colorBrandBackground)",
  },
  Personal: {
    bg: "var(--colorPaletteBerryBackground2, #F5E1F5)",
    fg: "var(--colorPaletteBerryForeground2, #6B1D6B)",
    accent: "#C239B3",
  },
  Family: {
    bg: "var(--colorPaletteGreenBackground2, #DCF0DA)",
    fg: "var(--colorPaletteGreenForeground2, #0E5C10)",
    accent: "#107C10",
  },
  Pets: {
    bg: "var(--colorPaletteMarigoldBackground2, #FBEBC6)",
    fg: "var(--colorPaletteMarigoldForeground2, #6A4A00)",
    accent: "#D68F00",
  },
};

function seedEvents(): LifeEvent[] {
  const now = new Date();
  const monday = new Date(now);
  const day = monday.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  monday.setDate(monday.getDate() + diff);
  monday.setHours(0, 0, 0, 0);
  const at = (dayOffset: number, hour: number, min = 0) => {
    const d = new Date(monday);
    d.setDate(d.getDate() + dayOffset);
    d.setHours(hour, min, 0, 0);
    return d.toISOString();
  };
  return [
    // ── Work ───────────────────────────────────────────────
    // Mon
    { id: "w-mon-standup", title: "Team stand-up", lane: "Work", start: at(0, 9), duration: 30 },
    { id: "w-mon-reviews", title: "Mid-year reviews (3 of 6)", lane: "Work", start: at(0, 10), duration: 180 },
    { id: "w-mon-lunch-pm", title: "Lunch with Product Manager", lane: "Work", start: at(0, 13), duration: 60 },
    { id: "w-mon-roadmap", title: "Roadmap review — Q3", lane: "Work", start: at(0, 14), duration: 60 },
    { id: "w-mon-1on1", title: "1:1 with VP Sales", lane: "Work", start: at(0, 15), duration: 45 },
    { id: "w-mon-email", title: "Inbox + async replies", lane: "Work", start: at(0, 16, 30), duration: 45 },
    // Tue
    { id: "w-tue-malaysia", title: "Customer visit in Malaysia", lane: "Work", start: at(1, 9), duration: 480, location: "Kuala Lumpur" },
    { id: "w-tue-debrief", title: "Debrief with account team", lane: "Work", start: at(1, 17, 30), duration: 45 },
    // Wed
    { id: "w-wed-standup", title: "Team stand-up", lane: "Work", start: at(2, 9), duration: 30 },
    { id: "w-wed-pipeline", title: "Pipeline review", lane: "Work", start: at(2, 10), duration: 60 },
    { id: "w-wed-interview", title: "Candidate interview — Head of CS", lane: "Work", start: at(2, 11, 30), duration: 60 },
    { id: "w-wed-geneva", title: "Prepare Geneva trip — Visa · Agenda · Slides", lane: "Work", start: at(2, 14), duration: 120 },
    { id: "w-wed-reviews", title: "Mid-year reviews (3 of 6)", lane: "Work", start: at(2, 16), duration: 90 },
    // Thu
    { id: "w-thu-mtgs", title: "Back-to-back meetings", lane: "Work", start: at(3, 9), duration: 240 },
    { id: "w-thu-lunch", title: "Working lunch — legal review", lane: "Work", start: at(3, 13), duration: 45 },
    { id: "w-thu-strategy", title: "Strategy sync with CFO", lane: "Work", start: at(3, 14), duration: 60 },
    { id: "w-thu-board", title: "Board deck edits", lane: "Work", start: at(3, 15, 30), duration: 75 },
    { id: "w-thu-1on1", title: "1:1 with Chief of Staff", lane: "Work", start: at(3, 17), duration: 30 },
    // Fri
    { id: "w-fri-standup", title: "Team stand-up", lane: "Work", start: at(4, 9), duration: 30 },
    { id: "w-fri-forecast", title: "Forecast call — Sales Ops", lane: "Work", start: at(4, 10), duration: 60 },
    { id: "w-fri-skip", title: "Skip-level with engineering", lane: "Work", start: at(4, 11, 30), duration: 45 },
    { id: "w-fri-demand", title: "Monthly Demand Review", lane: "Work", start: at(4, 13), duration: 90 },
    { id: "w-fri-townhall", title: "All-hands town hall", lane: "Work", start: at(4, 16), duration: 60 },
    // Sat
    { id: "w-sat-email", title: "Inbox zero + weekly plan", lane: "Work", start: at(5, 10), duration: 60 },
    { id: "w-sat-read", title: "Read industry briefings", lane: "Work", start: at(5, 15), duration: 45 },
    // Sun
    { id: "w-sun-prep", title: "Prep for Monday exec sync", lane: "Work", start: at(6, 16), duration: 45 },

    // ── Personal ───────────────────────────────────────────
    { id: "p-mon-gym", title: "Gym — strength", lane: "Personal", start: at(0, 6, 30), duration: 60 },
    { id: "p-tue-run", title: "Morning run", lane: "Personal", start: at(1, 6, 30), duration: 45 },
    { id: "p-wed-yoga", title: "Yoga class", lane: "Personal", start: at(2, 7), duration: 60, location: "Studio 8" },
    { id: "p-wed-dentist", title: "Dentist check-up", lane: "Personal", start: at(2, 12, 30), duration: 45 },
    { id: "p-thu-ac", title: "Air-conditioner servicing", lane: "Personal", start: at(3, 16), duration: 90, location: "Home" },
    { id: "p-fri-haircut", title: "Haircut", lane: "Personal", start: at(4, 18), duration: 45 },
    { id: "p-sat-friends", title: "Friends visiting from Boston", lane: "Personal", start: at(5, 18), duration: 180 },
    { id: "p-sat-brunch", title: "Brunch with Priya", lane: "Personal", start: at(5, 11), duration: 90 },
    { id: "p-sun-groceries", title: "Groceries + meal prep", lane: "Personal", start: at(6, 10), duration: 90 },
    { id: "p-sun-read", title: "Quiet reading hour", lane: "Personal", start: at(6, 17), duration: 60 },

    // ── Family ─────────────────────────────────────────────
    ...Array.from({ length: 7 }, (_, i) => ({
      id: `f-mum-${i}`,
      title: "Video call with Mum",
      lane: "Family" as Lane,
      start: at(i, 19),
      duration: 30,
    })),
    { id: "f-mon-pickup", title: "School pickup — Ellie", lane: "Family", start: at(0, 15, 30), duration: 30 },
    { id: "f-tue-homework", title: "Homework with the kids", lane: "Family", start: at(1, 17), duration: 60 },
    { id: "f-wed-doctor", title: "Weekly call with Mum's doctor", lane: "Family", start: at(2, 18), duration: 30 },
    { id: "f-thu-piano", title: "Piano lesson — Leo", lane: "Family", start: at(3, 17, 30), duration: 45 },
    { id: "f-fri-movie", title: "Family movie night", lane: "Family", start: at(4, 20), duration: 120 },
    { id: "f-sat-park", title: "Park + picnic with kids", lane: "Family", start: at(5, 11), duration: 150 },
    { id: "f-sun-lunch", title: "Sunday lunch at Mum's", lane: "Family", start: at(6, 13), duration: 120 },

    // ── Pets ───────────────────────────────────────────────
    { id: "pet-mon-walk", title: "Morning walk — Bruno", lane: "Pets", start: at(0, 7, 30), duration: 30 },
    { id: "pet-tue-walk", title: "Morning walk — Bruno", lane: "Pets", start: at(1, 7, 30), duration: 30 },
    { id: "pet-wed-worm", title: "Puppy deworming appointment", lane: "Pets", start: at(2, 11), duration: 45, location: "Vet clinic" },
    { id: "pet-thu-walk", title: "Evening walk — Bruno", lane: "Pets", start: at(3, 18, 30), duration: 30 },
    { id: "pet-fri-groom", title: "Dog groomer", lane: "Pets", start: at(4, 10), duration: 60 },
    { id: "pet-sat-park", title: "Dog park meetup", lane: "Pets", start: at(5, 9), duration: 60 },
    { id: "pet-sun-vet", title: "Cat annual vaccination", lane: "Pets", start: at(6, 15), duration: 45, location: "Vet clinic" },
  ];
}

export function getEvents(): LifeEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) {
      const seed = seedEvents();
      window.localStorage.setItem(KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw) as LifeEvent[];
  } catch {
    return [];
  }
}

export function saveEvents(events: LifeEvent[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(events));
}

export function addEvent(e: LifeEvent) {
  const all = getEvents();
  all.push(e);
  saveEvents(all);
}

export function getWeekStart(d = new Date()): Date {
  const monday = new Date(d);
  const day = monday.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  monday.setDate(monday.getDate() + diff);
  monday.setHours(0, 0, 0, 0);
  return monday;
}
