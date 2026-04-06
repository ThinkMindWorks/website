import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const HERO_LINES = [
  { top: 'Build with AI.', mid: 'Build for AI.', bot: 'Build to integrate.' },
  { top: 'AI Workers.', mid: 'Human Vision.', bot: 'Real Results.' },
  { top: 'Sovereign AI.', mid: 'Your Stack.', bot: 'Your Control.' },
  { top: 'Deploy in', mid: 'Minutes.', bot: 'Not Months.' },
  { top: 'Born to perform.', mid: 'Built for', bot: 'Enterprise.' },
]

const PRODUCTS = [
  {
    year: '2024',
    category: 'Voice & Text AI Agent · SaaS',
    title: 'OpenVoce.ai',
    bg: '#ff6200',
    textColor: '#000000',
    image: '/openvocheroban1.png',
    url: 'https://openvoce.ai',
  },
  {
    year: '2024',
    category: 'Enterprise AI Voice Stack · PaaS',
    title: 'Pravakta.ai',
    bg: '#0a0a1a',
    textColor: '#7c6fff',
    image: '/pravhero1.png',
    url: 'https://pravakta.ai',
  },
  {
    year: '2025',
    category: 'Retail Conversational AI · PaaS',
    title: 'TalkBuy.ai',
    bg: '#00261a',
    textColor: '#00e5a0',
    image: 'https://framerusercontent.com/images/v2Cxh5gAzf3y5i5rvV7stpdreY.jpg?width=800',
    url: 'https://talkbuy.ai',
  },
  {
    year: '2025',
    category: 'Clinical AI Agent · Enterprise',
    title: 'AgentForDoc.ai',
    bg: '#001a2e',
    textColor: '#38bdf8',
    image: 'https://framerusercontent.com/images/B4iHZ4n8YkDGgjtcjPiGagMwMzA.jpg?width=800',
    url: 'https://agentfordoc.ai',
  },
]

const MARQUEE_ITEMS = [
  'OpenVoce.ai', 'Pravakta.ai', 'TalkBuy.ai', 'AgentForDoc.ai',
  'Voice AI', 'Generative AI', 'Sovereign AI Stack', 'AI Native',
  'OpenVoce.ai', 'Pravakta.ai', 'TalkBuy.ai', 'AgentForDoc.ai',
  'Voice AI', 'Generative AI', 'Sovereign AI Stack', 'AI Native',
]

const PILLARS = [
  { num: '01', icon: '🎙️', title: 'Voice-First AI', desc: 'Every product we ship starts with voice as the primary interface. We believe the future of human-AI interaction is spoken, not typed.' },
  { num: '02', icon: '⚡', title: 'Deploy in Minutes', desc: 'Our agents are born, trained and ready. From zero to live AI agent in under 5 minutes. No ML expertise needed.' },
  { num: '03', icon: '🏛️', title: 'Sovereign by Design', desc: 'Your data, your infrastructure, your AI. Pravakta\'s enterprise stack runs entirely on infrastructure you own and control.' },
  { num: '04', icon: '🔗', title: 'Integrates Everywhere', desc: 'WebRTC, SIP, CRM, ERP, HIS — our agents plug into your existing stack. Build with AI, build for AI, build to integrate.' },
]

function FolderCard({ product, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index
  const isDark = product.textColor === '#000000'
  const metaColor = isDark ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.4)'
  const dividerColor = isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)'

  return (
    <div
      onClick={() => setOpenIndex(isOpen ? null : index)}
      style={{
        background: product.bg,
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: isOpen ? '0 40px 100px rgba(0,0,0,0.5)' : '0 2px 16px rgba(0,0,0,0.2)',
        transition: 'box-shadow 0.45s cubic-bezier(0.23,1,0.32,1)',
        userSelect: 'none',
      }}
    >
      <div style={{ padding: '10px 18px', display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${dividerColor}` }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: metaColor, letterSpacing: '0.04em' }}>{product.year}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: metaColor, letterSpacing: '0.04em' }}>{product.category}</span>
      </div>
      <div style={{ padding: '22px 28px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-product)', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em', fontWeight: 800, color: product.textColor, lineHeight: 1, margin: 0 }}>
          {product.title}
        </h3>
        <div style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)', transition: 'transform 0.45s cubic-bezier(0.23,1,0.32,1)', flexShrink: 0 }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M7 23L23 7M23 7H9M23 7V21" stroke={product.textColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div style={{ maxHeight: isOpen ? '500px' : '0px', overflow: 'hidden', transition: 'max-height 0.6s cubic-bezier(0.23,1,0.32,1)' }}>
        <div style={{ position: 'relative' }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block', transform: isOpen ? 'scale(1)' : 'scale(1.06)', transition: 'transform 0.65s cubic-bezier(0.23,1,0.32,1)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: `linear-gradient(to bottom, transparent, ${product.bg})`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 24, left: 28, right: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateY(0)' : 'translateY(14px)', transition: 'opacity 0.3s ease 0.25s, transform 0.3s ease 0.25s' }}>
            <a href={product.url} target="_blank" rel="noopener" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px', borderRadius: 999, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(14px)', color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)' }}>
              Visit {product.title} →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const [lineIndex, setLineIndex] = useState(0)
  const [phase, setPhase] = useState('visible')
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    const VISIBLE = 3200, EXIT = 500, ENTER = 500
    const cycle = () => {
      setPhase('exit')
      setTimeout(() => { setLineIndex(i => (i + 1) % HERO_LINES.length); setPhase('enter'); setTimeout(() => setPhase('visible'), ENTER) }, EXIT)
    }
    const t = setInterval(cycle, VISIBLE + EXIT + ENTER)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mouse-x', `${((e.clientX - r.left) / r.width - 0.5) * 30}px`)
      el.style.setProperty('--mouse-y', `${((e.clientY - r.top) / r.height - 0.5) * 30}px`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  const current = HERO_LINES[lineIndex]

  return (
    <>
      <Head>
        <title>ThinkMindLabs — AI Lab. Born to Build.</title>
        <meta name="description" content="ThinkMindLabs is an AI Lab building deployment-ready AI products. OpenVoce.ai, Pravakta.ai, TalkBuy.ai, AgentForDoc.ai — AI that works from minute one." />
      </Head>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-bg-gradient" />
          <div className="hero-bg-grid" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-in">
              <span className="hero-badge-dot" />
              AI Lab · 5 Humans · 100+ AI Workers
            </div>
            <h1 className="hero-title animate-in delay-1" style={{ transition: 'opacity 0.45s cubic-bezier(0.23,1,0.32,1), transform 0.45s cubic-bezier(0.23,1,0.32,1)', opacity: phase === 'exit' ? 0 : 1, transform: phase === 'exit' ? 'translateY(-24px) scale(0.97)' : phase === 'enter' ? 'translateY(24px) scale(0.97)' : 'translateY(0) scale(1)' }}>
              {current.top}<br /><em>{current.mid}</em><br />{current.bot}
            </h1>
            <p className="hero-subtitle animate-in delay-2">
              We are an AI-native lab of generative minds building deployment-ready products that solve one business problem — perfectly. SaaS, PaaS, and sovereign enterprise AI stacks.
            </p>
            <div className="hero-actions animate-in delay-3">
              <Link href="/products" className="btn btn-orange">Explore Our Products →</Link>
              <Link href="/about" className="btn btn-ghost" style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'var(--color-text-primary)' }}>Meet the Lab</Link>
            </div>
            <div className="hero-stats animate-in delay-4">
              {[
                { value: '4', label: 'Live Products' },
                { value: '5 min', label: 'To Deploy' },
                { value: '100+', label: 'AI Workers' },
                { value: '3', label: 'Delivery Models' },
              ].map((s, i) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
                  {i > 0 && <div className="hero-stat-divider" />}
                  <div className="hero-stat">
                    <span className="hero-stat-value">{s.value}</span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <div key={i} className="marquee-item"><span className="marquee-dot" />{item}</div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
            <div>
              <span className="section-label">Our Products</span>
              <h2 className="section-title">One problem.<br /><em>Solved perfectly.</em></h2>
            </div>
            <Link href="/products" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', flexShrink: 0, color: 'var(--color-text-secondary)' }}>View all →</Link>
          </div>
          <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: 14, letterSpacing: '0.05em' }}>↓ CLICK ANY CARD TO EXPAND</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRODUCTS.map((product, i) => (
              <FolderCard key={product.title} product={product} index={i} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,98,0,0.02), transparent)' }}>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="section-label">How We Build</span>
              <h2 className="section-title">Generative minds.<br /><em>Deployment-ready</em><br />products.</h2>
              <p className="section-body" style={{ marginBottom: 14 }}>
                Fresh out of college, AI-native, and obsessed with shipping. Our mantra is simple — Build with AI, Build for AI, Build to integrate with AI. Every product solves one problem, perfectly, for businesses of all sizes.
              </p>
              <Link href="/about" className="btn btn-orange">Meet the Team →</Link>
            </div>
            <ul className="feature-list">
              {PILLARS.map(f => (
                <li key={f.num} className="feature-item">
                  <span className="feature-num">{f.num}</span>
                  <div className="feature-content">
                    <p className="feature-title">{f.title}</p>
                    <p className="feature-desc">{f.desc}</p>
                  </div>
                  <div className="feature-icon">{f.icon}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="quote-block">
            <p className="quote-text">
              We are not a services company. We are not a consultancy. We are an AI Lab that ships products. Every product we build solves one problem, perfectly — and we put it to work in your business from day one.
            </p>
            <div className="quote-author">
              <div className="quote-avatar">🧠</div>
              <div>
                <p className="quote-name">ThinkMindLabs Founders</p>
                <p className="quote-role">100+ years of combined enterprise experience · Gurugram, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to deploy<br />your <em>AI Stack?</em></h2>
          <p className="cta-subtitle">Talk to our team. An AI agent is waiting to answer your questions right now.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-orange" style={{ padding: '14px 32px', fontSize: 15 }}>Talk to Us →</Link>
            <a href="https://pravakta.ai" target="_blank" rel="noopener" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)', padding: '14px 32px', fontSize: 15, color: 'var(--color-text-primary)' }}>
              Try Pravakta.ai Voice Agent
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
