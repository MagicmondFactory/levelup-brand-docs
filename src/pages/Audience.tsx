import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { STRINGS } from '../utils/strings';
import { Users, Globe2, Briefcase, Video, Trophy } from 'lucide-react';

const PERSONAS = [
  {
    title: "Enterprise Brand Marketers",
    role: "CMOs, Head of Sponsorships, Global Media Directors",
    need: "Seeking direct, measured access to youth sports audiences without dealing with fragmented intermediaries.",
    icon: Briefcase,
    color: "text-sky-400"
  },
  {
    title: "Rights Holders & Federations",
    role: "Leagues, Sports Franchises, Tournament Organizers",
    need: "Maximizing the commercial value of broadcast rights, sponsorships, and digital fan communities.",
    icon: Trophy,
    color: "text-amber-400"
  },
  {
    title: "Athletes & Sports Creators",
    role: "Top-flight Athletes, Viral Creators, Match Commentators",
    need: "Long-term IP ownership, authentic commercial alignment, and broadcast-grade production support.",
    icon: Video,
    color: "text-cyan-400"
  },
  {
    title: "The Modern Connected Fan",
    role: "Digital-first sports enthusiasts across MENA & South Asia",
    need: "High-octane content across TikTok, live OTT streams, podcasts, and stadium activations.",
    icon: Users,
    color: "text-emerald-400"
  }
];

const TERRITORIES = [
  { region: "MENA (Middle East & North Africa)", focus: "UAE, Saudi Arabia, Qatar, Egypt", desc: "Rapidly expanding athletic investments, world-class tournaments, and sovereign sports portfolios." },
  { region: "South Asia", focus: "India, Pakistan, Bangladesh, Sri Lanka", desc: "Massive cricket audiences, hyper-engaged digital youth demographics, and booming creator economies." },
  { region: "Global Athletic Hubs", focus: "UK, Western Europe, North America", desc: "Cross-border brand partnerships, athlete representation, and diaspora fan communities." }
];

export default function Audience() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-2 border-b border-[#1C2537] pb-8">
        <Badge variant="cyan">{STRINGS.audience.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {STRINGS.audience.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {STRINGS.audience.lead}
        </p>
      </header>

      {/* Stakeholder Personas */}
      <section id="personas" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Stakeholder Personas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PERSONAS.map((persona) => {
            const Icon = persona.icon;
            return (
              <Card key={persona.title} className="p-5 bg-[#0E131E] border-[#1C2537]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#111622] border border-[#242F45]">
                    <Icon className={`w-5 h-5 ${persona.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{persona.title}</h3>
                    <div className="text-xs text-slate-400">{persona.role}</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-[#1C2537]">
                  {persona.need}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Territorial Footprint */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-sky-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Territorial Footprint & Core Markets
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TERRITORIES.map((territory) => (
            <Card key={territory.region} className="p-5 bg-[#0E131E] border-[#1C2537]">
              <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">
                {territory.region}
              </div>
              <div className="text-sm font-bold text-white mb-2">{territory.focus}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{territory.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
