export interface WorkEntry {
  name: string;
  date: string;
  description: string;
  url?: string;
}

export const work: WorkEntry[] = [
  {
    name: "Monolith Systematic",
    date: "2026, in progress",
    description:
      "Building data infrastructure and a macro regime dashboard for a systematic global macro fund.",
  },
  {
    name: "SycaMore",
    date: "2025 to 2026",
    description:
      "Founded a volunteer credentialing venture and piloted it with City Forest CSP (about 100 volunteers). FBLA Entrepreneurship Pitch: 1st at FLC Regionals, 1st in California, 2nd at Nationals.",
  },
  {
    name: "FBLA Accounting Case Competition",
    date: "2025 to 2026",
    description:
      "1st at FLC Regionals, 1st in California, 2nd at Nationals.",
  },
  {
    name: "OTOS",
    date: "2025",
    description:
      "Led a 1st Place Overall win at De Anza HACKS 4.0 with a Chrome extension that blocks distracting sites and intervenes based on your calendar. I designed the two part architecture, coded the backend, and integrated Gemini.",
    url: "[PASTE YOUR DEVPOST URL HERE]",
  },
  {
    name: "SHORG",
    date: "2026, in progress",
    description:
      "A personal life operating system I am building with Next.js, Supabase, and the Anthropic API.",
    url: "https://github.com/b1nanapeel/SHORG",
  },
  // {
  //   name: "Prism Connector",
  //   date: "",
  //   description: "",
  //   url: "#",
  // },
  // {
  //   name: "Macro Regime Dashboard",
  //   date: "",
  //   description: "",
  //   url: "#",
  // },
  // {
  //   name: "FOMC Sentiment Tracker",
  //   date: "",
  //   description: "",
  //   url: "#",
  // },
];
