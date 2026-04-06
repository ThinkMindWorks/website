import nodemailer from 'nodemailer'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, topic, message, attachmentData, attachmentName } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  // ── Gmail transporter using App Password ──
  //const transporter = nodemailer.createTransport({
  //  service: 'gmail',
  //  auth: {
  //    user: process.env.GMAIL_USER,       // your Gmail address e.g. yourname@gmail.com
  //    pass: process.env.GMAIL_APP_PASSWORD, // 16-char Gmail App Password (not your login password)
  //  },
  //})
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  // ── 1. Notification email → contact@thinkmindlabs.com ──
  const notificationMail = {
    from: `"ThinkMindLabs Contact" <${process.env.GMAIL_USER}>`,
    to: 'contact@thinkmindlabs.com',
    replyTo: email,
    subject: `[Contact Form] ${topic} — ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">

              <!-- Header -->
              <tr>
                <td style="background:#ff6200;padding:28px 36px;">
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background:rgba(0,0,0,0.2);border-radius:8px;width:36px;height:36px;text-align:center;vertical-align:middle;">
                        <span style="color:#fff;font-size:18px;font-weight:bold;line-height:36px;">T</span>
                      </td>
                      <td style="padding-left:12px;">
                        <span style="color:#fff;font-size:18px;font-weight:700;letter-spacing:-0.02em;">ThinkMindLabs</span>
                      </td>
                    </tr>
                  </table>
                  <p style="color:rgba(255,255,255,0.85);margin:16px 0 0;font-size:14px;letter-spacing:0.04em;text-transform:uppercase;">
                    New Contact Form Submission
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px;">

                  <!-- Topic badge -->
                  <div style="display:inline-block;background:rgba(255,98,0,0.12);border:1px solid rgba(255,98,0,0.3);border-radius:999px;padding:5px 14px;margin-bottom:28px;">
                    <span style="color:#ff6200;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">${topic}</span>
                  </div>

                  <!-- Fields -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${[
        ['Name', name],
        ['Email', email],
        ['Company', company || '—'],
        ['Topic', topic],
      ].map(([label, value]) => `
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                        <p style="margin:0 0 4px;font-size:11px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.08em;">${label}</p>
                        <p style="margin:0;font-size:15px;color:#ffffff;">${value}</p>
                      </td>
                    </tr>`).join('')}
                    <tr>
                      <td style="padding:20px 0 0;">
                        <p style="margin:0 0 8px;font-size:11px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.08em;">Message</p>
                        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
                          <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.85);line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <!-- Reply CTA -->
                  <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);">
                    <a href="mailto:${email}" style="display:inline-block;background:#ff6200;color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:600;">
                      Reply to ${name} →
                    </a>
                  </div>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:20px 36px 28px;border-top:1px solid rgba(255,255,255,0.06);">
                  <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.25);font-family:monospace;">
                    thinkmindlabs.com · Gurugram, India · ${new Date().toUTCString()}
                  </p>
                </td>
              </tr>

            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `,
    attachments: (attachmentData && attachmentName) ? [
      {
        filename: attachmentName,
        path: attachmentData
      }
    ] : [],
  }

  // ── 2. Thank-you auto-reply → sender's email ──
  const thankYouMail = {
    from: `"ThinkMindLabs" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name.split(' ')[0]}! — ThinkMindLabs`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">

              <!-- Header -->
              <tr>
                <td style="background:#ff6200;padding:32px 36px;text-align:center;">
                  <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
                    <tr>
                      <td style="background:rgba(0,0,0,0.2);border-radius:10px;width:44px;height:44px;text-align:center;vertical-align:middle;">
                        <span style="color:#fff;font-size:22px;font-weight:bold;line-height:44px;">T</span>
                      </td>
                      <td style="padding-left:12px;">
                        <span style="color:#fff;font-size:20px;font-weight:700;letter-spacing:-0.02em;">ThinkMindLabs</span>
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700;letter-spacing:-0.02em;line-height:1.2;">
                    We got your message!
                  </h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px 36px;">
                  <p style="margin:0 0 20px;font-size:16px;color:rgba(255,255,255,0.8);line-height:1.7;">
                    Hi ${name.split(' ')[0]},
                  </p>
                  <p style="margin:0 0 20px;font-size:16px;color:rgba(255,255,255,0.8);line-height:1.7;">
                    Thanks for reaching out — we've received your message and someone from the ThinkMindLabs team will get back to you within <strong style="color:#fff;">24 hours</strong>.
                  </p>

                  <!-- Message recap -->
                  <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-left:3px solid #ff6200;border-radius:12px;padding:20px 24px;margin:28px 0;">
                    <p style="margin:0 0 6px;font-size:11px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.08em;">Your message</p>
                    <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.65);line-height:1.65;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 300)}${message.length > 300 ? '…' : ''}</p>
                  </div>

                  <p style="margin:0 0 32px;font-size:15px;color:rgba(255,255,255,0.6);line-height:1.7;">
                    In the meantime, feel free to explore our platform or read our engineering notes.
                  </p>

                  <!-- CTAs -->
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-right:12px;">
                        <a href="https://thinkmindlabs.com/products" style="display:inline-block;background:#ff6200;color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:600;">
                          Explore Platform →
                        </a>
                      </td>
                      <td>
                        <a href="https://thinkmindlabs.com/notes" style="display:inline-block;background:rgba(255,255,255,0.06);color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:600;border:1px solid rgba(255,255,255,0.12);">
                          Read our Notes
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:24px 36px;border-top:1px solid rgba(255,255,255,0.06);">
                  <p style="margin:0 0 6px;font-size:13px;color:rgba(255,255,255,0.4);line-height:1.6;">
                    ThinkMindLabs · Cyber City, Gurugram, Haryana 122002, India
                  </p>
                  <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.2);font-family:monospace;">
                    This is an automated confirmation. Please don't reply to this email —
                    <a href="mailto:contact@thinkmindlabs.com" style="color:#ff6200;text-decoration:none;">contact@thinkmindlabs.com</a>
                    for direct contact.
                  </p>
                </td>
              </tr>

            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `,
  }

  try {
    // ✅ ADD THIS HERE
    console.log("ENV CHECK:", {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD ? "EXISTS" : "MISSING"
    });

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(notificationMail),
      transporter.sendMail(thankYouMail),
    ])

    return res.status(200).json({ success: true })

  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
