import Head from 'next/head'
import Link from 'next/link'

const SOVEREIGN_STACK = [
  {
    layer: '01',
    title: 'Voice & Language Foundation',
    color: '#ff6200',
    desc: 'The base of every ThinkMindLabs product. State-of-the-art speech recognition, text-to-speech, and large language model inference optimised for low-latency, production-grade deployments.',
    tools: ['Whisper', 'ElevenLabs', 'OpenAI GPT-4o', 'Llama 3', 'Mistral', 'Gemini', 'Custom TTS', 'Multi-lingual NLU'],
  },
  {
    layer: '02',
    title: 'Agent Runtime & Orchestration',
    color: '#7c6fff',
    desc: 'Pre-trained agents that are born, orchestrated and put to production on your infrastructure. Multi-agent collaboration, tool use, memory, and context management at enterprise scale.',
    tools: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Custom Agent Runtime', 'Tool Registry', 'Memory Store', 'Context Manager'],
  },
  {
    layer: '03',
    title: 'Voice Infrastructure',
    color: '#00e5a0',
    desc: 'Enterprise-grade voice connectivity. WebRTC for browser, QR Codes for instant access, SIP for physical phone lines. Pravakta.ai is built on this layer — all running on your infrastructure.',
    tools: ['WebRTC', 'SIP / PSTN', 'QR Code Trigger', 'LiveKit', 'FreeSWITCH', 'Twilio (optional)', 'Janus Gateway', 'STUN/TURN'],
  },
  {
    layer: '04',
    title: 'Knowledge & Retrieval',
    color: '#38bdf8',
    desc: 'Your agents are only as good as what they know. We build retrieval pipelines that connect agents to your product catalogs, patient records, enterprise knowledge bases and live data.',
    tools: ['Pinecone', 'Qdrant', 'PGVector', 'LlamaIndex', 'Elasticsearch', 'RAG Pipelines', 'Live Data Connectors', 'Document Parsers'],
  },
  {
    layer: '05',
    title: 'Integration & Delivery',
    color: '#ffdd00',
    desc: 'Built to integrate. Our agents connect to your existing enterprise systems via standard APIs and protocols — CRM, ERP, HIS, communication platforms and beyond.',
    tools: ['REST / GraphQL', 'Webhook', 'Salesforce', 'SAP', 'HL7 / FHIR (Healthcare)', 'Shopify / WooCommerce', 'WhatsApp / Slack', 'Custom ERP'],
  },
]

const PRINCIPLES = [
  { icon: '🏛️', title: 'Sovereignty First', desc: 'Your AI runs on your infrastructure. Models, agents, data, interactions — all owned, controlled and managed by you.' },
  { icon: '⚡', title: 'Speed to Production', desc: 'Our stack is pre-configured. Agent deployment in minutes, not months. No MLOps expertise required.' },
  { icon: '🧠', title: 'Pre-trained, Not Blank', desc: 'Our agents arrive with domain knowledge — 100+ pre-trained voice agents ready for healthcare, retail, enterprise and more.' },
  { icon: '🔒', title: 'Data Never Leaves', desc: 'All learnings, interactions and data exchanges reside on your infrastructure — cloud or on-premise. Zero data leakage.' },
]

export default function AIStack() {
  return (
    <>
      <Head>
        <title>AI Stack — ThinkMindLabs</title>
        <meta name="description" content="ThinkMindLabs sovereign AI stack — voice infrastructure, agent runtime, LLM orchestration and enterprise integrations built for your infrastructure." />
      </Head>

      <div className="page-hero">
        <div className="container">
          <span className="section-label">The AI Stack</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(48px, 6vw, 80px)', marginBottom: 12 }}>
            Your stack.<br /><em>Your agents.</em><br />Your AI.
          </h1>
          <p className="section-body">
            ThinkMindLabs builds and deploys sovereign AI stacks for enterprise. Every component runs on infrastructure you own and control. Your data never leaves your environment.
          </p>
        </div>
      </div>

      {/* Principles */}
      <section className="section" style={{ paddingTop: 28, paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }} className="principles-grid">
            {PRINCIPLES.map(p => (
              <div key={p.title} style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '16px 18px' }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</div>
                <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 8, letterSpacing: '-0.01em' }}>{p.title}</p>
                <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack layers */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <span className="section-label">Stack Architecture</span>
            <h2 className="section-title">Five layers.<br /><em>Complete coverage.</em></h2>
            <p className="section-body" style={{ maxWidth: 580, margin: '0 auto' }}>
              From voice to data to integrations — the ThinkMindLabs stack covers every layer of a production enterprise AI deployment.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {SOVEREIGN_STACK.map((layer, i) => (
              <div key={layer.layer} style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '13px 18px', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = layer.color + '44'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: layer.color, letterSpacing: '0.08em' }}>LAYER {layer.layer}</span>
                      <div style={{ height: 1, width: 32, background: layer.color + '44' }} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 30px)', letterSpacing: '-0.02em', color: 'var(--color-text-primary)', marginBottom: 12 }}>{layer.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 480 }}>{layer.desc}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 400 }}>
                    {layer.tools.map(tool => (
                      <span key={tool} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, padding: '5px 12px', borderRadius: 999, background: layer.color + '12', border: `1px solid ${layer.color}30`, color: layer.color, letterSpacing: '0.02em' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pravakta callout */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0a0714, #111)', border: '1px solid rgba(124,111,255,0.2)', borderRadius: 'var(--radius-xl)', padding: '36px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <span className="section-label" style={{ color: '#7c6fff' }}>Flagship Enterprise Product</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.03em', marginBottom: 16 }}>Pravakta.ai —<br /><em style={{ color: '#7c6fff' }}>AI Stack as a Service</em></h2>
              <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 480, marginBottom: 0 }}>
                The world's first AI Stack as a Service. We set up your complete sovereign AI Voice stack — models, agents, analytics, integrations — running entirely on your infrastructure. You own everything.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
              <a href="https://pravakta.ai" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 999, background: '#7c6fff', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Talk to a Voice Agent →
              </a>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 28px', borderRadius: 999, background: 'rgba(255,255,255,0.06)', color: 'var(--color-text-primary)', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(124,111,255,0.2)' }}>
                Request Enterprise Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .principles-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .principles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
