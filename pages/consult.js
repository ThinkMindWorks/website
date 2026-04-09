import Head from 'next/head'
import { useState } from 'react'

const PRACTICES = [
  {
    icon: '🔍',
    title: 'AI Discovery & Readiness',
    desc: 'We audit your existing infrastructure, data assets and workflows to identify high-impact AI opportunities. You get a prioritised AI roadmap built around your business outcomes — not technology trends.',
    tags: ['AI Maturity Assessment', 'Data Readiness Audit', 'ROI Mapping', 'Risk Framework'],
  },
  {
    icon: '🏗️',
    title: 'Custom AI Solution Design',
    desc: 'From architecture to agent design, we translate your business problem into a deployable AI solution. We define the right model stack, integration points, and delivery milestones before a single line of code is written.',
    tags: ['Solution Architecture', 'Model Selection', 'Agent Design', 'Integration Blueprint'],
  },
  {
    icon: '⚡',
    title: 'Rapid Build & Deployment',
    desc: 'Our AI-native team ships fast. We build, test and deploy production-ready AI products in weeks — not quarters. Every delivery is a working product, not a proof of concept gathering dust.',
    tags: ['Agile AI Sprints', 'Production Deployment', 'QA & Testing', 'Handover & Training'],
  },
  {
    icon: '🏛️',
    title: 'Sovereign AI Stack Setup',
    desc: 'For enterprises requiring full data control, we build and deploy your entire AI stack on your own infrastructure — cloud or on-premise. Your models, your agents, your data. Zero third-party dependency.',
    tags: ['On-Premise Deployment', 'Private Cloud Setup', 'Data Sovereignty', 'Compliance-Ready'],
  },
  {
    icon: '🔗',
    title: 'AI Integration & Orchestration',
    desc: 'We connect AI agents to your existing enterprise systems — CRM, ERP, HIS, communication platforms. Our agents become a native part of your operations, not a bolt-on tool.',
    tags: ['ERP/CRM Integration', 'API Orchestration', 'Workflow Automation', 'Multi-system Sync'],
  },
  {
    icon: '📊',
    title: 'AI CoPilot & Analytics',
    desc: 'Every AI deployment gets a co-pilot dashboard — real-time analytics, interaction logs, sentiment analysis, performance scoring and actionable recommendations to continuously improve your AI.',
    tags: ['Real-time Analytics', 'Sentiment Analysis', 'QA Scoring', 'Performance Dashboards'],
  },
]

const SECTORS = [
  { icon: '🏥', name: 'Healthcare', desc: 'Clinical AI agents, patient record intelligence, diagnostic assistance' },
  { icon: '🛍️', name: 'Retail & eCommerce', desc: 'Conversational commerce, inventory AI, customer success agents' },
  { icon: '🏦', name: 'Financial Services', desc: 'FinOps automation, compliance AI, customer onboarding agents' },
  { icon: '🏭', name: 'Manufacturing', desc: 'Supply chain intelligence, quality control AI, predictive maintenance' },
  { icon: '🎓', name: 'Education', desc: 'Personalised learning agents, admission AI, student success tools' },
  { icon: '🏢', name: 'Enterprise SaaS', desc: 'AI-native product features, agent marketplace, embedded intelligence' },
]

const PROCESS = [
  { num: '01', title: 'Discovery Call', time: 'Week 1', desc: 'We meet your team, understand your problem statement and business context. No slides, no decks — just a focused conversation.' },
  { num: '02', title: 'AI Blueprint', time: 'Week 1–2', desc: 'We deliver a structured solution overview: recommended architecture, agent design, data requirements, integration map and delivery timeline.' },
  { num: '03', title: 'Build Sprint', time: 'Week 3–8', desc: 'Agile AI sprints with weekly demos. You see working product every week — not quarterly updates.' },
  { num: '04', title: 'Deploy & Integrate', time: 'Week 8–10', desc: 'Production deployment on your infrastructure, integration with your existing systems, and team training.' },
  { num: '05', title: 'Co-Pilot & Scale', time: 'Ongoing', desc: 'Analytics dashboard, performance monitoring, continuous improvement and scale planning as your AI matures.' },
]

export default function Consult() {
  const [problem, setProblem] = useState('')
  const [phase, setPhase] = useState('idle') // idle | loading | response | schedule
  const [aiResponse, setAiResponse] = useState(null)
  const [scheduleForm, setScheduleForm] = useState({ name: '', email: '', phone: '', company: '' })
  const [scheduleStatus, setScheduleStatus] = useState('idle') // idle | sending | success

  const handleProblemSubmit = async () => {
    if (!problem.trim() || problem.trim().length < 30) return
    setPhase('loading')
    setAiResponse(null)

    try {
      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Failed to generate response.')

      setAiResponse(data.result)
      setPhase('response')
    } catch (err) {
      setAiResponse('We encountered an issue generating your overview. Please describe your challenge to our team directly — we will respond within 24 hours.')
      setPhase('response')
    }
  }

  const handleScheduleSubmit = async (e) => {
    e.preventDefault()
    setScheduleStatus('sending')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200))
    setScheduleStatus('success')
  }

  const formatAiResponse = (text) => {
    if (!text) return null
    const sections = text.split(/\*\*(.+?)\*\*/).filter(Boolean)
    const result = []
    for (let i = 0; i < sections.length; i += 2) {
      const heading = sections[i]
      const content = sections[i + 1] || ''
      if (content.trim()) {
        result.push({ heading: heading.trim(), content: content.trim() })
      } else if (!sections[i + 1] && heading) {
        // plain text
        result.push({ heading: null, content: heading })
      }
    }
    return result
  }

  const parsed = formatAiResponse(aiResponse)

  return (
    <>
      <Head>
        <title>AI Consulting — ThinkMindLabs</title>
        <meta name="description" content="ThinkMindLabs AI Consulting — helping enterprises discover, build and deploy custom AI solutions. Talk to our AI consulting practice." />
      </Head>

      {/* HERO */}
      <div className="page-hero" style={{ paddingBottom: 48 }}>
        <div className="container">
          <span className="section-label">AI Consulting Practice</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 6vw, 76px)', marginBottom: 16, maxWidth: 800 }}>
            Your enterprise.<br /><em>AI-ready.</em>
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 600, marginBottom: 28 }}>
            ThinkMindLabs works with large enterprises to discover, design and deploy custom AI solutions — as products, models or sovereign stacks. We bring 100+ years of enterprise experience and an AI-native build team.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#problem" className="btn btn-orange" style={{ padding: '12px 24px' }}>State Your Problem →</a>
            <a href="#process" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', padding: '12px 24px' }}>How We Work</a>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            {[
              { value: '100+', label: 'Years enterprise experience' },
              { value: '5 min', label: 'To first working AI agent' },
              { value: '4', label: 'Live AI products deployed' },
              { value: '6', label: 'Enterprise sectors served' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--accent-orange)' }}>{s.value}</span>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONSULTING PRACTICES */}
      <section className="section">
        <div className="container">
          <span className="section-label">Our Practice Areas</span>
          <h2 className="section-title">End-to-end AI<br /><em>consulting</em> for enterprise</h2>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
            We cover every phase of enterprise AI adoption — from first discovery to production deployment and beyond.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="consult-grid-3">
            {PRACTICES.map(p => (
              <div key={p.title} style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '24px 22px', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,98,0,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</div>
                <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{p.title}</p>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 999, background: 'rgba(255,98,0,0.08)', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em', border: '1px solid rgba(255,98,0,0.15)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,98,0,0.02), transparent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">Industry Focus</span>
            <h2 className="section-title">AI built for<br /><em>your sector</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="consult-grid-3">
            {SECTORS.map(s => (
              <div key={s.name} style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '20px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>{s.name}</p>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'flex-start' }} className="consult-two-col">
            <div>
              <span className="section-label">How We Work</span>
              <h2 className="section-title">From problem<br />to <em>production</em><br />in 10 weeks</h2>
              <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                We run tight, focused AI build cycles. No waterfall. No 6-month discovery phases. Just fast, iterative delivery with working product at every milestone.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PROCESS.map((step, i) => (
                <div key={step.num} style={{ display: 'flex', gap: 20, paddingBottom: 24, paddingTop: i === 0 ? 0 : 24, borderBottom: i < PROCESS.length - 1 ? '1px solid var(--color-border)' : 'none', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-orange)', letterSpacing: '0.06em' }}>{step.num}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-muted)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{step.time}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>{step.title}</p>
                    <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT FORM */}
      <section className="section" id="problem" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,98,0,0.03), transparent)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="section-label">AI Solution Brief</span>
            <h2 className="section-title">Write your<br /><em>problem statement</em></h2>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
              Describe your business challenge in plain language. Our AI will generate an instant structured solution overview tailored to your problem — then we will schedule a call to go deeper.
            </p>
          </div>

          {phase === 'idle' && (
            <div style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '32px' }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 12 }}>
                Write your problem statement
              </label>
              <textarea
                value={problem}
                onChange={e => setProblem(e.target.value)}
                placeholder={`Example: We are a 500-bed hospital in Mumbai. Our doctors spend 3 hours per day on clinical documentation after patient consultations. We have an existing HIS system (MedTrack) and want to use AI to automatically listen to doctor-patient conversations and generate structured clinical notes, prescriptions and follow-up instructions. We need this to integrate with our existing system and be compliant with Indian healthcare data regulations...`}
                style={{
                  width: '100%',
                  minHeight: 220,
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '16px',
                  fontSize: 14,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.75,
                  resize: 'vertical',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,98,0,0.5)'}
                onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, flexWrap: 'wrap', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: problem.length < 30 ? 'var(--color-text-muted)' : '#00e5a0', letterSpacing: '0.04em' }}>
                  {problem.length < 30 ? `${30 - problem.length} more characters to unlock` : `✓ ${problem.length} characters — ready to submit`}
                </span>
                <button
                  onClick={handleProblemSubmit}
                  disabled={problem.trim().length < 30}
                  className="btn btn-orange"
                  style={{ padding: '12px 32px', fontSize: 14, opacity: problem.trim().length < 30 ? 0.4 : 1, cursor: problem.trim().length < 30 ? 'not-allowed' : 'pointer' }}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {phase === 'loading' && (
            <div style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '48px 32px', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                <div style={{ width: 40, height: 40, border: '3px solid rgba(255,98,0,0.2)', borderTopColor: 'var(--accent-orange)', borderRadius: '50%', animation: 'consultSpin 0.8s linear infinite' }} />
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>Analysing your problem statement…</p>
                  <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Our AI is generating your custom solution overview</p>
                </div>
              </div>
            </div>
          )}

          {phase === 'response' && parsed && (
            <div>
              {/* AI response */}
              <div style={{ background: 'var(--color-bg-elevated)', border: '1px solid rgba(255,98,0,0.2)', borderRadius: 'var(--radius-xl)', padding: '32px', marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid var(--color-border)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>🧠</div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 2 }}>Quick Draft Solution Overview</p>
                    <p style={{ fontSize: 12, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>Generated by ThinkMindLabs AI · Review with our consultants</p>
                  </div>
                </div>

                {parsed.map((section, i) => (
                  <div key={i} style={{ marginBottom: 24 }}>
                    {section.heading && (
                      <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-orange)', marginBottom: 8, fontFamily: 'var(--font-mono)' }}>
                        {section.heading}
                      </p>
                    )}
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                      {section.content.split('\n').map((line, j) => (
                        line.trim() ? (
                          line.trim().startsWith('-') || line.trim().startsWith('•') ? (
                            <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 6, alignItems: 'flex-start' }}>
                              <span style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: 2 }}>→</span>
                              <span>{line.replace(/^[-•]\s*/, '')}</span>
                            </div>
                          ) : (
                            <p key={j} style={{ marginBottom: 8 }}>{line}</p>
                          )
                        ) : null
                      ))}
                    </div>
                  </div>
                ))}

                <div style={{ paddingTop: 20, borderTop: '1px solid var(--color-border)', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <button onClick={() => { setPhase('idle'); setAiResponse(null) }} className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 13 }}>
                    ← Edit problem statement
                  </button>
                  <button onClick={() => setPhase('schedule')} className="btn btn-orange" style={{ padding: '10px 24px', fontSize: 13 }}>
                    Schedule a Discovery Call →
                  </button>
                </div>
              </div>

              {/* Prompt to schedule */}
              <div style={{ background: 'linear-gradient(135deg, rgba(255,98,0,0.06), transparent)', border: '1px solid rgba(255,98,0,0.15)', borderRadius: 'var(--radius-xl)', padding: '24px 28px', textAlign: 'center' }}>
                <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 4 }}>This is an AI-generated overview. Our consulting team will refine and validate this with you.</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Book a 30-minute discovery call — free, no commitment.</p>
              </div>
            </div>
          )}

          {/* Schedule form — shown after response or directly */}
          {(phase === 'schedule' || phase === 'response') && phase === 'schedule' && (
            <div style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '32px', marginTop: 24 }}>
              {scheduleStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 10 }}>You're booked in.</h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
                    Our consulting team will reach out within 24 hours to confirm your discovery call. Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: 24 }}>
                    <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4, letterSpacing: '-0.02em' }}>Schedule your Discovery Call</p>
                    <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>30 minutes · Free · No commitment · With a ThinkMindLabs AI consultant</p>
                  </div>
                  <form onSubmit={handleScheduleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="schedule-form-grid">
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-input" placeholder="Your full name" value={scheduleForm.name} onChange={e => setScheduleForm({ ...scheduleForm, name: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Work Email</label>
                        <input type="email" className="form-input" placeholder="you@company.com" value={scheduleForm.email} onChange={e => setScheduleForm({ ...scheduleForm, email: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-input" placeholder="+91 98765 43210" value={scheduleForm.phone} onChange={e => setScheduleForm({ ...scheduleForm, phone: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Company Name</label>
                        <input type="text" className="form-input" placeholder="Your organisation" value={scheduleForm.company} onChange={e => setScheduleForm({ ...scheduleForm, company: e.target.value })} required />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-orange"
                      disabled={scheduleStatus === 'sending'}
                      style={{ padding: '13px 32px', fontSize: 14, width: '100%', justifyContent: 'center', opacity: scheduleStatus === 'sending' ? 0.7 : 1 }}
                    >
                      {scheduleStatus === 'sending' ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                          <span style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'consultSpin 0.7s linear infinite' }} />
                          Scheduling…
                        </span>
                      ) : 'Confirm Discovery Call →'}
                    </button>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Not sure where<br />to <em>start?</em></h2>
          <p className="cta-subtitle">Talk to one of our AI consultants. We will help you find the highest-impact AI opportunity in your business in a single call.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#problem" className="btn btn-orange" style={{ padding: '14px 32px', fontSize: 15 }}>State Your Problem →</a>
            <a href="mailto:ai@thinkmindlabs.com" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', padding: '14px 32px', fontSize: 15 }}>Email Us Directly</a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes consultSpin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .consult-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
          .consult-two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .consult-grid-3 { grid-template-columns: 1fr !important; }
          .schedule-form-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </>
  )
}
