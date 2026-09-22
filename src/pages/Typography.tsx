import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { STRINGS } from '../utils/strings';

const TYPE_ROLES = [
  {
    role: "Display Headings (Hero, Category, Cover)",
    font: "Outfit",
    weight: "Bold / Extrabold (700 / 800)",
    sample: "BUILD THE ECOSYSTEM",
    notes: "High energy, contemporary geometric character for major section titles."
  },
  {
    role: "Editorial Headings & Section Titles",
    font: "Inter",
    weight: "Semi-Bold / Bold (600 / 700)",
    sample: "One Fan. A Dozen Touchpoints.",
    notes: "Clean, ultra-legible typographic framing across dark containers."
  },
  {
    role: "Body Copy & Documentation",
    font: "Inter",
    weight: "Regular / Medium (400 / 500)",
    sample: "LevelUp Media is a 360-degree sports marketing ecosystem connecting rights, platforms, creators, athletes, and production.",
    notes: "Optimized for dense reading on screens with tall x-height and neutral geometry."
  },
  {
    role: "Code & Metric Labels",
    font: "JetBrains Mono / Inter Mono",
    weight: "Regular (400)",
    sample: "#00205B / WCAG AAA / 1920x1080",
    notes: "Used for specifications, color codes, ratios, and technical tables."
  }
];

export default function Typography() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-2 border-b border-[#1C2537] pb-8">
        <Badge variant="cyan">{STRINGS.typography.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {STRINGS.typography.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {STRINGS.typography.lead}
        </p>
      </header>

      {/* Primary Typefaces */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Primary Typeface Families
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6 bg-[#0E131E] border-[#1C2537]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-sky-400">BODY & UI FONT</span>
              <Badge variant="primary">Google Font</Badge>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Inter</h3>
            <p className="text-xs text-slate-400 mb-4">
              Crafted specifically for computer screens with tall x-height to aid in legibility of mixed-case and lowercase text.
            </p>
            <div className="p-4 bg-[#111622] rounded border border-[#242F45] text-sm text-slate-200">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 (!@#$%^&amp;*)
            </div>
          </Card>

          <Card className="p-6 bg-[#0E131E] border-[#1C2537]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400">DISPLAY FONT</span>
              <Badge variant="cyan">Google Font</Badge>
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-2 font-display">Outfit</h3>
            <p className="text-xs text-slate-400 mb-4">
              Geometric, vibrant letterforms designed to convey athletic momentum, commercial ambition, and contemporary precision.
            </p>
            <div className="p-4 bg-[#111622] rounded border border-[#242F45] text-sm text-slate-200 font-display">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 (!@#$%^&amp;*)
            </div>
          </Card>
        </div>
      </section>

      {/* Type Roles & Hierarchy */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Typographic Hierarchy & Role Matrix
        </h2>
        <div className="space-y-3">
          {TYPE_ROLES.map((item, idx) => (
            <Card key={idx} className="p-5 bg-[#0E131E] border-[#1C2537]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-[#1C2537]">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                  {item.role}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {item.font} — {item.weight}
                </span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
                {item.sample}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {item.notes}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
