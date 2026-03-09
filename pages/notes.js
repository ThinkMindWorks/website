import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const POSTS = [
  {
    tag: 'Product',
    date: 'Mar 2025',
    title: 'Why we built OpenVoce.ai — and why it deploys in under 5 minutes',
    excerpt: 'Most AI chatbot builders take weeks to configure and months to tune. We believed that was wrong. Here is how we engineered OpenVoce to be live in under 5 minutes without compromising on quality.',
    featured: true,
    readTime: '6 min',
  },
  {
    tag: 'Engineering',
    date: 'Feb 2025',
    title: 'Building sovereign AI: why your enterprise data must never leave your infrastructure',
    excerpt: 'As AI adoption accelerates, data sovereignty is becoming the defining enterprise concern. We explain our architecture and why Pravakta.ai was designed from day one to run entirely on customer-owned infrastructure.',
    readTime: '8 min',
  },
  {
    tag: 'Product',
    date: 'Feb 2025',
    title: 'Pravakta.ai: how we trained 100+ voice agents before launch',
    excerpt: 'Pre-trained agents are our moat. Before Pravakta.ai shipped, we trained over 100 domain-specific voice agents across healthcare, retail, banking and customer service. This is how.',
    readTime: '7 min',
  },
  {
    tag: 'Thinking',
    date: 'Jan 2025',
    title: 'The future of retail is conversational — TalkBuy and the end of the search bar',
    excerpt: 'E-commerce search is broken. Customers know what they want but can\'t always describe it in keywords. Conversational AI changes this entirely. The TalkBuy thesis.',
    readTime: '5 min',
  },
  {
    tag: 'Engineering',
    date: 'Jan 2025',
    title: 'WebRTC vs SIP for AI voice agents: what we learned building Pravakta',
    excerpt: 'We support both WebRTC and SIP in Pravakta.ai. Each has tradeoffs for enterprise deployments. After months of production data, here is what we recommend and why.',
    readTime: '9 min',
  },
  {
    tag: 'Healthcare',
    date: 'Dec 2024',
    title: 'AgentForDoc.ai: building a clinical AI agent that listens like a human coordinator',
    excerpt: 'Clinical documentation is one of the most expensive and error-prone processes in healthcare. We built an AI agent that listens, infers and summarises — in real time, inside your HIS.',
    readTime: '10 min',
  },
  {
    tag: 'Thinking',
    date: 'Nov 2024',
    title: 'Build with AI, Build for AI, Build to integrate — the ThinkMindLabs mantra',
    excerpt: 'Our three-word engineering philosophy sounds simple. But it shapes every product decision we make — from architecture to UX to pricing. Here is what it actually means in practice.',
    readTime: '4 min',
  },
  {
    tag: 'Engineering',
    date: 'Oct 2024',
    title: 'How we use AI Workers to ship products as a team of 5',
    excerpt: 'We are 5 humans. But we operate like a team of 100+. Our AI Workers handle code generation, testing, content, QA and deployment pipelines. This is our actual workflow.',
    readTime: '7 min',
  },
]

const TAGS = ['All', 'Engineering', 'Product', 'Healthcare', 'Thinking']

export default function Notes() {
  const [activeTag, setActiveTag] = useState('All')
  const filtered = activeTag === 'All' ? POSTS : POSTS.filter(p => p.tag === activeTag)
  const featured = filtered.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <>
      <Head>
        <title>Notes — ThinkMindLabs</title>
        <meta name="description" content="Engineering notes, product thinking and AI insights from the ThinkMindLabs lab." />
      </Head>

      <div className="page-hero">
        <div className="container">
          <span className="section-label">Lab Notes</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(48px, 6vw, 80px)', marginBottom: 12 }}>
            Thinking out<br /><em>loud.</em>
          </h1>
          <p className="section-body">
            Engineering notes, product decisions, and AI insights from the ThinkMindLabs team. We write about what we build and why we build it.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container">
          {/* Tag filters */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            {TAGS.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)} style={{ padding: '8px 18px', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: '1px solid', transition: 'all 0.2s', borderColor: activeTag === tag ? 'var(--accent-orange)' : 'var(--color-border)', background: activeTag === tag ? 'rgba(255,98,0,0.1)' : 'transparent', color: activeTag === tag ? 'var(--accent-orange)' : 'var(--color-text-secondary)' }}>
                {tag}
              </button>
            ))}
          </div>

          {/* Featured */}
          {featured && (
            <div style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '14px 18px', marginBottom: 18, cursor: 'pointer', transition: 'border-color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,98,0,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span className="card-tag" style={{ color: 'var(--accent-orange)', background: 'rgba(255,98,0,0.1)', margin: 0 }}>{featured.tag}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Featured</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>{featured.date} · {featured.readTime} read</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.15 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 680 }}>{featured.excerpt}</p>
              <div style={{ marginTop: 24 }}>
                <span style={{ fontSize: 13, color: 'var(--accent-orange)', fontWeight: 600 }}>Read post →</span>
              </div>
            </div>
          )}

          {/* Post grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="notes-grid">
            {rest.map(post => (
              <div key={post.title} style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '18px 20px', cursor: 'pointer', transition: 'border-color 0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220 }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,98,0,0.2)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                    <span className="card-tag" style={{ color: 'var(--accent-orange)', background: 'rgba(255,98,0,0.1)', margin: 0, fontSize: 11 }}>{post.tag}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-muted)' }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: 12, color: 'var(--color-text-primary)' }}>{post.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{post.excerpt}</p>
                </div>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: 'var(--accent-orange)', fontWeight: 600 }}>Read →</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-muted)' }}>{post.readTime} read</span>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ marginTop: 80, background: 'linear-gradient(135deg, rgba(255,98,0,0.06), transparent)', border: '1px solid rgba(255,98,0,0.15)', borderRadius: 'var(--radius-xl)', padding: '16px', textAlign: 'center' }}>
            <span className="section-label">Stay in the loop</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em', marginBottom: 12 }}>Lab notes in your inbox</h3>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginBottom: 18, maxWidth: 480, margin: '0 auto 32px' }}>
              We write when we build something interesting. No spam, no newsletters for the sake of it.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="email" placeholder="you@company.com" className="form-input" style={{ flex: 1, minWidth: 200 }} />
              <button className="btn btn-orange" style={{ padding: '12px 24px', whiteSpace: 'nowrap' }}>Subscribe →</button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .notes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
