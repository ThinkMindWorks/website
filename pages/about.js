import Head from 'next/head'
import Link from 'next/link'

const TEAM = [
  { emoji: '🧠', name: 'The Founders', role: 'Visionaries & Builders', desc: 'A select few with over 100 years of combined enterprise experience solving large business problems with technology. Now building AI.' },
  { emoji: '🤖', name: '100+ AI Workers', role: 'Always-On Builders', desc: 'Our AI workforce runs 24/7. They write code, test agents, train models, generate content, and ship products alongside our human team.' },
  { emoji: '⚡', name: '5 Humans', role: 'AI-Native Developers', desc: 'Fresh out of college, generative minds who live and breathe AI. Every line of code, every agent, every product — built with AI at the core.' },
  { emoji: '🌍', name: 'Global by Design', role: 'Gurugram, India', desc: 'Born in India, building for the world. Our products serve enterprise customers across healthcare, retail, financial services and more.' },
]

const VALUES = [
  { icon: '🎯', title: 'One Problem, Perfectly', desc: 'We never build bloated platforms. Every product exists to solve exactly one business problem — and solve it perfectly.' },
  { icon: '🚀', title: 'Deploy in Minutes', desc: 'If it takes more than 5 minutes to deploy, we go back to the drawing board. Speed to value is non-negotiable.' },
  { icon: '🏛️', title: 'Sovereign by Default', desc: 'Enterprise customers own their AI. Their data, their agents, their infrastructure. We believe AI sovereignty is a right, not a premium.' },
  { icon: '🔗', title: 'Build to Integrate', desc: 'Our agents live inside your existing systems — CRM, ERP, HIS, SIP. AI that integrates is AI that gets used.' },
  { icon: '🌱', title: 'Always in Build Mode', desc: 'We are permanently in build mode. New agents are born every quarter. The lab never sleeps.' },
  { icon: '🤝', title: 'Human + AI Collaboration', desc: 'We are building the future of human and AI interaction — not replacing humans, but amplifying what humans can do.' },
]

const MILESTONES = [
  { year: '2023', event: 'ThinkMindLabs founded in Gurugram by enterprise veterans with 100+ years of industry experience.' },
  { year: '2024 Q1', event: 'OpenVoce.ai launched — world\'s fastest AI concierge agent. Zero to live in under 5 minutes.' },
  { year: '2024 Q3', event: 'Pravakta.ai launched — world\'s first AI Stack as a Service with 100+ pre-trained voice agents.' },
  { year: '2025 Q1', event: 'TalkBuy.ai goes live — conversational retail AI for eCommerce, D2C and quick commerce.' },
  { year: '2025 Q2', event: 'AgentForDoc.ai launched — clinical AI agent for hospitals and healthcare providers.' },
  { year: '2025+', event: 'TallyAgent, FinOps Agent, RecruitAgent in build. The lab never stops shipping.' },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About — ThinkMindLabs</title>
        <meta name="description" content="ThinkMindLabs — 5 AI-native humans, 100+ AI workers, and a mission to build deployment-ready AI products." />
      </Head>

      <div className="page-hero">
        <div className="container">
          <span className="section-label">About ThinkMindLabs</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(48px, 6vw, 80px)', marginBottom: 14 }}>
            An AI Lab.<br /><em>Born to Build.</em>
          </h1>
          <p className="section-body">
            We are a group of AI-native developers with generative minds, backed by founders with over 100 years of enterprise experience. Our mantra: Build with AI. Build for AI. Build to integrate with AI.
          </p>
        </div>
      </div>

      {/* Team stats */}
      <section className="section" style={{ paddingTop: 48, paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 48 }} className="about-grid-4">
            {TEAM.map(t => (
              <div key={t.name} style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px' }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{t.emoji}</div>
                <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>{t.name}</p>
                <p style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.role}</p>
                <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Building for the<br /><em>future of Human</em><br />and AI interaction.</h2>
              <p className="section-body" style={{ marginBottom: 16 }}>
                ThinkMindLabs is not a services company. We are not a consultancy. We are an AI Lab that ships products — each one solving one business problem, perfectly.
              </p>
              <p className="section-body" style={{ marginBottom: 28 }}>
                Our products are an outcome of obsessing over real enterprise pain points. We have seen these problems from the inside — as operators, as technology leaders, as builders. Now we are solving them with AI.
              </p>
              <Link href="/products" className="btn btn-orange">See Our Products →</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {MILESTONES.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 24, paddingBottom: 20, paddingTop: i === 0 ? 0 : 20, borderBottom: i < MILESTONES.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                  <div style={{ flexShrink: 0, minWidth: 64 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-orange)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{m.year}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,98,0,0.02), transparent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">How We Think</span>
            <h2 className="section-title">Core values of<br /><em>the lab</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="values-grid">
            {VALUES.map(v => (
              <div key={v.title} style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '22px 20px', transition: 'border-color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,98,0,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div style={{ fontSize: 26, marginBottom: 12 }}>{v.icon}</div>
                <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6, letterSpacing: '-0.01em' }}>{v.title}</p>
                <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mantra */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="quote-block">
            <p className="quote-text">
              Build with AI. Build for AI. Build to integrate with AI.
            </p>
            <div className="quote-author">
              <div className="quote-avatar">⚡</div>
              <div>
                <p className="quote-name">ThinkMindLabs Mantra</p>
                <p className="quote-role">5 humans · 100+ AI Workers · Gurugram, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Want to work<br />with <em>the lab?</em></h2>
          <p className="cta-subtitle">Whether you're an enterprise looking to deploy sovereign AI or a builder who wants to join the team — let's talk.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-orange" style={{ padding: '14px 32px', fontSize: 15 }}>Get in Touch →</Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 900px) {
          .about-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .about-grid-4 { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </>
  )
}