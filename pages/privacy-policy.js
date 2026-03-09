import Head from 'next/head'
import LegalPage from '../components/LegalPage'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — ThinkMindLabs</title>
        <meta name="description" content="ThinkMindLabs Privacy Policy — how we collect, use and protect your personal data." />
      </Head>

      <LegalPage
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information across our platform and services."
        lastUpdated="1 January 2025"
        effectiveDate="1 January 2025"
        currentHref="/privacy-policy"
      >
        <div className="legal-highlight">
          <p>ThinkMindLabs Private Limited is incorporated in India and operates globally. This policy complies with the <strong>Digital Personal Data Protection Act 2023 (DPDPA)</strong>, the <strong>EU General Data Protection Regulation (GDPR)</strong>, the <strong>UK GDPR</strong>, and applicable data protection laws in all jurisdictions where we operate.</p>
        </div>

        <h2>1. Who We Are</h2>
        <p>ThinkMindLabs Private Limited (<strong>"ThinkMindLabs"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>) is a technology company incorporated under the Companies Act 2013, with its registered office at Cyber City, Gurugram, Haryana 122002, India.</p>
        <p>We are the <strong>Data Fiduciary</strong> (under DPDPA) and <strong>Data Controller</strong> (under GDPR) for personal data processed through our website, APIs, platform products, and related services (collectively, the <strong>"Services"</strong>).</p>
        <p>For GDPR purposes, our EU representative can be contacted at: <a href="mailto:privacy@thinkmindlabs.com">privacy@thinkmindlabs.com</a></p>

        <h2>2. Data We Collect</h2>
        <h3>2.1 Information You Provide Directly</h3>
        <ul>
          <li><strong>Account data:</strong> Name, email address, password hash, company name, job title</li>
          <li><strong>Billing data:</strong> Payment method details (processed by PCI-DSS compliant processors; we do not store raw card numbers)</li>
          <li><strong>Communications:</strong> Messages sent via contact forms, support tickets, and email correspondence</li>
          <li><strong>Identity verification:</strong> Government-issued ID where required for enterprise KYC</li>
        </ul>

        <h3>2.2 Data Collected Automatically</h3>
        <ul>
          <li><strong>Usage data:</strong> API call logs, model inference requests, feature usage, session duration</li>
          <li><strong>Device and network data:</strong> IP address, browser type, operating system, device identifiers</li>
          <li><strong>Performance data:</strong> Response times, error rates, crash reports</li>
          <li><strong>Cookies and tracking:</strong> Session cookies, analytics identifiers (see our Cookie Policy)</li>
        </ul>

        <h3>2.3 Data from Third Parties</h3>
        <ul>
          <li>Single Sign-On providers (Google, GitHub, Microsoft) — name and email only</li>
          <li>Payment processors — transaction status and fraud signals</li>
          <li>Business verification services for enterprise onboarding</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <table>
          <thead>
            <tr><th>Purpose</th><th>Legal Basis (GDPR)</th><th>DPDPA Basis</th></tr>
          </thead>
          <tbody>
            <tr><td>Providing and operating the Services</td><td>Contract performance</td><td>Contractual necessity</td></tr>
            <tr><td>Billing and payment processing</td><td>Contract performance</td><td>Contractual necessity</td></tr>
            <tr><td>Security, fraud prevention, abuse detection</td><td>Legitimate interests</td><td>Legitimate uses</td></tr>
            <tr><td>Product improvement and AI model training*</td><td>Legitimate interests / Consent</td><td>Consent</td></tr>
            <tr><td>Compliance with legal obligations</td><td>Legal obligation</td><td>Legal obligation</td></tr>
            <tr><td>Marketing communications</td><td>Consent / Legitimate interests</td><td>Consent</td></tr>
            <tr><td>Analytics and reporting</td><td>Legitimate interests</td><td>Legitimate uses</td></tr>
          </tbody>
        </table>
        <p>* We never use customer API payloads to train our models without explicit opt-in consent. Enterprise customers on dedicated infrastructure are excluded by default.</p>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>We do not sell, rent, or trade your personal data. We share data only in the following circumstances:</p>
        <ul>
          <li><strong>Service providers:</strong> Cloud infrastructure (AWS, GCP), payment processors (Stripe, Razorpay), analytics tools, and customer support platforms — all bound by data processing agreements</li>
          <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, subject to confidentiality obligations</li>
          <li><strong>Legal requirements:</strong> When required by Indian law, court orders, or competent regulatory authorities; we notify you where legally permitted</li>
          <li><strong>With your consent:</strong> For any purpose you explicitly authorise</li>
        </ul>

        <h2>5. International Data Transfers</h2>
        <p>ThinkMindLabs operates infrastructure globally. When we transfer personal data outside India or the European Economic Area, we rely on:</p>
        <ul>
          <li>EU Standard Contractual Clauses (SCCs) for transfers to third countries</li>
          <li>Adequacy decisions where applicable</li>
          <li>Cross-Border Transfer mechanisms under the DPDPA once notified by the Indian government</li>
          <li>Binding Corporate Rules for intra-group transfers</li>
        </ul>
        <p>Enterprise customers may request a Data Processing Addendum (DPA) specifying transfer safeguards at <a href="mailto:legal@thinkmindlabs.com">legal@thinkmindlabs.com</a>.</p>

        <h2>6. Data Retention</h2>
        <ul>
          <li><strong>Account data:</strong> Duration of account plus 3 years after closure</li>
          <li><strong>API logs:</strong> 90 days rolling window; aggregated metrics retained for 2 years</li>
          <li><strong>Billing records:</strong> 7 years (statutory requirement under Indian tax law)</li>
          <li><strong>Support communications:</strong> 3 years from ticket closure</li>
          <li><strong>Marketing data:</strong> Until you withdraw consent or unsubscribe</li>
        </ul>

        <h2>7. Your Rights</h2>
        <h3>Under GDPR (EU / UK residents)</h3>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restriction of processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing based on legitimate interests</li>
          <li>Right to withdraw consent at any time without affecting prior lawful processing</li>
          <li>Right to lodge a complaint with your national supervisory authority</li>
        </ul>
        <h3>Under DPDPA (India residents)</h3>
        <ul>
          <li>Right to access information about processing activities</li>
          <li>Right to correction and erasure of personal data</li>
          <li>Right to grievance redressal within 30 days</li>
          <li>Right to nominate a representative in the event of death or incapacity</li>
          <li>Right to withdraw consent for non-essential processing</li>
        </ul>
        <p>To exercise any right, contact our Data Protection Officer at <a href="mailto:dpo@thinkmindlabs.com">dpo@thinkmindlabs.com</a>. We respond within <strong>30 days</strong> (extendable to 60 days for complex requests).</p>

        <h2>8. Security</h2>
        <p>We implement technical and organisational security measures including AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, annual penetration testing, and SOC 2 Type II audit compliance. See our <a href="/security">Security page</a> for full details.</p>

        <h2>9. Children's Privacy</h2>
        <p>Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, contact us immediately at <a href="mailto:privacy@thinkmindlabs.com">privacy@thinkmindlabs.com</a>.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this policy periodically. Material changes will be communicated via email (for registered users) and a prominent website notice at least <strong>30 days</strong> before the effective date. Continued use of the Services after the effective date constitutes acceptance of the updated policy.</p>

        <h2>11. Contact and Grievance Officer</h2>
        <ul>
          <li><strong>Data Protection Officer / Grievance Officer:</strong> <a href="mailto:dpo@thinkmindlabs.com">dpo@thinkmindlabs.com</a></li>
          <li><strong>General privacy queries:</strong> <a href="mailto:privacy@thinkmindlabs.com">privacy@thinkmindlabs.com</a></li>
          <li><strong>Legal queries:</strong> <a href="mailto:legal@thinkmindlabs.com">legal@thinkmindlabs.com</a></li>
          <li><strong>Postal address:</strong> ThinkMindLabs Private Limited, Cyber City, Gurugram, Haryana 122002, India</li>
        </ul>
        <p>EU/UK residents may also lodge a complaint with the relevant supervisory authority (e.g., the ICO in the UK, or your national DPA in the EU).</p>
      </LegalPage>
    </>
  )
}
