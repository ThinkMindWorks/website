import Link from 'next/link'

const LEGAL_PAGES = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/security', label: 'Security' },
]

export default function LegalPage({ title, subtitle, lastUpdated, effectiveDate, children, currentHref }) {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero" style={{ paddingBottom: 48 }}>
        <div className="container">
          <span className="section-label">Legal</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(40px, 5vw, 68px)', marginBottom: 16 }}>
            {title}
          </h1>
          {subtitle && (
            <p className="section-body" style={{ marginBottom: 20 }}>{subtitle}</p>
          )}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 8 }}>
            {lastUpdated && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>
                Last updated: {lastUpdated}
              </span>
            )}
            {effectiveDate && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>
                Effective: {effectiveDate}
              </span>
            )}
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 64, alignItems: 'flex-start' }}>

            {/* Sidebar nav */}
            <div style={{ position: 'sticky', top: 96 }}>
              <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 16 }}>
                Legal Documents
              </p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {LEGAL_PAGES.map(page => (
                  <Link
                    key={page.href}
                    href={page.href}
                    style={{
                      display: 'block',
                      padding: '9px 14px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 14,
                      fontWeight: currentHref === page.href ? 600 : 400,
                      color: currentHref === page.href ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      background: currentHref === page.href ? 'rgba(255,98,0,0.08)' : 'transparent',
                      borderLeft: currentHref === page.href ? '2px solid var(--accent-orange)' : '2px solid transparent',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                  >
                    {page.label}
                  </Link>
                ))}
              </nav>

              <div style={{ marginTop: 40, padding: '20px', background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 12 }}>
                  Questions about our legal documents?
                </p>
                <a href="mailto:legal@thinkmindlabs.com" style={{ fontSize: 13, color: 'var(--accent-orange)', fontWeight: 600 }}>
                  legal@thinkmindlabs.com
                </a>
              </div>
            </div>

            {/* Content */}
            <div style={{ minWidth: 0 }}>
              <div className="legal-content">
                {children}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .legal-content h2 {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.5vw, 30px);
          letter-spacing: -0.02em;
          color: var(--color-text-primary);
          margin: 48px 0 16px;
          padding-top: 48px;
          border-top: 1px solid var(--color-border);
          line-height: 1.1;
        }
        .legal-content h2:first-child {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }
        .legal-content h3 {
          font-size: 17px;
          font-weight: 700;
          color: var(--color-text-primary);
          margin: 28px 0 10px;
          letter-spacing: -0.01em;
        }
        .legal-content p {
          font-size: 15px;
          color: rgba(255,255,255,0.62);
          line-height: 1.8;
          margin: 0 0 16px;
        }
        .legal-content ul, .legal-content ol {
          margin: 12px 0 20px 0;
          padding-left: 0;
          list-style: none;
        }
        .legal-content ul li, .legal-content ol li {
          font-size: 15px;
          color: rgba(255,255,255,0.62);
          line-height: 1.75;
          padding: 6px 0 6px 24px;
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .legal-content ul li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-orange);
          font-size: 13px;
        }
        .legal-content ol {
          counter-reset: legal-counter;
        }
        .legal-content ol li {
          counter-increment: legal-counter;
        }
        .legal-content ol li::before {
          content: counter(legal-counter) '.';
          position: absolute;
          left: 0;
          color: var(--accent-orange);
          font-size: 13px;
          font-family: var(--font-mono);
          font-weight: 600;
        }
        .legal-content a {
          color: var(--accent-orange);
          text-decoration: none;
        }
        .legal-content a:hover {
          text-decoration: underline;
        }
        .legal-content strong {
          color: var(--color-text-primary);
          font-weight: 600;
        }
        .legal-content .legal-highlight {
          background: rgba(255,98,0,0.06);
          border: 1px solid rgba(255,98,0,0.15);
          border-left: 3px solid var(--accent-orange);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin: 20px 0;
        }
        .legal-content .legal-highlight p {
          margin: 0;
          color: rgba(255,255,255,0.75);
        }
        .legal-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 14px;
        }
        .legal-content th {
          text-align: left;
          padding: 10px 16px;
          background: var(--color-bg-elevated);
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--color-border);
        }
        .legal-content td {
          padding: 12px 16px;
          color: rgba(255,255,255,0.6);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          line-height: 1.6;
          vertical-align: top;
        }
        @media (max-width: 768px) {
          .legal-content h2 {
            margin-top: 36px;
            padding-top: 36px;
          }
        }
        @media (max-width: 900px) {
          .legal-sidebar-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
