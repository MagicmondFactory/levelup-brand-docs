import { Link } from 'react-router-dom';
import { BROCHURE_URL, LOGO_PACKAGE_URL, SOCIAL_MEDIA_DPS_URL, BRAND_COLLATERALS_URL } from '../utils/constants';

const VECTOR_LOGOS = [
  { name: "LEVELUP Primary Wordmark", category: "Logo", format: "SVG", desc: "Primary brand logotype for web headers & collateral", link: "/assets/logos/LEVELUP.svg", isDownload: true },
  { name: "Standalone 'U' Symbol", category: "Logo", format: "SVG", desc: "Icon mark, social avatar, broadcast corner watermark", link: "/assets/logos/U.svg", isDownload: true },
  { name: "'UP' Secondary Mark", category: "Logo", format: "SVG", desc: "Secondary badge mark for merchandise & video lower-thirds", link: "/assets/logos/UP.svg", isDownload: true },
  { name: "Brand Guide Book (Official Manual)", category: "Manual", format: "PDF / DRIVE", desc: "Official brand identity manual, rules, and guidelines documentation", link: BROCHURE_URL, isExternal: true },
  { name: "Brand Collaterals Suite", category: "Collateral", format: "DRIVE / SUITE", desc: "Official business card, letterhead, and sample social media creative assets", link: BRAND_COLLATERALS_URL, isExternal: true },
  { name: "Social Media DPs (Avatars / Icons)", category: "Social", format: "PNG / DRIVE", desc: "Curated suite of 3 official social media display pictures & profile avatars", link: SOCIAL_MEDIA_DPS_URL, isExternal: true },
  { name: "Complete Logo Folder (EPS / PNG)", category: "Package", format: "ZIP / DRIVE", desc: "Full EPS print vectors & transparent PNG asset suite", link: LOGO_PACKAGE_URL, isExternal: true },
];

const FONTS = [
  { family: "Radio Canada Big", role: "Display Headlines", format: "TTF / WEB", license: "Google Fonts / Open Font License", link: "https://fonts.google.com/specimen/Radio+Canada+Big" },
  { family: "Geist", role: "Body Copy & UI", format: "OTF / WEB", license: "Vercel / SIL Open Font License", link: "https://vercel.com/font" },
  { family: "Space Grotesk", role: "Numerals & Metrics", format: "TTF / WEB", license: "Google Fonts / Open Font License", link: "https://fonts.google.com/specimen/Space+Grotesk" },
];

export default function Downloads() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="page-header">
        <div className="page-category">09 / STRATEGY &amp; ASSETS</div>
        <h1 className="page-title">Asset Index &amp; Downloads</h1>
        <p className="page-lead">
          An indexed reference matrix of all LevelUp Media brand assets, vector logos, typography font files, and official brand documentation.
        </p>
      </header>

      {/* Section 1: Logo Vector Assets (Matching screenshot exactly) */}
      <section id="logo-assets" className="doc-section">
        <h2 className="section-title">Logo Vector Assets</h2>
        <div className="prose">
          <p>Direct vector downloads for web, print collateral, broadcast graphics, and partner agency applications:</p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="type-specimen-table">
            <thead>
              <tr>
                <th>Asset Name</th>
                <th>Category</th>
                <th>Format</th>
                <th>Usage Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {VECTOR_LOGOS.map((asset) => (
                <tr key={asset.name}>
                  <td><strong>{asset.name}</strong></td>
                  <td>{asset.category}</td>
                  <td>
                    <span className="font-['Space_Grotesk'] text-xs bg-[#F4F5F8] px-1.5 py-0.5 rounded">
                      {asset.format}
                    </span>
                  </td>
                  <td className="text-sm text-[#475569]">{asset.desc}</td>
                  <td>
                    {asset.isExternal ? (
                      <a
                        href={asset.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-download-btn"
                      >
                        Open Drive ↗
                      </a>
                    ) : (
                      <a
                        href={asset.link}
                        download
                        className="inline-download-btn"
                      >
                        Download SVG
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Brand Typefaces (Matching screenshot exactly) */}
      <section id="fonts" className="doc-section">
        <h2 className="section-title">Brand Typefaces</h2>
        <div className="prose">
          <p>Font files for desktop publishing, pitch deck creation, and web platform integration:</p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="type-specimen-table">
            <thead>
              <tr>
                <th>Font Family</th>
                <th>Role</th>
                <th>Format</th>
                <th>License &amp; Source</th>
                <th>Download Link</th>
              </tr>
            </thead>
            <tbody>
              {FONTS.map((font) => (
                <tr key={font.family}>
                  <td><strong>{font.family}</strong></td>
                  <td className="text-sm text-[#475569]">{font.role}</td>
                  <td>
                    <span className="font-['Space_Grotesk'] text-xs bg-[#F4F5F8] px-1.5 py-0.5 rounded">
                      {font.format}
                    </span>
                  </td>
                  <td className="text-sm text-[#475569]">{font.license}</td>
                  <td>
                    <a
                      href={font.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-download-btn"
                    >
                      Google Fonts ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="doc-footer-nav">
        <Link to="/email-signature" className="footer-nav-link">
          <span className="footer-nav-label">← Previous Section</span>
          <span className="footer-nav-title">Email Signature</span>
        </Link>
        <Link to="/" className="footer-nav-link next">
          <span className="footer-nav-label">Next Section →</span>
          <span className="footer-nav-title">Documentation Index</span>
        </Link>
      </footer>
    </div>
  );
}
