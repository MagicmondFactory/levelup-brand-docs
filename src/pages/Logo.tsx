import { Link } from 'react-router-dom';
import { LOGO_BLUE_URL, LOGO_DARK_URL, LOGO_LIGHT_URL } from '../utils/constants';

const MISUSE_RULES = [
  { rule: "Do Not Distort or Stretch", desc: "Never condense, expand, skew, or disproportionately scale the wordmark or mark." },
  { rule: "Do Not Recolor Unapproved", desc: "Never use unauthorized bright gradients, neon strokes, or unapproved colors outside the brand palette." },
  { rule: "Do Not Crowd Clearspace", desc: "Always maintain an exclusion zone equal to the full height of the 'U' mark on all sides." },
  { rule: "Do Not Use On Low Contrast", desc: "Never place the navy wordmark on dark background images without a high-contrast container." },
  { rule: "Do Not Rotate or Tilt", desc: "The mark must always sit strictly horizontal at a zero-degree baseline angle." },
  { rule: "Do Not Retype the Wordmark", desc: "Always use the official master vector asset files. Never approximate by re-typing in bold fonts." },
];

export default function Logo() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="page-header">
        <div className="page-category">03 / BRAND SYSTEM</div>
        <h1 className="page-title">Logo &amp; Mark</h1>
        <p className="page-lead">
          The LevelUp Media logotype and standalone U symbol are primary visual signatures. Respect clearspace, scale limits, and approved color pairings.
        </p>
      </header>

      {/* Section 1: Primary Marks & Inline Downloads */}
      <section id="wordmark" className="doc-section">
        <h2 className="section-title">Primary Assets</h2>
        <div className="prose">
          <p>Use the official vector files supplied below. Never approximate, redraw, or alter the logotype geometry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          {/* Primary Wordmark */}
          <div className="border border-[#E5E7EB] overflow-hidden bg-white">
            <div className="p-10 flex items-center justify-center bg-[#070732] min-h-[170px]">
              <img src="/assets/logos/LEVELUP.svg" alt="LevelUp Wordmark" className="h-9 w-auto brightness-0 invert" />
            </div>
            <div className="p-4 flex items-center justify-between bg-white border-t border-[#E5E7EB]">
              <div>
                <div className="font-['Radio_Canada_Big'] font-bold text-sm text-[#0F172A]">LEVELUP Wordmark</div>
                <div className="text-[11px] text-[#64748B]">Primary signature (Vector SVG)</div>
              </div>
              <a href="/assets/logos/LEVELUP.svg" download="LEVELUP.svg" className="inline-download-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                SVG
              </a>
            </div>
          </div>

          {/* Standalone U Symbol */}
          <div className="border border-[#E5E7EB] overflow-hidden bg-white">
            <div className="p-10 flex items-center justify-center bg-[#070732] min-h-[170px]">
              <img src="/assets/logos/U.svg" alt="LevelUp U Symbol" className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="p-4 flex items-center justify-between bg-white border-t border-[#E5E7EB]">
              <div>
                <div className="font-['Radio_Canada_Big'] font-bold text-sm text-[#0F172A]">Icon Type #1: &apos;U&apos;</div>
                <div className="text-[11px] text-[#64748B]">App mark &amp; favicon (SVG)</div>
              </div>
              <a href="/assets/logos/U.svg" download="U.svg" className="inline-download-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                SVG
              </a>
            </div>
          </div>

          {/* Icon Type #2: 'UP' Symbol */}
          <div className="border border-[#E5E7EB] overflow-hidden bg-white">
            <div className="p-10 flex items-center justify-center bg-[#070732] min-h-[170px]">
              <img src="/assets/logos/UP.svg" alt="LevelUp UP Symbol" className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="p-4 flex items-center justify-between bg-white border-t border-[#E5E7EB]">
              <div>
                <div className="font-['Radio_Canada_Big'] font-bold text-sm text-[#0F172A]">Icon Type #2: &apos;UP&apos;</div>
                <div className="text-[11px] text-[#64748B]">Secondary mark &amp; badge (SVG)</div>
              </div>
              <a href="/assets/logos/UP.svg" download="UP.svg" className="inline-download-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                SVG
              </a>
            </div>
          </div>
        </div>

        {/* Wordmark Colour Versions & Downloads */}
        <div className="mt-8 border border-[#E5E7EB] bg-white">
          <div className="p-5 border-b border-[#E5E7EB]">
            <h3 className="font-['Radio_Canada_Big'] text-base font-bold text-[#0F172A]">
              Wordmark &amp; Icon Color Versions (Official Drive Downloads)
            </h3>
            <p className="text-xs text-[#475569] mt-0.5">
              Production asset packages provided across all three primary background modes: Blue, Dark Navy, and Light.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
            {/* Blue Version */}
            <div className="p-5 flex flex-col justify-between bg-[#FAFAFC]">
              <div>
                <div className="h-28 bg-[#3343FF] flex items-center justify-center p-6 border border-[#2333E8] mb-4">
                  <img src="/assets/logos/LEVELUP-white.svg" alt="Blue Version" className="h-7 w-auto drop-shadow-sm" />
                </div>
                <div className="font-['Radio_Canada_Big'] font-bold text-sm text-[#0F172A] mb-1">
                  Blue Version
                </div>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  Primary electric brand version on Blue Orchid (<code>#3343FF</code>) fields.
                </p>
              </div>
              <a
                href={LOGO_BLUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-download-btn w-full justify-center text-center"
              >
                Download Blue Drive ↗
              </a>
            </div>

            {/* Dark Version */}
            <div className="p-5 flex flex-col justify-between bg-[#FAFAFC]">
              <div>
                <div className="h-28 bg-[#070732] flex items-center justify-center p-6 border border-[#0F172A] mb-4">
                  <img src="/assets/logos/LEVELUP-white.svg" alt="Dark Version" className="h-7 w-auto" />
                </div>
                <div className="font-['Radio_Canada_Big'] font-bold text-sm text-[#0F172A] mb-1">
                  Dark Version
                </div>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  High-contrast inverted logotype for dark navy (<code>#070732</code>) broadcast &amp; nighttime media.
                </p>
              </div>
              <a
                href={LOGO_DARK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-download-btn w-full justify-center text-center"
              >
                Download Dark Drive ↗
              </a>
            </div>

            {/* Light Version */}
            <div className="p-5 flex flex-col justify-between bg-[#FAFAFC]">
              <div>
                <div className="h-28 bg-white flex items-center justify-center p-6 border border-[#E5E7EB] mb-4">
                  <img src="/assets/logos/LEVELUP.svg" alt="Light Version" className="h-7 w-auto" />
                </div>
                <div className="font-['Radio_Canada_Big'] font-bold text-sm text-[#0F172A] mb-1">
                  Light Version
                </div>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  Standard dark navy signature on crisp white (<code>#FFFFFF</code>) or pale light stationery backgrounds.
                </p>
              </div>
              <a
                href={LOGO_LIGHT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-download-btn w-full justify-center text-center"
              >
                Download Light Drive ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Clearspace & Minimum Scale */}
      <section id="clearspace" className="doc-section">
        <h2 className="section-title">Clearspace &amp; Minimum Scale</h2>
        <div className="prose">
          <p>
            Always protect the visual integrity of the mark by preserving minimum clearspace around all edges, equal to the height of the &apos;U&apos; symbol:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          <div className="p-6 border border-[#E5E7EB] bg-white">
            <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-2 uppercase">
              Digital Minimum Scale
            </div>
            <div className="text-2xl font-bold font-['Radio_Canada_Big'] text-[#0F172A] mb-1">
              120px width / 32px height
            </div>
            <p className="text-sm text-[#475569]">
              Never scale below this resolution on screen interfaces to preserve stroke clarity.
            </p>
          </div>

          <div className="p-6 border border-[#E5E7EB] bg-white">
            <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-2 uppercase">
              Print Minimum Scale
            </div>
            <div className="text-2xl font-bold font-['Radio_Canada_Big'] text-[#0F172A] mb-1">
              28mm width / 8mm height
            </div>
            <p className="text-sm text-[#475569]">
              Ensures high-dpi sharp reproduction across stationery, business cards, and brochures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Prohibited Misuse */}
      <section id="misuse" className="doc-section">
        <h2 className="section-title">Logo Misuse Prohibitions</h2>
        <div className="prose">
          <p>The six strict rules for brand mark integrity across all internal and partner communications:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {MISUSE_RULES.map((item, idx) => (
            <div key={idx} className="border border-[#E5E7EB] bg-white rounded-none overflow-hidden flex flex-col">
              {/* Visual preview box representing the violation */}
              <div className={`relative h-44 flex items-center justify-center overflow-hidden border-b border-[#E5E7EB] ${
                idx === 3 ? "bg-[#0b1220]" : "bg-[#F8FAFC]"
              }`}>
                {/* DO NOT badge watermark */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 bg-[#FEE2E2] text-[#DC2626] text-[11px] font-bold font-['Space_Grotesk'] tracking-wider rounded">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  DON&apos;T
                </div>

                {/* Case 01: Distort or Stretch */}
                {idx === 0 && (
                  <div className="flex flex-col items-center">
                    <img 
                      src="/assets/logos/LEVELUP.svg" 
                      alt="Distorted Logo" 
                      className="w-56 h-7 scale-y-[1.8] scale-x-[0.75] object-contain opacity-80" 
                    />
                  </div>
                )}

                {/* Case 02: Recolor Unapproved */}
                {idx === 1 && (
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-52 h-10 [mask-image:url(/assets/logos/LEVELUP.svg)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]"
                      style={{ background: 'linear-gradient(90deg, #FF007A 0%, #FF8A00 50%, #00FF66 100%)' }}
                    />
                  </div>
                )}

                {/* Case 03: Crowd Clearspace */}
                {idx === 2 && (
                  <div className="relative border border-dashed border-[#DC2626]/60 p-1 flex items-center justify-center">
                    <span className="absolute -top-3 left-1 text-[9px] font-['Space_Grotesk'] font-bold text-[#DC2626] bg-white px-1">TEXT OVERLAPPING</span>
                    <img src="/assets/logos/LEVELUP.svg" alt="Crowded Logo" className="h-8 w-auto" />
                    <span className="absolute right-0 bottom-0 text-[11px] font-bold text-[#DC2626] bg-[#FEE2E2] px-1">SPORTS MEDIA 2026</span>
                  </div>
                )}

                {/* Case 04: Low Contrast */}
                {idx === 3 && (
                  <div className="flex flex-col items-center">
                    {/* Navy logo placed directly on dark navy/black background with no contrast container */}
                    <img 
                      src="/assets/logos/LEVELUP.svg" 
                      alt="Low Contrast Logo" 
                      className="h-8 w-auto opacity-40 brightness-50" 
                    />
                  </div>
                )}

                {/* Case 05: Rotate or Tilt */}
                {idx === 4 && (
                  <div className="flex flex-col items-center rotate-[-18deg] transform">
                    <img src="/assets/logos/LEVELUP.svg" alt="Rotated Logo" className="h-8 w-auto" />
                  </div>
                )}

                {/* Case 06: Retype Wordmark */}
                {idx === 5 && (
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-black font-sans tracking-widest text-[#070732] italic">
                      LEVELUP
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content & Explanation */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-['Space_Grotesk'] text-xs font-bold text-[#DC2626] mb-1 tracking-wider uppercase">
                    RULE 0{idx + 1}
                  </div>
                  <h4 className="font-['Radio_Canada_Big'] text-base font-bold text-[#0F172A] mb-2">
                    {item.rule}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] text-[11px] text-[#64748B]">
                  <strong className="text-[#0F172A] font-medium">Why it matters: </strong>
                  {idx === 0 && "Preserves geometric balance, stroke consistency, and optical weight."}
                  {idx === 1 && "Protects recognized brand equity and avoids clashing with non-official campaign themes."}
                  {idx === 2 && "Guarantees standalone visibility, brand stature, and immediate readability."}
                  {idx === 3 && "Fails accessibility and legibility thresholds across screens and outdoor signage."}
                  {idx === 4 && "The forward-italic slant is mathematically built into the glyphs; rotation skews the baseline."}
                  {idx === 5 && "The wordmark features proprietary customized letterforms that standard fonts cannot replicate."}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="doc-footer-nav">
        <Link to="/voice" className="footer-nav-link">
          <span className="footer-nav-label">← Previous Section</span>
          <span className="footer-nav-title">Voice &amp; Tone</span>
        </Link>
        <Link to="/color" className="footer-nav-link next">
          <span className="footer-nav-label">Next Section →</span>
          <span className="footer-nav-title">Color System</span>
        </Link>
      </footer>
    </div>
  );
}
