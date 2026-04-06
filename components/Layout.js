import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [router.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/ai-stack', label: 'AI Stack' },
    { href: '/about', label: 'About' },
    { href: '/notes', label: 'Notes' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <div className="nav-logo-mark">T</div>
              ThinkMindLabs
            </Link>

            <ul className="nav-links">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive(link.href) ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className="nav-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} style={{ zIndex: 10000 }}>
        <button
          className="mobile-menu-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          style={{ zIndex: 10001, position: 'absolute', top: 20, right: 20 }}
        >
          ✕
        </button>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                <div className="nav-logo-mark">T</div>
                ThinkMindLabs
              </Link>
              <p>
                Building deployment-ready AI products. SaaS, PaaS, and sovereign enterprise AI stacks. Build with AI. Build for AI. Build to integrate.
              </p>
            </div>

            <div>
              <p className="footer-col-title">Products</p>
              <ul className="footer-links">
                <li><a href="https://openvoce.ai" target="_blank" rel="noopener">OpenVoce.ai</a></li>
                <li><a href="https://pravakta.ai" target="_blank" rel="noopener">Pravakta.ai</a></li>
                <li><a href="https://talkbuy.ai" target="_blank" rel="noopener">TalkBuy.ai</a></li>
                <li><a href="https://agentfordoc.ai" target="_blank" rel="noopener">AgentForDoc.ai</a></li>
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Company</p>
              <ul className="footer-links">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/notes">Notes</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/contact">Careers</Link></li>
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Legal</p>
              <ul className="footer-links">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service">Terms of Service</Link></li>
                <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                <li><Link href="/security">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} ThinkMindLabs · thinkmindlabs.com
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" title="X (Twitter)">𝕏</a>
              <a href="#" className="footer-social-btn" title="LinkedIn">in</a>
              <a href="#" className="footer-social-btn" title="GitHub">⌥</a>
              <a href="#" className="footer-social-btn" title="Discord">◈</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}