import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: 'General', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Contact — ThinkMindLabs</title>
        <meta name="description" content="Get in touch with ThinkMindLabs. Sales, support, partnerships and press inquiries." />
      </Head>

      {/* Page hero */}
      <div className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <span className="section-label">Contact</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(48px, 6vw, 80px)', marginBottom: 20 }}>
            Let's talk<br />
            <em>AI</em>
          </h1>
          <p className="section-body">
            Whether you're evaluating our platform, need technical help, or just want to say hello — we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact form */}
      <section className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container">
          <div className="contact-grid">

            {/* Left info */}
            <div>
              <span className="section-label">Send a Message</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: 20 }}>
                We reply within<br />
                <em>24 hours</em>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 40 }}>
                Drop us a message and someone from the right team will get back to you quickly. We don't use support bots — every message is read by a real person.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: '📍', label: 'Headquarters', value: 'Gurugram, Haryana, India' },
                  { icon: '📍', label: 'US Office', value: 'Palo Alto, CA — Bay Area' },
                  { icon: '✉️', label: 'Email', value: 'ai@thinkmindlabs.com' },
                  { icon: '🕐', label: 'Response time', value: 'Within 24 hours' },
                ].map(info => (
                  <div key={info.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{info.icon}</div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: 2 }}>
                        {info.label}
                      </p>
                      <p style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form or success state */}
            <div>
              {status === 'success' ? (
                <div style={{
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid rgba(179,255,203,0.2)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 48,
                  textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
                }}>
                  <div style={{ fontSize: 52 }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.03em' }}>
                    Message sent!
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', maxWidth: 340, lineHeight: 1.65 }}>
                    Thanks for reaching out, <strong style={{ color: 'var(--color-text-primary)' }}>{form.name.split(' ')[0]}</strong>. We've sent a confirmation to <strong style={{ color: 'var(--accent-orange)' }}>{form.email}</strong> and will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', topic: 'General', message: '' }) }}
                    className="btn btn-ghost"
                    style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your company (optional)"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Topic</label>
                    <select
                      className="form-input"
                      value={form.topic}
                      onChange={e => setForm({ ...form, topic: e.target.value })}
                      style={{ cursor: 'pointer' }}
                      disabled={status === 'sending'}
                    >
                      <option>General</option>
                      <option>Sales &amp; Support</option>
                      <option>Investor Relations</option>
                      <option>Partnership</option>
                      <option>Press &amp; Media</option>
                      <option>Careers</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Tell us what's on your mind..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <div style={{
                      background: 'rgba(255,60,60,0.08)',
                      border: '1px solid rgba(255,60,60,0.2)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 16px',
                      marginBottom: 16,
                      fontSize: 14,
                      color: '#ff6060',
                    }}>
                      ⚠ {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-orange"
                    disabled={status === 'sending'}
                    style={{
                      padding: '14px 28px',
                      fontSize: 15,
                      alignSelf: 'flex-start',
                      opacity: status === 'sending' ? 0.7 : 1,
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {status === 'sending' ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{
                          width: 14, height: 14,
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTopColor: '#fff',
                          borderRadius: '50%',
                          display: 'inline-block',
                          animation: 'spin 0.7s linear infinite',
                        }} />
                        Sending…
                      </span>
                    ) : 'Send Message →'}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 48 }}>
        <div className="container">
          <span className="section-label" style={{ marginBottom: 16, display: 'block' }}>Our Offices</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="offices-grid">

            {/* Gurugram */}
            <div style={{
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>🇮🇳</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-orange)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Headquarters</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>
                Gurugram, India
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                Cyber City, Gurugram<br />
                Haryana 122002<br />
                DLF Cyber Hub Area
              </p>
              {/* <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <a href="https://twitter.com/thinkmindlabs" target="_blank" rel="noopener" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', padding: '8px 16px', fontSize: 13 }}>
                  𝕏 Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', padding: '8px 16px', fontSize: 13 }}>
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', padding: '8px 16px', fontSize: 13 }}>
                  GitHub
                </a>
              </div> */}
            </div>

            {/* Palo Alto */}
            <div style={{
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>🇺🇸</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>US Office</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>
                Palo Alto, CA
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                2930 Domingo Ave<br />
                Palo Alto, CA 94303<br />
                Bay Area, California
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {/* <a href="mailto:us@thinkmindlabs.com" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', padding: '8px 16px', fontSize: 13 }}>
                  ✉ us@thinkmindlabs.com
                </a> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .offices-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
