import { Link } from 'react-router-dom';
import { useClipboard } from '../hooks/useClipboard';

export default function Color() {
  const { copy, copiedText } = useClipboard();

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="page-header">
        <div className="page-category">04 / BRAND SYSTEM</div>
        <h1 className="page-title">Color System</h1>
        <p className="page-lead">
          A structured palette system divided into primary brand foundations, strategic accents, neutral greys, and WCAG AA contrast rules.
        </p>
      </header>

      {/* Section 1: Primary Colors */}
      <section id="primary" className="doc-section">
        <h2 className="section-title">Primary Brand Palette</h2>
        <div className="prose">
          <p>
            Deep Navy functions as the foundation anchor, while Blue Orchid represents primary brand energy. White and light blue create editorial breathing room.
          </p>
        </div>

        {/* Blue Orchid Card */}
        <div className="border border-[#E5E7EB] overflow-hidden bg-white mt-6">
          <div className="h-44 p-6 bg-[#3343FF] text-white flex flex-col justify-between">
            <div>
              <span className="font-['Space_Grotesk'] text-xs font-bold bg-black/25 px-2 py-1">
                PRIMARY BRAND ENERGY
              </span>
            </div>
          </div>
          <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB]">
            <div>
              <div className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A]">Blue Orchid</div>
              <div className="text-xs text-[#64748B]">Core interactive &amp; brand signature color</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copy('#3343FF')}
                className="px-3 py-1.5 bg-[#F4F5F8] hover:bg-[#E5E7EB] text-[#0F172A] text-xs font-mono font-semibold transition-colors"
              >
                {copiedText === '#3343FF' ? 'COPIED!' : 'HEX #3343FF'}
              </button>
              <button
                onClick={() => copy('rgb(51, 67, 255)')}
                className="px-3 py-1.5 bg-[#F4F5F8] hover:bg-[#E5E7EB] text-[#0F172A] text-xs font-mono font-semibold transition-colors"
              >
                {copiedText === 'rgb(51, 67, 255)' ? 'COPIED!' : 'RGB (51, 67, 255)'}
              </button>
            </div>
          </div>
          {/* Ramp */}
          <div className="p-5 bg-[#FAFAFC]">
            <div className="font-['Space_Grotesk'] text-xs text-[#64748B] mb-2 font-bold uppercase">
              Blue Orchid Ramp System
            </div>
            <div className="grid grid-cols-5 h-12 overflow-hidden border border-[#E5E7EB] text-[11px] font-mono font-bold text-center">
              <div onClick={() => copy('#070732')} className="bg-[#070732] text-white flex items-center justify-center cursor-pointer">#070732</div>
              <div onClick={() => copy('#3343FF')} className="bg-[#3343FF] text-white flex items-center justify-center cursor-pointer">#3343FF</div>
              <div onClick={() => copy('#6673FF')} className="bg-[#6673FF] text-white flex items-center justify-center cursor-pointer">#6673FF</div>
              <div onClick={() => copy('#B3B9FF')} className="bg-[#B3B9FF] text-[#070732] flex items-center justify-center cursor-pointer">#B3B9FF</div>
              <div onClick={() => copy('#FFFFFF')} className="bg-[#FFFFFF] text-[#070732] flex items-center justify-center cursor-pointer border-l border-[#E5E7EB]">#FFFFFF</div>
            </div>
          </div>
        </div>

        {/* Deep Navy Card */}
        <div className="border border-[#E5E7EB] overflow-hidden bg-white mt-6">
          <div className="h-44 p-6 bg-[#070732] text-white flex flex-col justify-between">
            <div>
              <span className="font-['Space_Grotesk'] text-xs font-bold bg-white/15 px-2 py-1">
                CORE FOUNDATION
              </span>
            </div>
          </div>
          <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A]">Deep Navy</div>
              <div className="text-xs text-[#64748B]">Core dark foundation and high-contrast editorial field</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copy('#070732')}
                className="px-3 py-1.5 bg-[#F4F5F8] hover:bg-[#E5E7EB] text-[#0F172A] text-xs font-mono font-semibold transition-colors"
              >
                {copiedText === '#070732' ? 'COPIED!' : 'HEX #070732'}
              </button>
              <button
                onClick={() => copy('rgb(7, 7, 50)')}
                className="px-3 py-1.5 bg-[#F4F5F8] hover:bg-[#E5E7EB] text-[#0F172A] text-xs font-mono font-semibold transition-colors"
              >
                {copiedText === 'rgb(7, 7, 50)' ? 'COPIED!' : 'RGB (7, 7, 50)'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Strategic Accent Palette */}
      <section id="accent" className="doc-section">
        <h2 className="section-title">Strategic Accent Palette</h2>
        <div className="prose">
          <p>
            Accent colors are used selectively for proof points, metrics emphasis, and specific sports contexts. Pitch Green is dedicated to Football presentation decks and pitch collateral, Electric Green for performance conversion metrics, and Trophy Gold for cricket decks and championship achievements.
          </p>
        </div>

        {/* Pitch Green (Football Decks & Sports Context) */}
        <div className="border border-[#E5E7EB] overflow-hidden bg-white mt-6">
          <div className="h-40 p-6 bg-[#014E3D] text-white flex items-end justify-between">
            <div>
              <span className="font-['Space_Grotesk'] text-xs font-bold bg-white/15 px-2.5 py-1">
                FOOTBALL DECKS &amp; SPORTS CONTEXT
              </span>
            </div>
            {/* Football Icon */}
            <div className="bg-white/10 p-2.5 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A6E35F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="12 7.5 15.5 10 14.2 14.5 9.8 14.5 8.5 10" fill="#A6E35F" fillOpacity="0.35"></polygon>
                <line x1="12" y1="7.5" x2="12" y2="2"></line>
                <line x1="15.5" y1="10" x2="20.3" y2="8.5"></line>
                <line x1="14.2" y1="14.5" x2="18.5" y2="18"></line>
                <line x1="9.8" y1="14.5" x2="5.5" y2="18"></line>
                <line x1="8.5" y1="10" x2="3.7" y2="8.5"></line>
              </svg>
            </div>
          </div>
          <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB]">
            <div>
              <div className="flex items-center gap-2">
                <div className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A]">Pitch Green &amp; Light Green</div>
                <span className="text-xs font-bold text-[#014E3D] bg-[#A6E35F] px-2 py-0.5">
                  ⚽ Football Category
                </span>
              </div>
              <div className="text-xs text-[#64748B] mt-0.5">Dedicated palette for Football presentation decks &amp; pitch collateral</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => copy('#014E3D')}
                className="px-3 py-1.5 bg-[#F4F5F8] hover:bg-[#E5E7EB] text-[#0F172A] text-xs font-mono font-semibold transition-colors"
              >
                {copiedText === '#014E3D' ? 'COPIED!' : 'HEX #014E3D'}
              </button>
              <button
                onClick={() => copy('#A6E35F')}
                className="px-3 py-1.5 bg-[#F4F5F8] hover:bg-[#E5E7EB] text-[#0F172A] text-xs font-mono font-semibold transition-colors"
              >
                {copiedText === '#A6E35F' ? 'COPIED!' : 'HEX #A6E35F'}
              </button>
            </div>
          </div>
          {/* Pitch Green Ramp */}
          <div className="p-5 bg-[#FAFAFC]">
            <div className="font-['Space_Grotesk'] text-xs text-[#64748B] mb-2 font-bold uppercase">
              Football Pitch Ramp System
            </div>
            <div className="grid grid-cols-3 h-12 overflow-hidden border border-[#E5E7EB] text-[11px] font-mono font-bold text-center">
              <div onClick={() => copy('#013728')} className="bg-[#013728] text-white flex items-center justify-center cursor-pointer">
                #013728 (Deep)
              </div>
              <div onClick={() => copy('#014E3D')} className="bg-[#014E3D] text-white flex items-center justify-center cursor-pointer">
                #014E3D (Dark)
              </div>
              <div onClick={() => copy('#A6E35F')} className="bg-[#A6E35F] text-[#013728] flex items-center justify-center cursor-pointer">
                #A6E35F (Electric)
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Grid: Electric Green & Trophy Gold */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {/* Electric Green */}
          <div className="border border-[#E5E7EB] overflow-hidden bg-white">
            <div className="h-32 p-5 bg-[#A6E35F] text-[#274604] flex items-end justify-between">
              <span className="font-['Space_Grotesk'] text-xs font-bold bg-black/10 px-2 py-1">ACCENT / PERFORMANCE</span>
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <div className="font-['Radio_Canada_Big'] font-bold text-base text-[#0F172A]">Electric Green</div>
                <div className="text-xs text-[#64748B]">High-energy conversion metrics</div>
              </div>
              <button
                onClick={() => copy('#A6E35F')}
                className="px-3 py-1.5 bg-[#F4F5F8] hover:bg-[#E5E7EB] text-[#0F172A] text-xs font-mono font-semibold transition-colors"
              >
                {copiedText === '#A6E35F' ? 'COPIED!' : '#A6E35F'}
              </button>
            </div>
          </div>

          {/* Trophy Gold */}
          <div className="border border-[#E5E7EB] overflow-hidden bg-white">
            <div className="h-32 p-5 bg-[#FFC845] text-[#0F172A] flex items-end justify-between">
              <span className="font-['Space_Grotesk'] text-xs font-bold bg-black/10 px-2 py-1">ACCENT / CRICKET</span>
              <span className="text-xs font-bold text-[#0F172A] bg-black/10 px-2 py-0.5">🏏 Cricket</span>
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <div className="font-['Radio_Canada_Big'] font-bold text-base text-[#0F172A]">Trophy Gold</div>
                <div className="text-xs text-[#64748B]">Championship &amp; cricket collateral</div>
              </div>
              <button
                onClick={() => copy('#FFC845')}
                className="px-3 py-1.5 bg-[#F4F5F8] hover:bg-[#E5E7EB] text-[#0F172A] text-xs font-mono font-semibold transition-colors"
              >
                {copiedText === '#FFC845' ? 'COPIED!' : '#FFC845'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="doc-footer-nav">
        <Link to="/logo" className="footer-nav-link">
          <span className="footer-nav-label">← Previous Section</span>
          <span className="footer-nav-title">Logo &amp; Mark</span>
        </Link>
        <Link to="/typography" className="footer-nav-link next">
          <span className="footer-nav-label">Next Section →</span>
          <span className="footer-nav-title">Typography</span>
        </Link>
      </footer>
    </div>
  );
}
