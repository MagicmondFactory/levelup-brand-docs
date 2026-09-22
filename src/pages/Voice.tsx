import { Link } from 'react-router-dom';

const VOICE_PRINCIPLES = [
  {
    num: "01 / DIRECT, NOT DECORATED",
    title: "Headline with short, punchy statements.",
    desc: "Strip away adjective clutter, long intro phrases, and corporate filler. Tell the reader what we do and why it matters in under 10 words."
  },
  {
    num: "02 / CONFIDENT, NUMBER-CENTRIC",
    title: "Numbers don't lie. Lead with metrics.",
    desc: "Anchor claims with verifiable data points: 400M+ users, 150+ brands, booked versus delivered. Facts build confidence faster than marketing promises."
  },
  {
    num: "03 / MYTH-BREAKING, NOT DEFENSIVE",
    title: "Expose agency inefficiencies directly.",
    desc: "Identify the gaps in traditional sports marketing (5 contracts, 5 rate cards) clearly and present our ecosystem as the natural upgrade."
  },
  {
    num: "04 / CONSULTATIVE, NOT TRANSACTIONAL",
    title: "Build around client objectives, not rate cards.",
    desc: "We advise on sports culture, audience behavior, and campaign design — we don't just sell ad impressions off a menu."
  },
  {
    num: "05 / INSIDE SPORTS CULTURE",
    title: "Speak fan language with restraint.",
    desc: "Use real sports terminology (rights, match broadcasts, creator feeds) without sounding like a noisy sports betting app or gaming advert."
  }
];

const SAY_MATRIX = [
  {
    say: '"We run all five as one."',
    sayWhy: "Direct statement explaining our connected ecosystem in six words.",
    avoid: '"We pride ourselves on offering an integrated approach to campaign delivery."',
    avoidWhy: "Generic corporate cliché with zero memorability."
  },
  {
    say: '"Numbers don\'t lie."',
    sayWhy: "Establishes our data-centric proof mindset immediately.",
    avoid: '"We provide innovative solutions for brands looking to engage audiences."',
    avoidWhy: 'Meaningless buzzwords ("innovative solutions", "engage audiences").'
  },
  {
    say: '"One partner. All solutions."',
    sayWhy: "Clear value proposition contrasting against multi-vendor hassle.",
    avoid: '"We are passionate about creating meaningful connections."',
    avoidWhy: "Overly emotional agency marketing trope."
  },
  {
    say: '"Sport isn\'t one door."',
    sayWhy: "Inside observation about modern fan consumption habits.",
    avoid: '"We understand the multi-channel digital sports landscape."',
    avoidWhy: "Weak passive phrase with no creative friction."
  }
];

export default function Voice() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="page-header">
        <div className="page-category">02 / BRAND SYSTEM</div>
        <h1 className="page-title">Voice &amp; Tone</h1>
        <p className="page-lead">
          LevelUp Media speaks like an intelligent sports insider. Direct, confident, and number-centric — never corporate for the sake of sounding corporate.
        </p>
      </header>

      {/* Section 1: The 5 Core Voice Rules */}
      <section id="principles" className="doc-section">
        <h2 className="section-title">The Five Voice Principles</h2>
        <div className="prose">
          <p>Every piece of written copy — from email introductions to deck headlines and web copy — must embody these five characteristics:</p>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          {VOICE_PRINCIPLES.map((item) => (
            <div key={item.num} className="p-6 border border-[#E5E7EB] rounded-lg bg-white">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-1">
                {item.num}
              </div>
              <h4 className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A] mb-1">
                {item.title}
              </h4>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Say / Don't Say Comparison Matrix */}
      <section id="say-matrix" className="doc-section">
        <h2 className="section-title">Say / Don&apos;t Say Matrix</h2>
        <div className="prose">
          <p>Compare these real examples to understand the difference between LevelUp voice and generic agency speak:</p>
        </div>

        <div className="flex flex-col gap-5 mt-6">
          {SAY_MATRIX.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Say */}
              <div className="rounded-lg p-6 border border-[#E5E7EB] bg-[#FAFAFC] border-t-4 border-t-[#10B981]">
                <div className="font-['Space_Grotesk'] text-xs font-bold text-[#10B981] mb-2 uppercase">
                  ✓ SAY THIS
                </div>
                <div className="font-['Radio_Canada_Big'] text-xl font-bold text-[#0F172A] mb-2">
                  {item.say}
                </div>
                <div className="text-sm text-[#475569]">
                  {item.sayWhy}
                </div>
              </div>

              {/* Avoid */}
              <div className="rounded-lg p-6 border border-[#E5E7EB] bg-[#FAFAFC] border-t-4 border-t-[#EF4444]">
                <div className="font-['Space_Grotesk'] text-xs font-bold text-[#EF4444] mb-2 uppercase">
                  ✕ AVOID THIS
                </div>
                <div className="font-['Radio_Canada_Big'] text-lg font-medium text-[#64748B] line-through mb-2">
                  {item.avoid}
                </div>
                <div className="text-sm text-[#475569]">
                  {item.avoidWhy}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="doc-footer-nav">
        <Link to="/foundation" className="footer-nav-link">
          <span className="footer-nav-label">← Previous Section</span>
          <span className="footer-nav-title">Foundation &amp; Story</span>
        </Link>
        <Link to="/logo" className="footer-nav-link next">
          <span className="footer-nav-label">Next Section →</span>
          <span className="footer-nav-title">Logo &amp; Mark</span>
        </Link>
      </footer>
    </div>
  );
}
