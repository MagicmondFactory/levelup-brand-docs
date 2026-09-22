import { Link } from 'react-router-dom';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Primary Wordmark */}
          <div className="border border-[#E5E7EB] rounded-lg overflow-hidden bg-white">
            <div className="p-12 flex items-center justify-center bg-[#070732] min-h-[180px]">
              <img src="/assets/logos/LEVELUP.svg" alt="LevelUp Wordmark" className="h-10 w-auto brightness-0 invert" />
            </div>
            <div className="p-5 flex items-center justify-between bg-white border-t border-[#E5E7EB]">
              <div>
                <div className="font-['Radio_Canada_Big'] font-bold text-base text-[#0F172A]">LEVELUP Wordmark</div>
                <div className="text-xs text-[#64748B]">Primary brand signature (Vector SVG)</div>
              </div>
              <a href="/assets/logos/LEVELUP.svg" download="LEVELUP.svg" className="inline-download-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                SVG
              </a>
            </div>
          </div>

          {/* Standalone U Symbol */}
          <div className="border border-[#E5E7EB] rounded-lg overflow-hidden bg-white">
            <div className="p-12 flex items-center justify-center bg-[#070732] min-h-[180px]">
              <img src="/assets/logos/U.svg" alt="LevelUp U Symbol" className="h-14 w-auto brightness-0 invert" />
            </div>
            <div className="p-5 flex items-center justify-between bg-white border-t border-[#E5E7EB]">
              <div>
                <div className="font-['Radio_Canada_Big'] font-bold text-base text-[#0F172A]">Standalone &apos;U&apos; Symbol</div>
                <div className="text-xs text-[#64748B]">Icon &amp; app mark (Vector SVG)</div>
              </div>
              <a href="/assets/logos/U.svg" download="U.svg" className="inline-download-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                SVG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Clearspace & Minimum Size */}
      <section id="clearspace" className="doc-section">
        <h2 className="section-title">Clearspace &amp; Minimum Scale</h2>
        <div className="prose">
          <p>
            Always protect the visual integrity of the mark by preserving minimum clearspace around all edges, equal to the height of the &apos;U&apos; symbol:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 border border-[#E5E7EB] rounded-lg bg-white">
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

          <div className="p-6 border border-[#E5E7EB] rounded-lg bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {MISUSE_RULES.map((item, idx) => (
            <div key={idx} className="p-5 border border-[#E5E7EB] rounded-lg bg-[#FAFAFC]">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#DC2626] mb-1 uppercase">
                RULE 0{idx + 1}
              </div>
              <h4 className="font-['Radio_Canada_Big'] text-base font-bold text-[#0F172A] mb-1">
                {item.rule}
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                {item.desc}
              </p>
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
