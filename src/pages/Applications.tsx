import { Link } from 'react-router-dom';
import { 
  LETTERHEAD_URL, 
  SAMPLE_CREATIVES_URL 
} from '../utils/constants';
import { BusinessCardGenerator } from '../components/applications/BusinessCardGenerator';

export default function Applications() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="page-header">
        <div className="page-category">07 / STRATEGY &amp; ASSETS</div>
        <h1 className="page-title">Applications</h1>
        <p className="page-lead">
          Guidelines for applying the LevelUp Media visual identity system across digital products, social channels, business collateral, and campaign collateral.
        </p>
      </header>

      {/* Section 1: Digital & Web Applications */}
      <section id="digital" className="doc-section">
        <h2 className="section-title">Digital &amp; Web Interfaces</h2>
        <div className="prose">
          <p>
            Digital interfaces must follow a light, quiet, generous aesthetic. Backgrounds should remain clean (<code>#FFFFFF</code> or <code>#FAFAFC</code>), with hairline rules (<code>1px solid #E5E7EB</code>) and generous whitespace.
          </p>
        </div>

        <div className="mt-6 p-8 border border-[#E5E7EB] rounded-lg bg-white">
          <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-2 uppercase">
            Digital Interface Specs
          </div>
          <ul className="text-[15px] text-[#475569] leading-[1.7] pl-5 list-disc space-y-1">
            <li><strong>Backgrounds:</strong> Prefer white or near-white fields. Never build full-screen dark glowing ambient gradients.</li>
            <li><strong>Buttons &amp; Links:</strong> Use Blue Orchid (<code>#3343FF</code>) for primary interactive states and text links.</li>
            <li><strong>Headlines:</strong> Set Radio Canada Big displays large, tight, and bold (-0.03em letter spacing).</li>
            <li><strong>Reading Measure:</strong> Keep body paragraph measure strictly between 65–75 characters (max width 680px - 720px).</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Social Media & Broadcast Video Overlays */}
      <section id="social" className="doc-section">
        <h2 className="section-title">Social Media &amp; Broadcast Overlays</h2>
        <div className="prose">
          <p>
            For social highlight reels, video lower-thirds, and broadcast graphics, place the logo in designated safe margins with clear visual contrast:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          <div className="border border-[#E5E7EB] overflow-hidden bg-white">
            <div className="p-8 bg-[#070732] text-white relative min-h-[160px] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="font-['Space_Grotesk'] text-xs text-[#A6E35F] font-bold">BROADCAST OVERLAY</span>
                <img src="/assets/logos/U.svg" alt="Corner Mark" className="h-6 w-auto brightness-0 invert" />
              </div>
              <div className="mt-6">
                <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">400M+ MATCH REACH</div>
                <div className="text-xs text-[#94A3B8]">MENA Cricket Highlights 2026</div>
              </div>
            </div>
            <div className="p-4 text-xs text-[#475569] bg-white">
              Always position the U symbol mark in top-right or bottom-right safe margins (min 32px padding).
            </div>
          </div>

          <div className="border border-[#E5E7EB] overflow-hidden bg-white">
            <div className="p-8 bg-[#3343FF] text-white relative min-h-[160px] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="font-['Space_Grotesk'] text-xs text-[#E9EBFF] font-bold">SOCIAL CARD TEMPLATE</span>
                <img src="/assets/logos/LEVELUP.svg" alt="Header Logo" className="h-5 w-auto brightness-0 invert" />
              </div>
              <div className="mt-6">
                <div className="font-['Radio_Canada_Big'] text-xl font-bold text-white">ONE PARTNER. ALL SOLUTIONS.</div>
                <div className="text-xs text-[#E9EBFF]">LevelUp Media Ecosystem</div>
              </div>
            </div>
            <div className="p-4 text-xs text-[#475569] bg-white">
              Social campaign graphic cards pair bold Radio Canada Big titles with Blue Orchid background fields.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Brand Collaterals & Stationery */}
      <section id="collaterals" className="doc-section space-y-8">
        <div>
          <h2 className="section-title">Brand Collaterals &amp; Stationery</h2>
          <div className="prose">
            <p>
              Divided specifications and direct download links for all official LevelUp Media corporate collaterals, print stationery, and marketing assets:
            </p>
          </div>
        </div>

        {/* 1. Interactive Business Card Generator */}
        <div id="business-card">
          <BusinessCardGenerator />
        </div>

        {/* 2. Official Corporate Letterhead */}
        <div id="letterhead" className="border border-[#E5E7EB] rounded-none overflow-hidden bg-white">
          <div className="p-6 border-b border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A]">
                  2. Official Corporate Letterhead
                </h3>
                <span className="text-[10px] font-bold font-['Space_Grotesk'] px-2 py-0.5 bg-[#F4F5F8] text-[#475569]">
                  STATIONERY
                </span>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed max-w-2xl mt-1">
                Standard A4 / US Letter format with top-left LEVELUP master logo and clean structured footer typography for official correspondence, contracts, and press communications.
              </p>
            </div>
            <a
              href={LETTERHEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-download-btn shrink-0 self-start sm:self-center"
            >
              Open Letterhead Drive ↗
            </a>
          </div>

          <div className="p-6 lg:p-8 bg-[#FAFAFC] flex justify-center">
            {/* Visual Letterhead Sheet Specimen */}
            <div className="w-full max-w-[540px] bg-white border border-[#E5E7EB] shadow-sm p-8 sm:p-10 relative flex flex-col justify-between min-h-[460px] aspect-[1/1.414]">
              {/* Header */}
              <div className="flex justify-between items-start border-b border-[#E5E7EB] pb-6">
                <div>
                  <img src="/assets/logos/LEVELUP.svg" alt="LevelUp Logo" className="h-6 w-auto" />
                  <div className="font-['Space_Grotesk'] text-[10px] text-[#64748B] tracking-wider mt-2 uppercase">
                    LevelUp Media FZ-LLC
                  </div>
                </div>
                <div className="text-right text-[11px] font-['Space_Grotesk'] text-[#64748B]">
                  <div>OFFICIAL CORRESPONDENCE</div>
                  <div className="text-[#070732] font-bold">STATIONERY SPEC 2026</div>
                </div>
              </div>

              {/* Body Placeholder Spec lines */}
              <div className="space-y-4 my-8">
                <div className="h-3 bg-[#F1F5F9] w-3/4 rounded-none"></div>
                <div className="h-2.5 bg-[#F1F5F9] w-full rounded-none"></div>
                <div className="h-2.5 bg-[#F1F5F9] w-full rounded-none"></div>
                <div className="h-2.5 bg-[#F1F5F9] w-5/6 rounded-none"></div>
                <div className="h-2.5 bg-[#F1F5F9] w-4/5 rounded-none"></div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#E5E7EB] pt-4 flex flex-col sm:flex-row justify-between text-[10px] font-['Geist'] text-[#64748B] gap-2">
                <span>Tower 6, Palm Beach, Dubai (UAE)</span>
                <span>contact@levelupmedia.ai</span>
                <span className="font-semibold text-[#070732]">levelupmedia.ai</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Sample Social Media Creatives */}
        <div id="sample-creatives" className="border border-[#E5E7EB] rounded-none overflow-hidden bg-white">
          <div className="p-6 border-b border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A]">
                  3. Sample Social Media Creatives
                </h3>
                <span className="text-[10px] font-bold font-['Space_Grotesk'] px-2 py-0.5 bg-[#DEFFB0] text-[#274604]">
                  CAMPAIGNS
                </span>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed max-w-2xl mt-1">
                Curated library of 1:1 square highlight and statistics post creatives. Designed for Instagram, LinkedIn, and X feeds with bold type hierarchy and dynamic photography.
              </p>
            </div>
            <a
              href={SAMPLE_CREATIVES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-download-btn shrink-0 self-start sm:self-center"
            >
              Open Sample Creatives Drive ↗
            </a>
          </div>

          <div className="bg-[#FAFAFC] p-6 text-center border-b border-[#E5E7EB]">
            <img 
              src="/assets/images/business-card-spec.svg" 
              alt="Sample Social Media Creatives Showcase" 
              className="max-w-full h-auto mx-auto border border-[#E5E7EB]" 
            />
          </div>
        </div>

        {/* 4. Digital Pitch Decks & Sport-Specific Palettes */}
        <div id="pitch-decks" className="border border-[#E5E7EB] rounded-none overflow-hidden bg-white">
          <div className="p-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-2">
              <h3 className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A]">
                4. Digital Pitch Decks &amp; Sport-Specific Palettes
              </h3>
              <span className="text-[10px] font-bold font-['Space_Grotesk'] px-2 py-0.5 bg-[#FFE5A3] text-[#997F3D]">
                PRESENTATIONS
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed mt-1">
              Built on 16:9 widescreen canvas, utilizing large Radio Canada Big headlines and Space Grotesk statistics with dedicated sport domain palettes:
            </p>
            <ul className="text-sm text-[#475569] leading-relaxed mt-3 pl-5 list-disc space-y-1">
              <li><strong>Football Decks:</strong> Dark Green (Pitch Green <code>#014E3D</code>) and Light Green (Electric Green <code>#A6E35F</code>).</li>
              <li><strong>Cricket Decks:</strong> Blue (<code>#3343FF</code>) and Yellow Gold (Trophy Gold <code>#FFC845</code>).</li>
              <li><strong>Parent Company:</strong> Blue (<code>#3343FF</code>) and Light Green (<code>#A6E35F</code>).</li>
            </ul>
          </div>
          <div className="bg-[#FAFAFC] p-6 text-center">
            <img src="/assets/images/application-card.svg" alt="Official Digital Application & Pitch Deck Spec Mockup" className="max-w-full h-auto mx-auto border border-[#E5E7EB]" />
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="doc-footer-nav">
        <Link to="/audience" className="footer-nav-link">
          <span className="footer-nav-label">← Previous Section</span>
          <span className="footer-nav-title">Audience &amp; Markets</span>
        </Link>
        <Link to="/email-signature" className="footer-nav-link next">
          <span className="footer-nav-label">Next Section →</span>
          <span className="footer-nav-title">Email Signature</span>
        </Link>
      </footer>
    </div>
  );
}
