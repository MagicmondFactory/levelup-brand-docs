import { CoverBanner } from '../components/overview/CoverBanner';
import { TopicsGrid } from '../components/overview/TopicsGrid';
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className="space-y-12">
      {/* Edge-to-edge full width cover banner */}
      <CoverBanner />

      {/* Main Content Body */}
      <div className="w-full max-w-[840px] mx-auto px-6 sm:px-16 space-y-12">
        {/* Guidelines Introduction */}
        <section className="space-y-4 text-[1rem] leading-[1.7] text-[#475569]">
          <p>
            This manual contains everything required to correctly execute the LevelUp Media brand across digital platforms, broadcast media, print collateral, and partner sponsorships.
          </p>
          <p>
            LevelUp Media is a 360-degree sports marketing ecosystem connecting rights, platforms, creators, athletes, and production under one roof. Our visual and verbal identity reflects this mindset: <strong className="text-[#0F172A] font-semibold">direct, confident, sports-native, and commercially intelligent</strong>.
          </p>
        </section>

        {/* Guideline Topics Grid */}
        <section className="space-y-5 pt-4">
          <h2 className="text-[1.75rem] font-bold text-[#0F172A] tracking-tight font-['Radio_Canada_Big']">
            Guideline Topics
          </h2>
          <TopicsGrid />
        </section>

        {/* Four Principles Section */}
        <section className="space-y-5 pt-8 border-t border-[#E5E7EB]">
          <h2 className="text-[1.75rem] font-bold text-[#0F172A] tracking-tight font-['Radio_Canada_Big']">
            Core Operating Rules
          </h2>
          <p className="text-[0.95rem] text-[#475569]">
            Every piece of collateral produced under the LevelUp Media name must follow four simple rules:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
            <div className="p-5 border border-[#E5E7EB] bg-[#FAFAFC]">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-1">RULE 01</div>
              <h4 className="font-['Radio_Canada_Big'] text-base font-bold text-[#0F172A] mb-1">Light, Quiet UI Frame</h4>
              <p className="text-sm text-[#475569]">Keep documentation and interfaces quiet so the brand graphics and content carry the energy.</p>
            </div>

            <div className="p-5 border border-[#E5E7EB] bg-[#FAFAFC]">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-1">RULE 02</div>
              <h4 className="font-['Radio_Canada_Big'] text-base font-bold text-[#0F172A] mb-1">Number-Centric Voice</h4>
              <p className="text-sm text-[#475569]">Lead with metrics, hard observations, and short statements. Avoid corporate buzzwords.</p>
            </div>

            <div className="p-5 border border-[#E5E7EB] bg-[#FAFAFC]">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-1">RULE 03</div>
              <h4 className="font-['Radio_Canada_Big'] text-base font-bold text-[#0F172A] mb-1">Pure Color Ramps</h4>
              <p className="text-sm text-[#475569]">Use Blue Orchid as core energy and Electric Green for strategic emphasis. Never add arbitrary colors.</p>
            </div>

            <div className="p-5 border border-[#E5E7EB] bg-[#FAFAFC]">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-1">RULE 04</div>
              <h4 className="font-['Radio_Canada_Big'] text-base font-bold text-[#0F172A] mb-1">Type Scale Rigor</h4>
              <p className="text-sm text-[#475569]">Set Radio Canada Big displays large and tight. Treat Space Grotesk numerals as structural visual objects.</p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t border-[#E5E7EB] flex justify-end">
          <Link
            to="/foundation"
            className="inline-flex flex-col items-end text-right group p-3 hover:bg-[#FAFAFC] border border-transparent hover:border-[#E5E7EB] transition-colors"
          >
            <span className="text-xs text-[#94A3B8] group-hover:text-[#3343FF]">Next Section →</span>
            <span className="text-base font-bold text-[#0F172A] font-['Radio_Canada_Big']">Foundation &amp; Story</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
