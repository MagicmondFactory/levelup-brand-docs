export interface SignatureData {
  fullName: string;
  designation: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  websiteUrl: string;
}

export const DEFAULT_SIGNATURE: SignatureData = {
  fullName: "Mohammed Shareefuddin",
  designation: "STATEGY AND OPERATIONS SENIOR EXECUTIVE",
  phone: "+971 58 289 4780",
  email: "shareefuddin@levelupmedia.ai",
  address: "First Floor, DMCS, Dubai Media City, UAE",
  website: "levelupmedia.ai",
  websiteUrl: "https://levelupmedia.ai",
};

// Returns robust HTML formatted table email signature compatible with Gmail, Outlook, Apple Mail, etc.
export function generateEmailSignatureHTML(data: SignatureData, origin: string = ''): string {
  const logoUrl = `${origin}/assets/logos/Full%20logo%20with%20tag%20line.svg`;
  const phoneIconUrl = `${origin}/assets/icons/phone_in_talk.svg`;
  const emailIconUrl = `${origin}/assets/icons/drafts.svg`;
  const pinIconUrl = `${origin}/assets/icons/pin_drop.svg`;
  const globeIconUrl = `${origin}/assets/icons/globe_asia.svg`;

  return `<!-- LEVELUP MEDIA EMAIL SIGNATURE -->
<table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #ffffff; color: #111111; max-width: 580px; width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
  <tbody>
    <!-- NAME & TITLE -->
    <tr>
      <td style="padding: 0 0 4px 0;">
        <div style="font-family: 'Radio Canada Big', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 26px; font-weight: 700; color: #111111; line-height: 1.2; letter-spacing: -0.5px;">
          ${data.fullName}
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 0 0 24px 0;">
        <div style="font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 600; color: #111111; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.3;">
          ${data.designation}
        </div>
      </td>
    </tr>

    <!-- CONTACT DETAILS -->
    <tr>
      <td style="padding: 0 0 26px 0;">
        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
          <!-- Phone -->
          <tr>
            <td valign="middle" style="width: 22px; padding: 4px 10px 4px 0;">
              <img src="${phoneIconUrl}" width="18" height="18" alt="Phone" style="display: block; width: 18px; height: 18px; border: 0;" />
            </td>
            <td valign="middle" style="padding: 4px 0;">
              <a href="tel:${data.phone.replace(/\\s+/g, '')}" style="font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #111111; text-decoration: none; font-weight: 400; line-height: 1.4;">
                ${data.phone}
              </a>
            </td>
          </tr>
          <!-- Email -->
          <tr>
            <td valign="middle" style="width: 22px; padding: 4px 10px 4px 0;">
              <img src="${emailIconUrl}" width="18" height="18" alt="Email" style="display: block; width: 18px; height: 18px; border: 0;" />
            </td>
            <td valign="middle" style="padding: 4px 0;">
              <a href="mailto:${data.email}" style="font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #111111; text-decoration: none; font-weight: 400; line-height: 1.4;">
                ${data.email}
              </a>
            </td>
          </tr>
          <!-- Address -->
          <tr>
            <td valign="middle" style="width: 22px; padding: 4px 10px 4px 0;">
              <img src="${pinIconUrl}" width="18" height="18" alt="Location" style="display: block; width: 18px; height: 18px; border: 0;" />
            </td>
            <td valign="middle" style="padding: 4px 0;">
              <span style="font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #111111; font-weight: 400; line-height: 1.4;">
                ${data.address}
              </span>
            </td>
          </tr>
          <!-- Website -->
          <tr>
            <td valign="middle" style="width: 22px; padding: 4px 10px 4px 0;">
              <img src="${globeIconUrl}" width="18" height="18" alt="Website" style="display: block; width: 18px; height: 18px; border: 0;" />
            </td>
            <td valign="middle" style="padding: 4px 0;">
              <a href="${data.websiteUrl}" target="_blank" rel="noopener noreferrer" style="font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #111111; text-decoration: none; font-weight: 400; line-height: 1.4;">
                ${data.website}
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- FULL LOGO WITH TAGLINE -->
    <tr>
      <td style="padding: 4px 0 0 0;">
        <a href="${data.websiteUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: none;">
          <img src="${logoUrl}" width="240" height="68" alt="LEVEL UP - YOUR GAME" style="display: block; width: 240px; height: auto; border: 0;" />
        </a>
      </td>
    </tr>
  </tbody>
</table>
<!-- END LEVELUP MEDIA EMAIL SIGNATURE -->`;
}
