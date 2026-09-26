import { Link } from 'react-router-dom';
import { 
  BROCHURE_URL, 
  LOGO_PACKAGE_URL, 
  SOCIAL_MEDIA_DPS_URL, 
  BRAND_COLLATERALS_URL,
  BUSINESS_CARDS_URL,
  LETTERHEAD_URL,
  SAMPLE_CREATIVES_URL,
  APP_ICON_URL,
  LOGO_BLUE_URL,
  LOGO_DARK_URL,
  LOGO_LIGHT_URL
} from '../utils/constants';

const VECTOR_LOGOS = [
  { name: "LEVELUP Primary Wordmark", category: "Logo", format: "SVG", desc: "Primary brand logotype for web headers & collateral", link: "/assets/logos/LEVELUP.svg", isDownload: true },
  { name: "Standalone 'U' Symbol", category: "Logo", format: "SVG", desc: "Icon mark, social avatar, broadcast corner watermark", link: "/assets/logos/U.svg", isDownload: true },
  { name: "'UP' Secondary Mark", category: "Logo", format: "SVG", desc: "Secondary badge mark for merchandise & video lower-thirds", link: "/assets/logos/UP.svg", isDownload: true },
  { name: "LEVELUP Wordmark (Blue Edition)", category: "Wordmark", format: "COLOR / DRIVE", desc: "Electric blue orchid horizontal logotype suite for primary brand applications", link: LOGO_BLUE_URL, isExternal: true },
  { name: "LEVELUP Wordmark (Dark Edition)", category: "Wordmark", format: "COLOR / DRIVE", desc: "Inverted white & deep navy horizontal logotype for dark backgrounds", link: LOGO_DARK_URL, isExternal: true },
  { name: "LEVELUP Wordmark (Light Edition)", category: "Wordmark", format: "COLOR / DRIVE", desc: "Standard deep navy horizontal wordmark on clean white paper & light stationery", link: LOGO_LIGHT_URL, isExternal: true },
  { name: "Icon Type #2 'UP' (Blue Edition)", category: "Icon Mark", format: "COLOR / DRIVE", desc: "Electric blue orchid 'UP' mark suite for badges, avatars, and app icons", link: LOGO_BLUE_URL, isExternal: true },
  { name: "Icon Type #2 'UP' (Dark Edition)", category: "Icon Mark", format: "COLOR / DRIVE", desc: "High-contrast inverted 'UP' mark for dark mode screens & broadcast corner bugs", link: LOGO_DARK_URL, isExternal: true },
  { name: "Icon Type #2 'UP' (Light Edition)", category: "Icon Mark", format: "COLOR / DRIVE", desc: "Navy 'UP' mark on white backgrounds for merchandise tags and light print", link: LOGO_LIGHT_URL, isExternal: true },
  { name: "Brand Guide Book (Official Manual)", category: "Manual", format: "PDF / DRIVE", desc: "Official brand identity manual, rules, and guidelines documentation", link: BROCHURE_URL, isExternal: true },
  { name: "App Icon Suite (iOS / Android / Web)", category: "Icon", format: "ICON / DRIVE", desc: "Official mobile application icons, favicon assets, and app store graphics", link: APP_ICON_URL, isExternal: true },
  { name: "Business Cards Package", category: "Collateral", format: "PRINT / DRIVE", desc: "Official business card vector source files, print specs, and templates", link: BUSINESS_CARDS_URL, isExternal: true },
  { name: "Official Letterhead Suite", category: "Collateral", format: "DOC / DRIVE", desc: "Corporate letterhead document templates & print stationery files", link: LETTERHEAD_URL, isExternal: true },
  { name: "Sample Social Media Creatives", category: "Social", format: "POST / DRIVE", desc: "1:1 high-impact campaign & statistics highlight post creatives", link: SAMPLE_CREATIVES_URL, isExternal: true },
  { name: "Brand Collaterals Suite (Master Folder)", category: "Collateral", format: "DRIVE / SUITE", desc: "Master collection containing business cards, letterheads, and social creatives", link: BRAND_COLLATERALS_URL, isExternal: true },
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
