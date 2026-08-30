import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Note: In Resend free test mode without custom domain, emails can only be sent to the account owner email (rayeesyousuf80@gmail.com)
const PRIMARY_TO_EMAIL = process.env.NOTIFICATION_EMAIL || 'hr@catalysthiringsolutions.in';
const FALLBACK_TO_EMAIL = 'rayeesyousuf80@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Catalyst Hiring <onboarding@resend.dev>';

async function sendWithFallback(payload: { subject: string; html: string }) {
  if (!resend) {
    console.warn('[Resend] RESEND_API_KEY is not configured in Environment Variables.');
    return { success: false, error: 'RESEND_API_KEY missing' };
  }

  // Attempt 1: Send to PRIMARY_TO_EMAIL
  try {
    const res = await resend.emails.send({
      from: FROM_EMAIL,
      to: PRIMARY_TO_EMAIL,
      subject: payload.subject,
      html: payload.html,
    });

    if (res.error) {
      console.warn('[Resend Attempt 1 Error]:', res.error);
      // If error is due to testing domain restriction on unverified recipient, fallback to account owner email
      if (PRIMARY_TO_EMAIL !== FALLBACK_TO_EMAIL) {
        const fallbackRes = await resend.emails.send({
          from: FROM_EMAIL,
          to: FALLBACK_TO_EMAIL,
          subject: `[FORWARDED TO ${PRIMARY_TO_EMAIL}] ${payload.subject}`,
          html: payload.html,
        });
        return { success: true, result: fallbackRes };
      }
      return { success: false, error: res.error };
    }

    return { success: true, result: res };
  } catch (err: any) {
    console.error('[Resend Exception]:', err);
    // Fallback attempt
    try {
      if (PRIMARY_TO_EMAIL !== FALLBACK_TO_EMAIL) {
        const fallbackRes = await resend.emails.send({
          from: FROM_EMAIL,
          to: FALLBACK_TO_EMAIL,
          subject: `[FORWARDED TO ${PRIMARY_TO_EMAIL}] ${payload.subject}`,
          html: payload.html,
        });
        return { success: true, result: fallbackRes };
      }
    } catch (e: any) {
      console.error('[Resend Fallback Exception]:', e);
    }
    return { success: false, error: err.message };
  }
}

export async function sendApplicationEmail(data: {
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  experienceYears: string;
  coverNote?: string;
  resumeFileName?: string;
}) {
  return sendWithFallback({
    subject: `🎯 New Job Application: ${data.fullName} - ${data.jobTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0047AB; padding: 20px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">New Candidate Application Received</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #bfdbfe;">Position: <strong>${data.jobTitle}</strong></p>
        </div>
        
        <div style="padding: 24px; color: #1e293b; font-size: 14px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 140px; color: #64748b; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #0047AB; text-decoration: none; font-weight: bold;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0047AB; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Location:</td>
              <td style="padding: 8px 0;">${data.currentLocation}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Experience:</td>
              <td style="padding: 8px 0;">${data.experienceYears} Years</td>
            </tr>
            ${
              data.resumeFileName
                ? `<tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Resume File:</td>
                    <td style="padding: 8px 0;">${data.resumeFileName}</td>
                  </tr>`
                : ''
            }
          </table>

          ${
            data.coverNote
              ? `
            <div style="margin-top: 16px; padding: 12px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0047AB;">
              <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: bold;">Candidate Note:</p>
              <p style="margin: 6px 0 0 0; font-style: italic; color: #334155;">"${data.coverNote}"</p>
            </div>
          `
              : ''
          }

          <div style="margin-top: 24px; text-align: center;">
            <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
      data.fullName
    )},%20we%20reviewed%20your%20application%20for%20${encodeURIComponent(
      data.jobTitle
    )}%20at%20Catalyst%20Hiring%20Solutions."
               style="display: inline-block; padding: 10px 20px; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 13px;">
              Chat with Candidate on WhatsApp
            </a>
          </div>
        </div>

        <div style="background-color: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center;">
          Sent automatically by Catalyst Hiring Solutions Platform
        </div>
      </div>
    `,
  });
}

export async function sendEmployerLeadEmail(data: {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  rolesNeeded: string;
  teamSize?: string;
  message?: string;
}) {
  return sendWithFallback({
    subject: `💼 Urgent Employer Mandate: ${data.companyName} (${data.contactPerson})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0f172a; padding: 20px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">New Employer Talent Mandate</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #94a3b8;">Company: <strong>${data.companyName}</strong></p>
        </div>
        
        <div style="padding: 24px; color: #1e293b; font-size: 14px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 140px; color: #64748b; font-weight: bold;">Company Name:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">${data.companyName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Contact Person:</td>
              <td style="padding: 8px 0; font-weight: bold;">${data.contactPerson}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone / Mobile:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #0047AB; text-decoration: none; font-weight: bold;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Work Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0047AB; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Roles Needed:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #0047AB;">${data.rolesNeeded}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Hiring Volume:</td>
              <td style="padding: 8px 0;">${data.teamSize || '1-5 Hires'}</td>
            </tr>
          </table>

          ${
            data.message
              ? `
            <div style="margin-top: 16px; padding: 12px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0f172a;">
              <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: bold;">Requirement Details:</p>
              <p style="margin: 6px 0 0 0; color: #334155;">"${data.message}"</p>
            </div>
          `
              : ''
          }

          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:${data.phone.replace(/[^0-9+]/g, '')}"
               style="display: inline-block; padding: 10px 20px; background-color: #0047AB; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 13px; margin-right: 8px;">
              Call Employer
            </a>
            <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
      data.contactPerson
    )},%20thank%20you%20for%20contacting%20Catalyst%20Hiring%20Solutions%20regarding%20your%20mandate%20for%20${encodeURIComponent(
      data.companyName
    )}."
               style="display: inline-block; padding: 10px 20px; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 13px;">
              WhatsApp Client
            </a>
          </div>
        </div>

        <div style="background-color: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center;">
          Sent automatically by Catalyst Hiring Solutions Platform
        </div>
      </div>
    `,
  });
}

export async function sendContactMessageEmail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  return sendWithFallback({
    subject: `📩 Contact Form Message: ${data.subject} (${data.name})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0047AB; padding: 20px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">New Contact Inquiry</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #bfdbfe;">Subject: <strong>${data.subject}</strong></p>
        </div>
        
        <div style="padding: 24px; color: #1e293b; font-size: 14px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 140px; color: #64748b; font-weight: bold;">Sender Name:</td>
              <td style="padding: 8px 0; font-weight: bold;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #0047AB; text-decoration: none; font-weight: bold;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0047AB; text-decoration: none;">${data.email}</a></td>
            </tr>
          </table>

          <div style="margin-top: 16px; padding: 12px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0047AB;">
            <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: bold;">Message Content:</p>
            <p style="margin: 6px 0 0 0; color: #334155; white-space: pre-line;">${data.message}</p>
          </div>
        </div>

        <div style="background-color: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center;">
          Sent automatically by Catalyst Hiring Solutions Platform
        </div>
      </div>
    `,
  });
}
