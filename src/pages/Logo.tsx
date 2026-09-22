import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { STRINGS } from '../utils/strings';
import { AlertTriangle, Download, ShieldCheck } from 'lucide-react';

const MISUSE_RULES = [
  { rule: "Do not stretch or alter aspect ratios", desc: "Never condense, extend, or skew the wordmark or mark geometry." },
  { rule: "Do not recolor outside brand specs", desc: "Never apply arbitrary gradients, drop shadows, or unapproved neon tones." },
  { rule: "Do not crowd the clearspace boundary", desc: "Always maintain clearance equal to the height of the U mark symbol." },
  { rule: "Do not place on low-contrast backgrounds", desc: "Never put dark marks on dark navy or light marks on white without badges." },
  { rule: "Do not rotate or tilt the logo", desc: "The mark and logotype must always remain horizontally oriented." },
  { rule: "Do not retype or swap font weights", desc: "Always use official master vector assets rather than standard fonts." },
];

export default function Logo() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-2 border-b border-[#1C2537] pb-8">
        <Badge variant="cyan">{STRINGS.logo.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {STRINGS.logo.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {STRINGS.logo.lead}
        </p>
      </header>

      {/* Primary Wordmark & Mark */}
      <section id="wordmark" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Primary Wordmark & Standalone Mark
          </h2>
          <Badge variant="primary">Official Master Assets</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Wordmark */}
          <Card className="p-8 bg-[#0D1117] border-[#1C2537] flex flex-col items-center justify-center text-center">
            <div className="h-28 flex items-center justify-center w-full px-6 py-4 bg-[#080B10] rounded-lg border border-[#1A2234] mb-4">
              <img
                src="/assets/logos/LEVELUP.svg"
                alt="LevelUp Media Wordmark"
                className="max-h-12 w-auto object-contain"
              />
            </div>
            <div className="text-sm font-bold text-white mb-1">Primary Wordmark</div>
            <div className="text-xs text-slate-400">
              Used across mastheads, corporate communications, and broadcast headers.
            </div>
            <a
              href="/assets/logos/LEVELUP.svg"
              download
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
            >
              <Download className="w-3.5 h-3.5" /> Download SVG
            </a>
          </Card>

          {/* Standalone Mark */}
          <Card className="p-8 bg-[#0D1117] border-[#1C2537] flex flex-col items-center justify-center text-center">
            <div className="h-28 flex items-center justify-center w-full px-6 py-4 bg-[#080B10] rounded-lg border border-[#1A2234] mb-4">
              <img
                src="/assets/logos/U.svg"
                alt="LevelUp U Mark"
                className="max-h-14 w-auto object-contain"
              />
            </div>
            <div className="text-sm font-bold text-white mb-1">The U Symbol</div>
            <div className="text-xs text-slate-400">
              Used for app icons, profile avatars, micro-badges, and broadcast bugs.
            </div>
            <a
              href="/assets/logos/U.svg"
              download
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
            >
              <Download className="w-3.5 h-3.5" /> Download SVG
            </a>
          </Card>
        </div>
      </section>

      {/* Clearspace & Minimum Dimensions */}
      <section id="clearspace" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Clearspace & Minimum Dimensions
        </h2>
        <Card className="p-6 bg-[#0E131E] border-[#1C2537]">
          <div className="flex items-center gap-2 mb-3 text-sky-400 font-semibold text-sm">
            <ShieldCheck className="w-4 h-4" /> Clearspace Protection Rule
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The minimum exclusion zone around the LevelUp wordmark is equal to the height of the &ldquo;U&rdquo; symbol on all four sides. No other typography, graphics, photos, or page margins may infringe inside this perimeter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 pt-4 border-t border-[#1C2537]">
            <div className="p-3 bg-[#111622] rounded-lg border border-[#242F45]">
              <div className="text-xs font-mono text-slate-400 uppercase">Digital Minimum</div>
              <div className="text-sm font-bold text-white mt-1">120px width / 32px height</div>
            </div>
            <div className="p-3 bg-[#111622] rounded-lg border border-[#242F45]">
              <div className="text-xs font-mono text-slate-400 uppercase">Print Minimum</div>
              <div className="text-sm font-bold text-white mt-1">28mm width / 8mm height</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Misuse Prohibitions */}
      <section id="misuse" className="space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-rose-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Prohibited Usage & Misuse Rules
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MISUSE_RULES.map((item, idx) => (
            <Card key={idx} className="p-4 bg-[#0E131E] border-rose-900/30">
              <div className="text-xs font-mono font-bold text-rose-400 mb-1">
                RULE #{idx + 1}
              </div>
              <div className="text-sm font-bold text-slate-200 mb-1">{item.rule}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
