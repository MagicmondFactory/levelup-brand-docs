import { Link } from 'react-router-dom';

const TOPICS = [
  {
    num: "01 / FOUNDATION",
    title: "Story, Mission & Positioning",
    desc: "The sports marketing ecosystem, the problem LevelUp solves, and our seven positioning pillars.",
    path: "/foundation",
  },
  {
    num: "02 / VOICE",
    title: "Tone of Voice & Messaging",
    desc: "Direct, number-centric, and myth-breaking writing rules with explicit Say / Don't say examples.",
    path: "/voice",
  },
  {
    num: "03 / LOGO",
    title: "Wordmark, Symbol & Misuse",
    desc: "Primary mark, standalone U symbol, clearspace diagram, color pairings, and 6 misuse prohibitions.",
    path: "/logo",
  },
  {
    num: "04 / COLOR",
    title: "Palette Ramps & Contrast",
    desc: "Blue Orchid, Electric Green, Pitch Green, Trophy Gold ramps, neutral greys, and WCAG AA contrast rules.",
    path: "/color",
  },
  {
    num: "05 / TYPOGRAPHY",
    title: "Typefaces & Type Scale",
    desc: "Radio Canada Big (Display), Geist (Body), and Space Grotesk (Numerals) with step-by-step scale.",
    path: "/typography",
  },
  {
    num: "06 / AUDIENCE",
    title: "Buyers & Market Context",
    desc: "Target stakeholder profiles, decision maker buyers vs. influencers, and MENA/South Asia market reach.",
    path: "/audience",
  },
  {
    num: "07 / APPLICATIONS",
    title: "Collateral & Digital Specs",
    desc: "Digital campaigns, social templates, stationery, broadcast graphics, and corporate guidelines.",
    path: "/applications",
  },
  {
    num: "08 / SIGNATURE",
    title: "Email Signature Generator",
    desc: "Official corporate signature format with 1-click rich formatted copy and clean HTML export.",
    path: "/email-signature",
  },
  {
    num: "09 / DOWNLOADS",
    title: "Asset Index & Files",
    desc: "Direct indexed access to vector SVGs, TTF brand fonts, and official PDF brand manual.",
    path: "/downloads",
  },
];

export function TopicsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {TOPICS.map((topic) => (
        <Link key={topic.path} to={topic.path} className="topic-card">
          <div className="topic-card-num">{topic.num}</div>
          <h3 className="topic-card-title">{topic.title}</h3>
          <p className="topic-card-desc">{topic.desc}</p>
        </Link>
      ))}
    </div>
  );
}
