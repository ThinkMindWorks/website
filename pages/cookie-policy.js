import Head from 'next/head'
import LegalPage from '../components/LegalPage'

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Cookie Policy — ThinkMindLabs</title>
        <meta name="description" content="ThinkMindLabs Cookie Policy — how we use cookies and similar technologies on our platform." />
      </Head>

      <LegalPage
        title="Cookie Policy"
        subtitle="How ThinkMindLabs uses cookies and similar tracking technologies, and how you can control them."
        lastUpdated="1 January 2025"
        effectiveDate="1 January 2025"
        currentHref="/cookie-policy"
      >
        <div className="legal-highlight">
          <p>This Cookie Policy applies to all ThinkMindLabs websites, web applications, and developer portals. By using our Services, you consent to our use of cookies as described in this policy. You can withdraw consent at any time using the controls described in Section 6.</p>
        </div>

        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide a personalised experience, and give website owners analytics information.</p>
        <p>We also use similar technologies including:</p>
        <ul>
          <li><strong>Local storage:</strong> Browser-based storage for session preferences and UI state</li>
          <li><strong>Session storage:</strong> Temporary storage cleared when you close your browser</li>
          <li><strong>Pixels / web beacons:</strong> Small images used to track email open rates and ad conversions</li>
          <li><strong>SDK identifiers:</strong> Unique identifiers in our API SDKs for usage attribution and debugging</li>
        </ul>

        <h2>2. Categories of Cookies We Use</h2>
        <table>
          <thead>
            <tr><th>Category</th><th>Purpose</th><th>Can you opt out?</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Strictly Necessary</strong></td><td>Essential for the website and Services to function. Includes authentication tokens, CSRF protection, load balancer routing, and security cookies.</td><td>No — required for operation</td></tr>
            <tr><td><strong>Functional</strong></td><td>Remember your preferences such as theme, language, and region settings to personalise your experience.</td><td>Yes, via cookie banner</td></tr>
            <tr><td><strong>Analytics</strong></td><td>Understand how visitors interact with our website and platform to improve performance. We use privacy-preserving, cookieless analytics where possible.</td><td>Yes, via cookie banner</td></tr>
            <tr><td><strong>Marketing</strong></td><td>Track the effectiveness of our marketing campaigns and personalise advertising on third-party platforms. Only used on public marketing pages, not within the platform.</td><td>Yes, via cookie banner</td></tr>
          </tbody>
        </table>

        <h2>3. Specific Cookies We Set</h2>
        <table>
          <thead>
            <tr><th>Cookie Name</th><th>Category</th><th>Duration</th><th>Purpose</th></tr>
          </thead>
          <tbody>
            <tr><td><code>tml_session</code></td><td>Strictly Necessary</td><td>Session</td><td>Authenticated user session token</td></tr>
            <tr><td><code>tml_csrf</code></td><td>Strictly Necessary</td><td>Session</td><td>Cross-site request forgery protection</td></tr>
            <tr><td><code>tml_pref</code></td><td>Functional</td><td>1 year</td><td>User interface preferences (theme, locale)</td></tr>
            <tr><td><code>tml_consent</code></td><td>Strictly Necessary</td><td>1 year</td><td>Records your cookie consent choices</td></tr>
            <tr><td><code>_tml_analytics</code></td><td>Analytics</td><td>13 months</td><td>Anonymous visitor analytics identifier</td></tr>
            <tr><td><code>_ga</code></td><td>Analytics</td><td>13 months</td><td>Google Analytics visitor identifier (if enabled)</td></tr>
            <tr><td><code>_fbp</code></td><td>Marketing</td><td>3 months</td><td>Facebook Pixel conversion tracking</td></tr>
            <tr><td><code>li_fat_id</code></td><td>Marketing</td><td>30 days</td><td>LinkedIn conversion tracking</td></tr>
          </tbody>
        </table>

        <h2>4. Third-Party Cookies</h2>
        <p>Some cookies are set by third-party services that appear on our pages. We do not control these cookies. Key third parties include:</p>
        <ul>
          <li><strong>Google Analytics / Google Tag Manager:</strong> Aggregated website analytics. Data is anonymised and subject to Google's privacy policy</li>
          <li><strong>Stripe / Razorpay:</strong> Payment processing fraud detection cookies set during checkout flows</li>
          <li><strong>Intercom / Crisp:</strong> Customer support chat widget (only loaded when you interact with support)</li>
          <li><strong>YouTube / Vimeo:</strong> If you play embedded video content, these services may set cookies</li>
        </ul>

        <h2>5. Cookies and the API Platform</h2>
        <p>The ThinkMindLabs API itself does not use cookies — API authentication uses bearer tokens transmitted in HTTP headers. Cookies described in this policy apply only to our web-based interfaces (dashboard, documentation portal, marketing website).</p>
        <p>API SDK identifiers (used for debugging and usage attribution) are not cookies; they are transmitted as HTTP headers and are documented in our developer documentation.</p>

        <h2>6. Your Choices and Controls</h2>
        <h3>6.1 Cookie Banner</h3>
        <p>On your first visit, we display a cookie consent banner where you can accept all cookies, reject non-essential cookies, or customise your preferences by category.</p>

        <h3>6.2 Browser Settings</h3>
        <p>Most browsers allow you to refuse or delete cookies. Note that disabling strictly necessary cookies will prevent the Services from functioning properly. Browser-specific guides:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies" target="_blank" rel="noopener">Microsoft Edge</a></li>
        </ul>

        <h3>6.3 Opt-Out Tools</h3>
        <ul>
          <li><strong>Google Analytics opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">tools.google.com/dlpage/gaoptout</a></li>
          <li><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener">optout.networkadvertising.org</a></li>
          <li><strong>Your Online Choices (EU):</strong> <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener">youronlinechoices.com</a></li>
        </ul>

        <h2>7. Legal Basis for Cookie Use</h2>
        <ul>
          <li><strong>Strictly necessary cookies:</strong> Legitimate interests (no consent required under ePrivacy Directive / IT Act 2000)</li>
          <li><strong>Functional, analytics, marketing cookies:</strong> Your consent, obtained via the cookie banner</li>
          <li><strong>For EU/UK users:</strong> We comply with the ePrivacy Directive (Cookie Law) and GDPR consent requirements</li>
          <li><strong>For Indian users:</strong> We comply with the IT Act 2000 and DPDPA 2023</li>
        </ul>

        <h2>8. Transfers of Cookie Data</h2>
        <p>Some third-party cookies (e.g. Google Analytics) result in data being processed in the United States or other countries. Where applicable, we ensure appropriate safeguards are in place (see our Privacy Policy, Section 5).</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this Cookie Policy to reflect changes in technology, law, or our practices. We will notify you of material changes via our website. The "Last Updated" date at the top indicates when this policy was last revised.</p>

        <h2>10. Contact</h2>
        <p>For questions about our use of cookies, contact us at:</p>
        <ul>
          <li><strong>Privacy team:</strong> <a href="mailto:privacy@thinkmindlabs.com">privacy@thinkmindlabs.com</a></li>
          <li><strong>Address:</strong> ThinkMindLabs Private Limited, Cyber City, Gurugram, Haryana 122002, India</li>
        </ul>
      </LegalPage>
    </>
  )
}
