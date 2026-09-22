import { Link } from 'react-router-dom';

export default function Typography() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="page-header">
        <div className="page-category">05 / BRAND SYSTEM</div>
        <h1 className="page-title">Typography</h1>
        <p className="page-lead">
          Typography is one of the primary visual signatures of LevelUp Media. Set display type large and tight, and treat numbers as structural objects.
        </p>
      </header>

      {/* Inline Download Badge */}
      <div className="p-4 border border-[#E5E7EB] rounded-lg bg-[#FAFAFC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-sm text-[#475569]">
          Need the official TTF brand font files for desktop &amp; print installation?
        </div>
        <a
          href="https://drive.google.com/drive/folders/19Qi35zTZRyE81GCeW_hcHXEsrM4bGQ7B"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-download-btn whitespace-nowrap"
        >
          Download Brand Fonts Drive Folder ↗
        </a>
      </div>

      {/* Section 1: The Three Typefaces */}
      <section id="typefaces" className="doc-section">
        <h2 className="section-title">The Three Typefaces</h2>
        <div className="prose">
          <p>Our brand uses three distinct font families for specific roles:</p>
        </div>

        <div className="flex flex-col gap-6 mt-6">
          {/* Radio Canada Big */}
          <div className="p-8 border border-[#E5E7EB] rounded-lg bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF]">01 / DISPLAY &amp; HEADLINES</span>
              <span className="text-xs text-[#64748B]">Radio Canada Big · Weights: 400, 500, 600, 700</span>
            </div>
            <div className="font-['Radio_Canada_Big'] text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-[-0.03em] leading-tight mb-4">
              BUILT FOR SPORTS CULTURE.
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              <strong>Radio Canada Big</strong> is a tall, bold, condensed-feeling editorial display typeface. Used for hero headlines, major section titles, campaign typography, and high-impact brand statements.
            </p>
          </div>

          {/* Geist */}
          <div className="p-8 border border-[#E5E7EB] rounded-lg bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF]">02 / BODY &amp; CAPTIONS</span>
              <span className="text-xs text-[#64748B]">Geist · Weights: 300, 400, 500, 600, 700</span>
            </div>
            <div className="font-['Geist'] text-xl sm:text-2xl text-[#0F172A] leading-relaxed mb-4">
              LevelUp Media connects rights, platforms, creators, athletes, and production under one roof.
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              <strong>Geist</strong> is a highly legible neutral sans-serif developed by Vercel. Used for body paragraphs, descriptions, navigation, UI labels, and technical specifications.
            </p>
          </div>

          {/* Space Grotesk */}
          <div className="p-8 border border-[#E5E7EB] rounded-lg bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF]">03 / NUMERALS &amp; LABELS</span>
              <span className="text-xs text-[#64748B]">Space Grotesk · Weights: 400, 500, 600, 700</span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
              400M+ 150+ 01 02
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              <strong>Space Grotesk</strong> is a monospace-influenced proportional sans-serif. Used exclusively for big metric numbers, numbered lists (01, 02), rule tags, and metadata labels.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="doc-footer-nav">
        <Link to="/color" className="footer-nav-link">
          <span className="footer-nav-label">← Previous Section</span>
          <span className="footer-nav-title">Color System</span>
        </Link>
        <Link to="/audience" className="footer-nav-link next">
          <span className="footer-nav-label">Next Section →</span>
          <span className="footer-nav-title">Audience &amp; Markets</span>
        </Link>
      </footer>
    </div>
  );
}
