import { Link } from 'react-router-dom';

const GROUPS = [
  { num: "GROUP 01", title: "Rights Holders & Leagues", desc: "Seeking reliable commercial monetization, high broadcast quality, and digital distribution expansion." },
  { num: "GROUP 02", title: "Global & Regional Brands", desc: "Seeking direct access to high-intent cricket and football fans without five agency middlemen." },
  { num: "GROUP 03", title: "Creators & Athletes", desc: "Seeking professional representation, brand sponsorship alignment, and high-end video production support." },
  { num: "GROUP 04", title: "Digital & OTT Platforms", desc: "Seeking high-retention live sports highlights, stats widgets, and interactive fan engagement features." }
];

const ROLES = [
  {
    title: "Chief Marketing Officers (CMOs)",
    type: "BUYER",
    desc: "Focus on bottom-line business ROI, category exclusivity, brand safety, and measurable consumer sentiment lift across target MENA and South Asia territories."
  },
  {
    title: "Brand Sponsorship Managers",
    type: "BUYER",
    desc: "Focus on activation flexibility, athlete meet-and-greets, stadium VIP hospitality, and frictionless multi-market contractual deliverables."
  },
  {
    title: "Media Agency Planners",
    type: "INFLUENCER",
    desc: "Focus on CPM efficiency, verified reach metrics, third-party impression verification (IAS / DoubleVerify), and cross-platform reporting dashboards."
  },
  {
    title: "Talent Agents & Athlete Managers",
    type: "INFLUENCER",
    desc: "Focus on athlete brand alignment, image rights protection, fair compensation, and long-term multi-year creative partnership upside."
  }
];

export default function Audience() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="page-header">
        <div className="page-category">06 / STRATEGY &amp; ASSETS</div>
        <h1 className="page-title">Audience &amp; Markets</h1>
        <p className="page-lead">
          Understanding who buys, who influences commercial decisions, and how LevelUp connects brands with sports fans across MENA and South Asia.
        </p>
      </header>

      {/* Section 1: Stakeholder Ecosystem Groups */}
      <section id="stakeholders" className="doc-section">
        <h2 className="section-title">Ecosystem Stakeholder Groups</h2>
        <div className="prose">
          <p>LevelUp Media serves four core groups within the global sports marketing ecosystem:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {GROUPS.map((group) => (
            <div key={group.num} className="p-6 border border-[#E5E7EB] rounded-lg bg-white">
              <div className="font-['Space_Grotesk'] text-xs font-bold text-[#3343FF] mb-1">
                {group.num}
              </div>
              <h3 className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A] mb-2">
                {group.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {group.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Who Pays vs Who Influences */}
      <section id="decision-makers" className="doc-section">
        <h2 className="section-title">Decision Makers — Buyers vs. Influencers</h2>
        <div className="prose">
          <p>Tailor commercial communications specifically to the priorities of each decision-maker role:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {ROLES.map((role) => (
            <div key={role.title} className="p-6 border border-[#E5E7EB] rounded-lg bg-white">
              <span className={`inline-block font-['Space_Grotesk'] text-[11px] font-bold px-2 py-0.5 rounded mb-2 ${
                role.type === 'BUYER' ? 'bg-[#E9EBFF] text-[#3343FF]' : 'bg-[#F4F5F8] text-[#64748B]'
              }`}>
                {role.type}
              </span>
              <h3 className="font-['Radio_Canada_Big'] text-lg font-bold text-[#0F172A] mb-2">
                {role.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="doc-footer-nav">
        <Link to="/typography" className="footer-nav-link">
          <span className="footer-nav-label">← Previous Section</span>
          <span className="footer-nav-title">Typography</span>
        </Link>
        <Link to="/applications" className="footer-nav-link next">
          <span className="footer-nav-label">Next Section →</span>
          <span className="footer-nav-title">Applications</span>
        </Link>
      </footer>
    </div>
  );
}
