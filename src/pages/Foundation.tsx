import { Link } from 'react-router-dom';

const PILLARS = [
  {
    num: "01",
    title: "One Ecosystem",
    desc: "Connecting rights, platforms, creators, athletes, and production under one roof."
  },
  {
    num: "02",
    title: "Built Not Bought",
    desc: "Direct relationships and proprietary access rather than third-party agency markups."
  },
  {
    num: "03",
    title: "New-Age Media",
    desc: "Reaching digital-first sports fans across social video, streaming, and athlete-led channels."
  },
  {
    num: "04",
    title: "Proven Delivery",
    desc: "Focusing on booked versus delivered metrics with transparent conversion and impression reporting."
  },
  {
    num: "05",
    title: "Owned Access",
    desc: "Direct relationships with top tier cricket and football properties in MENA and South Asia."
  },
  {
    num: "06",
    title: "Custom Inventory",
    desc: "Designing campaign assets around client business KPIs rather than rigid rate cards."
  },
  {
    num: "07",
    title: "Right-Sized Entry",
    desc: "Providing flexible, scalable entry points for brands of all sizes into premium sports moments."
  }
];

export default function Foundation() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="page-header">
        <div className="page-category">01 / BRAND SYSTEM</div>
        <h1 className="page-title">Foundation &amp; Story</h1>
        <p className="page-lead">
          The narrative framework defining why LevelUp Media exists, the industry problem we solve, and our core commercial positioning.
        </p>
      </header>

      {/* Section 1: The Brand Story */}
      <section id="story" className="doc-section">
        <h2 className="section-title">The Brand Story</h2>
        <div className="prose">
          <p><strong>One Fan. A Dozen Touchpoints.</strong></p>
          <p>
            Sport isn&apos;t one door. Today&apos;s sports fan doesn&apos;t just watch a match on television — they follow creator breakdown videos on social feeds, check live scores on fantasy apps, attend stadium games, and engage with athlete content on digital platforms.
          </p>
          <p>
            Historically, brands wanting to enter this ecosystem had to hire five separate vendors: a rights broker, a digital media agency, a creator agency, an on-ground activation partner, and a production house.
          </p>
        </div>

        {/* The Industry Gap vs. LevelUp Solution (Matching user screenshot) */}
        <div className="my-8 border border-[#E5E7EB] rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#F4F5F8] border-b border-[#E5E7EB] font-['Space_Grotesk'] text-[13px] font-bold text-[#64748B] tracking-[0.05em] uppercase">
            The Industry Gap vs. LevelUp Solution
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="p-7 border-b md:border-b-0 md:border-r border-[#E5E7EB]">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#DC2626] mb-2 uppercase">
                Traditional Model
              </div>
              <h4 className="font-['Radio_Canada_Big'] text-xl font-bold text-[#0F172A] mb-3">
                Five Vendors. Five Contracts. Five Reports.
              </h4>
              <ul className="text-sm text-[#475569] leading-[1.7] pl-5 list-disc space-y-1">
                <li>Fragmented execution across agency silos</li>
                <li>Overlapping fees and rate card inflation</li>
                <li>No unified performance attribution</li>
                <li>Slow alignment between rights and content</li>
              </ul>
            </div>

            <div className="p-7 bg-[#E9EBFF]">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-2 uppercase">
                LevelUp Ecosystem
              </div>
              <h4 className="font-['Radio_Canada_Big'] text-xl font-bold text-[#0F172A] mb-3">
                One Partner. All Solutions.
              </h4>
              <ul className="text-sm text-[#0F172A] leading-[1.7] pl-5 list-disc font-medium space-y-1">
                <li>Rights, platforms, creators, athletes, production under 1 roof</li>
                <li>Single point of commercial accountability</li>
                <li>Custom inventory built around client objectives</li>
                <li>400M+ sports fan reach across MENA &amp; South Asia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision (Matching user screenshot) */}
      <section id="mission-vision" className="doc-section">
        <h2 className="section-title">Mission &amp; Vision</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-8 border border-[#E5E7EB] rounded-lg bg-white">
            <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-2 uppercase tracking-[0.05em]">
              Our Mission
            </div>
            <h3 className="font-['Radio_Canada_Big'] text-2xl font-bold text-[#0F172A] leading-[1.2] mb-4">
              To give brands one way into sport — replacing five disconnected vendors with a single 360° ecosystem.
            </h3>
            <p className="text-[15px] text-[#475569] leading-relaxed">
              We eliminate agency friction by unifying media rights, platform distribution, athlete access, creator networks, and live event production into one strategic partner.
            </p>
          </div>

          <div className="p-8 border border-[#E5E7EB] rounded-lg bg-white">
            <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-2 uppercase tracking-[0.05em]">
              Our Vision
            </div>
            <h3 className="font-['Radio_Canada_Big'] text-2xl font-bold text-[#0F172A] leading-[1.2] mb-4">
              To become the definitive gateway to sport in MENA and beyond.
            </h3>
            <p className="text-[15px] text-[#475569] leading-relaxed">
              Building scalable, commercially intelligent sports partnerships that connect global brands with high-intent cricket, football, and emerging sports audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Positioning Pillars (Matching user screenshot) */}
      <section id="positioning" className="doc-section">
        <h2 className="section-title">Positioning — Built, Not Bought</h2>
        <div className="prose">
          <p>
            LevelUp Media operates on a fundamental premise: <strong className="text-[#0F172A]">value comes from owned access and commercial judgement, not media arbitrage.</strong> We build inventory directly with platforms and rights holders rather than re-selling middleman packages.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="section-subtitle">The Seven Positioning Pillars</h3>

          <div className="flex flex-col gap-3 mt-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="p-5 border border-[#E5E7EB] rounded-[6px] bg-[#FAFAFC] flex items-start gap-5 hover:border-[#3343FF] transition-colors"
              >
                <span className="font-['Space_Grotesk'] font-bold text-base text-[#3343FF] w-7 flex-shrink-0">
                  {pillar.num}
                </span>
                <div>
                  <h4 className="font-['Radio_Canada_Big'] text-[17px] font-bold text-[#0F172A] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="doc-footer-nav">
        <Link to="/" className="footer-nav-link">
          <span className="footer-nav-label">← Previous Section</span>
          <span className="footer-nav-title">Documentation Index</span>
        </Link>
        <Link to="/voice" className="footer-nav-link next">
          <span className="footer-nav-label">Next Section →</span>
          <span className="footer-nav-title">Voice &amp; Tone</span>
        </Link>
      </footer>
    </div>
  );
}
