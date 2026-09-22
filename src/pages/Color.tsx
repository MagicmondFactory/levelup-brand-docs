import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { STRINGS } from '../utils/strings';
import { useClipboard } from '../hooks/useClipboard';
import { Copy, Check } from 'lucide-react';

const PRIMARY_SWATCHES = [
  { name: "Royal Blue (Base)", hex: "#00205B", rgb: "0, 32, 91", cmyk: "100, 85, 20, 35", role: "Primary brand anchor, mastheads, corporate print" },
  { name: "Blue Deep", hex: "#001438", rgb: "0, 20, 56", cmyk: "100, 88, 30, 60", role: "Dark mode backdrops, deep surface containers" },
  { name: "Blue Navy", hex: "#000D24", rgb: "0, 13, 36", cmyk: "100, 90, 35, 75", role: "Deepest structural framing, extreme contrast" },
  { name: "Blue Light", hex: "#1A3B7A", rgb: "26, 59, 122", cmyk: "90, 70, 10, 10", role: "Active hover states, interactive card outlines" },
  { name: "Blue Mist", hex: "#E6ECF5", rgb: "230, 236, 245", cmyk: "10, 5, 0, 0", role: "High-contrast light print backgrounds, subtle fills" },
];

const ACCENT_SWATCHES = [
  { name: "Electric Cyan (Accent)", hex: "#00C2FF", rgb: "0, 194, 255", cmyk: "70, 0, 0, 0", role: "High-impact digital highlights, buttons, badges" },
  { name: "Cyan Deep", hex: "#009ACC", rgb: "0, 154, 204", cmyk: "75, 10, 5, 5", role: "Hover states for cyan elements, contrast links" },
  { name: "Cyan Dark", hex: "#007399", rgb: "0, 115, 153", cmyk: "80, 25, 10, 15", role: "Borders, charts, subtle status indicators" },
  { name: "Cyan Tint", hex: "#E5F9FF", rgb: "229, 249, 255", cmyk: "8, 0, 0, 0", role: "Light mode notification callouts, pastel backdrops" },
];

const NEUTRAL_SWATCHES = [
  { name: "Pure Dark", hex: "#080B10", rgb: "8, 11, 16", role: "Canvas background, base page body" },
  { name: "Card Surface", hex: "#111622", rgb: "17, 22, 34", role: "Card backgrounds, component containers" },
  { name: "Border Slate", hex: "#242F45", rgb: "36, 47, 69", role: "Component borders, dividing rules, strokes" },
  { name: "Text Primary", hex: "#F1F5F9", rgb: "241, 245, 249", role: "Headings, primary body copy on dark" },
  { name: "Text Muted", hex: "#94A3B8", rgb: "148, 163, 184", role: "Secondary metadata, captions, timestamps" },
];

export default function Color() {
  const { copy, copiedText } = useClipboard();

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-2 border-b border-[#1C2537] pb-8">
        <Badge variant="cyan">{STRINGS.color.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {STRINGS.color.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {STRINGS.color.lead}
        </p>
      </header>

      {/* Primary Palette */}
      <section id="primary" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Primary Palette — Royal Blue
          </h2>
          <span className="text-xs text-slate-400">Click swatch to copy HEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRIMARY_SWATCHES.map((swatch) => {
            const isJustCopied = copiedText === swatch.hex;
            return (
              <Card
                key={swatch.hex}
                className="p-4 bg-[#0E131E] border-[#1C2537] hover:border-sky-500/40 cursor-pointer group"
                onClick={() => copy(swatch.hex)}
              >
                <div
                  className="h-20 rounded-lg w-full mb-3 flex items-end justify-end p-2 transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: swatch.hex }}
                >
                  <button className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-[10px] font-mono text-white flex items-center gap-1">
                    {isJustCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{isJustCopied ? "COPIED" : swatch.hex}</span>
                  </button>
                </div>
                <div className="text-sm font-bold text-white mb-1">{swatch.name}</div>
                <div className="text-xs font-mono text-sky-400 mb-1">{swatch.hex}</div>
                <div className="text-[11px] text-slate-400">{swatch.role}</div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Accent Palette */}
      <section id="secondary" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Secondary & Accent Palette — Electric Cyan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACCENT_SWATCHES.map((swatch) => {
            const isJustCopied = copiedText === swatch.hex;
            return (
              <Card
                key={swatch.hex}
                className="p-4 bg-[#0E131E] border-[#1C2537] hover:border-cyan-500/40 cursor-pointer group"
                onClick={() => copy(swatch.hex)}
              >
                <div
                  className="h-20 rounded-lg w-full mb-3 flex items-end justify-end p-2 transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: swatch.hex }}
                >
                  <button className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] font-mono text-white flex items-center gap-1">
                    {isJustCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{isJustCopied ? "COPIED" : swatch.hex}</span>
                  </button>
                </div>
                <div className="text-sm font-bold text-white mb-1">{swatch.name}</div>
                <div className="text-xs font-mono text-cyan-400 mb-1">{swatch.hex}</div>
                <div className="text-[11px] text-slate-400">{swatch.role}</div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Neutrals & Dark Architecture */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Neutral Architecture & Dark Tokens
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {NEUTRAL_SWATCHES.map((swatch) => (
            <Card
              key={swatch.hex}
              className="p-3 bg-[#0E131E] border-[#1C2537] cursor-pointer hover:border-slate-500 group"
              onClick={() => copy(swatch.hex)}
            >
              <div
                className="h-10 rounded mb-2 border border-white/10"
                style={{ backgroundColor: swatch.hex }}
              />
              <div className="text-xs font-bold text-white truncate">{swatch.name}</div>
              <div className="text-[10px] font-mono text-slate-400">{swatch.hex}</div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
