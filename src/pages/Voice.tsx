import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { STRINGS } from '../utils/strings';
import { Check, X, MessageSquare, Zap, BarChart2, Shield } from 'lucide-react';

const TONE_PILLARS = [
  {
    title: "Direct & Uncompromising",
    icon: Zap,
    desc: "Get straight to the point. Sports moves at breakneck speed; communications should never meander with buzzwords."
  },
  {
    title: "Confident & Authoritative",
    icon: Shield,
    desc: "Speak with the assurance of market insiders who hold rights and execute deals on the ground."
  },
  {
    title: "Myth-Breaking",
    icon: MessageSquare,
    desc: "Challenge conventional legacy media assumptions with real-world fan engagement metrics and modern cultural proof."
  },
  {
    title: "Commercially Intelligent",
    icon: BarChart2,
    desc: "Ground every creative claim in demonstrable audience scale, conversion mechanics, and commercial returns."
  }
];

const SAY_MATRIX = [
  {
    say: "We give brands a single gateway into the sports media ecosystem.",
    dont: "We are a full-service synergistic marketing solutions provider for athletic endeavors.",
    why: "Clarity over corporate jargon. State the concrete operational value."
  },
  {
    say: "Built, not bought.",
    dont: "We provide comprehensive 360-degree sponsorship acquisitions.",
    why: "Own the identity and ethos rather than sounding like an intermediary agency."
  },
  {
    say: "Direct creator relationships with verifiable athlete reach.",
    dont: "Leveraging our industry-leading influencer talent network.",
    why: "Emphasize verifiable outcomes and real athletic authenticity."
  },
  {
    say: "Connecting rights-holders, platforms, and fans under one roof.",
    dont: "Disrupting the multi-channel sports paradigm across global regions.",
    why: "Specify the exact stakeholders rather than buzzword generalities."
  }
];

export default function Voice() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-2 border-b border-[#1C2537] pb-8">
        <Badge variant="cyan">{STRINGS.voice.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {STRINGS.voice.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {STRINGS.voice.lead}
        </p>
      </header>

      {/* Tone Pillars */}
      <section id="tone" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Core Tone Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TONE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="p-5 bg-[#0E131E] border-[#1C2537]">
                <div className="flex items-center gap-2.5 mb-2 text-sky-400">
                  <Icon className="w-4 h-4" />
                  <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Say vs Don't Say Matrix */}
      <section id="say-matrix" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Say / Don&apos;t Say Matrix
        </h2>
        <div className="space-y-3">
          {SAY_MATRIX.map((item, idx) => (
            <Card key={idx} className="p-4 sm:p-5 bg-[#0E131E] border-[#1C2537]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-3 border-b border-[#1C2537]">
                {/* Say */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-emerald-400 tracking-wider mb-1">
                      Say This
                    </div>
                    <div className="text-sm font-medium text-slate-200">
                      &ldquo;{item.say}&rdquo;
                    </div>
                  </div>
                </div>

                {/* Don't Say */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-rose-950/70 border border-rose-500/30 text-rose-400 mt-0.5 flex-shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-rose-400 tracking-wider mb-1">
                      Avoid This
                    </div>
                    <div className="text-sm text-slate-400 line-through">
                      &ldquo;{item.dont}&rdquo;
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2 text-xs text-slate-400 italic">
                <strong>Why:</strong> {item.why}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
