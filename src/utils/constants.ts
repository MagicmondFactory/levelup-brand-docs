export interface NavItem {
  name: string;
  path: string;
  badge?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const NAV_STRUCTURE: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { name: "Documentation Index", path: "/" },
    ]
  },
  {
    label: "Brand System",
    items: [
      { name: "Foundation & Story", path: "/foundation" },
      { name: "Voice & Tone", path: "/voice" },
      { name: "Logo & Mark", path: "/logo" },
      { name: "Color System", path: "/color" },
      { name: "Typography", path: "/typography" },
    ]
  },
  {
    label: "Strategy & Assets",
    items: [
      { name: "Audience & Markets", path: "/audience" },
      { name: "Applications", path: "/applications" },
      { name: "Email Signature", path: "/email-signature", badge: "NEW" },
      { name: "Asset Index", path: "/downloads" },
    ]
  }
];

export interface SearchItem {
  title: string;
  category: string;
  url: string;
  keywords: string;
  snippet: string;
}

export const SEARCH_INDEX: SearchItem[] = [
  {
    title: "Overview — Guidelines Directory",
    category: "General",
    url: "/",
    keywords: "overview directory introduction reference manual guidelines search home",
    snippet: "System overview, reference guide rules, quick links to foundation, logo, colors, typography, and assets."
  },
  {
    title: "Brand Story & Ecosystem",
    category: "Foundation",
    url: "/foundation#story",
    keywords: "story ecosystem touchpoints sports marketing mena south asia fragmentation",
    snippet: "One Fan. A Dozen Touchpoints. How LevelUp connects fragmented sports touchpoints into one system."
  },
  {
    title: "Mission & Vision",
    category: "Foundation",
    url: "/foundation#mission-vision",
    keywords: "mission vision purpose gateway to sport mena rights platforms creators athletes",
    snippet: "To give brands one way into sport by replacing five disconnected vendors with a single 360° ecosystem."
  },
  {
    title: "Positioning — Built, Not Bought",
    category: "Foundation",
    url: "/foundation#positioning",
    keywords: "positioning built not bought pillars ecosystem access reach strategy proof",
    snippet: "LevelUp positioning strategy and the 7 core pillars defining our commercial approach."
  },
  {
    title: "Tone of Voice",
    category: "Voice",
    url: "/voice#tone",
    keywords: "voice tone direct confident myth-breaking consultative number-centric writing",
    snippet: "Direct, confident and intelligent. Write for clarity and impact, never corporate buzzwords."
  },
  {
    title: "Say / Don't Say Matrix",
    category: "Voice",
    url: "/voice#say-matrix",
    keywords: "say matrix examples comparison copy writing guidelines messaging do don't",
    snippet: "Side-by-side comparison of approved brand statements versus generic marketing copy."
  },
  {
    title: "Primary Logo & Mark",
    category: "Logo",
    url: "/logo#wordmark",
    keywords: "logo wordmark mark u symbol asset download vector svg eps png",
    snippet: "Primary LevelUp wordmark and standalone U symbol specifications and downloads."
  },
  {
    title: "Logo Clearspace & Minimum Sizes",
    category: "Logo",
    url: "/logo#clearspace",
    keywords: "clearspace minimum size scale padding dimensions print screen pixels mm",
    snippet: "Clearspace padding rules (height of U symbol) and minimum dimensions for digital and print."
  },
  {
    title: "Logo Misuse — What NOT To Do",
    category: "Logo",
    url: "/logo#misuse",
    keywords: "misuse rules prohibitions colors distortion gradient drop shadow stretch",
    snippet: "The 6 strict rules for logo application across all partner communications."
  },
  {
    title: "Primary Palette — Royal Blue",
    category: "Color",
    url: "/color#primary",
    keywords: "color primary royal blue hex #00205B shade ramp cmyk rgb pantone",
    snippet: "LevelUp Royal Blue #00205B specifications, 5-shade tint ramp, and print conversions."
  },
  {
    title: "Secondary & Accent — Electric Cyan",
    category: "Color",
    url: "/color#secondary",
    keywords: "color secondary electric cyan hex #00C2FF digital accent highlights contrast",
    snippet: "Electric Cyan #00C2FF accent color guidelines for high-impact digital callouts."
  },
  {
    title: "Primary Typeface — Inter",
    category: "Typography",
    url: "/typography#primary",
    keywords: "typography font inter sans-serif weights regular medium semi-bold bold google font",
    snippet: "Inter typeface specification, hierarchy table, and responsive type scales."
  },
  {
    title: "Secondary Typeface — Outfit",
    category: "Typography",
    url: "/typography#secondary",
    keywords: "typography font outfit display font modern clean headings uppercase",
    snippet: "Outfit display font usage for primary hero headings and section labels."
  },
  {
    title: "Core Audience Personas",
    category: "Audience",
    url: "/audience#personas",
    keywords: "audience personas sports fans media buyers brand managers creators rights holders",
    snippet: "Key stakeholder profiles across enterprise brands, sports federations, and creators."
  },
  {
    title: "Corporate Applications & Collateral",
    category: "Applications",
    url: "/applications#business-cards",
    keywords: "applications business cards stationery social broadcast merchandise presentation",
    snippet: "Standardized templates for print collateral, business cards, and broadcast lower-thirds."
  },
  {
    title: "Email Signature Generator & Code",
    category: "Applications",
    url: "/email-signature",
    keywords: "email signature html copy mail outlook gmail template shareefuddin logo footer",
    snippet: "Official LevelUp Media email signature template and 1-click HTML generator for team members."
  },
  {
    title: "Asset Downloads & Packages",
    category: "Downloads",
    url: "/downloads",
    keywords: "downloads vectors logo font guidelines pdf zip packages eps svg png",
    snippet: "Download vector brand assets, typography font files, and the full brand manual PDF."
  }
];

export const BROCHURE_URL = "https://drive.google.com/drive/folders/16eII7znDnFO3qGR9hNjNU3g8xGx-0Ao8";
export const BRAND_DOCS_VERSION = "v1.0";
export const LAST_UPDATED = "September 2026";
