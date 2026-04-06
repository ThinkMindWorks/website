import Head from 'next/head'
import LegalPage from '../components/LegalPage'

export default function Security() {
  return (
    <>
      <Head>
        <title>Security — ThinkMindLabs</title>
        <meta name="description" content="ThinkMindLabs security practices, certifications, vulnerability disclosure, and enterprise trust." />
      </Head>

      <LegalPage
        title="Security"
        subtitle="Our commitment to protecting your data and infrastructure through enterprise-grade security practices, certifications, and transparency."
        lastUpdated="1 January 2025"
        currentHref="/security"
      >
        <div className="legal-highlight">
          <p>Security is not a checkbox at ThinkMindLabs — it is a core engineering discipline embedded into every layer of our platform. We maintain a dedicated security team, undergo independent third-party audits, and follow a continuous improvement programme aligned with ISO 27001 and SOC 2 frameworks.</p>
        </div>

        <h2>1. Security Certifications and Compliance</h2>
        <table>
          <thead>
            <tr><th>Standard / Framework</th><th>Status</th><th>Scope</th></tr>
          </thead>
          <tbody>
            <tr><td>SOC 2 Type II</td><td>Certified (annual audit)</td><td>Platform, API, infrastructure</td></tr>
            <tr><td>ISO/IEC 27001:2022</td><td>In progress (target Q3 2025)</td><td>Information security management</td></tr>
            <tr><td>GDPR (EU/UK)</td><td>Compliant</td><td>All personal data processing</td></tr>
            <tr><td>DPDPA 2023 (India)</td><td>Compliant</td><td>All personal data processing</td></tr>
            <tr><td>PCI-DSS Level 1</td><td>Compliant via Stripe/Razorpay</td><td>Payment card data (not stored by us)</td></tr>
            <tr><td>OWASP Top 10</td><td>Tested annually</td><td>All web-facing applications</td></tr>
          </tbody>
        </table>
        <p>Current audit reports and compliance documentation are available to enterprise customers under NDA. Contact <a href="mailto:security@thinkmindlabs.com">security@thinkmindlabs.com</a> to request access.</p>

        <h2>2. Data Encryption</h2>
        <h3>2.1 Encryption at Rest</h3>
        <ul>
          <li>All customer data encrypted using <strong>AES-256-GCM</strong></li>
          <li>Database encryption with per-tenant key isolation for enterprise customers</li>
          <li>Encryption keys managed via AWS KMS / Google Cloud KMS with automatic rotation every 90 days</li>
          <li>Backup data encrypted with separate keys stored in geographically distinct locations</li>
        </ul>

        <h3>2.2 Encryption in Transit</h3>
        <ul>
          <li>All communications encrypted with <strong>TLS 1.3</strong> (TLS 1.2 minimum); older protocols disabled</li>
          <li>Perfect Forward Secrecy (PFS) enforced on all endpoints</li>
          <li>HSTS with minimum 1-year max-age and preloading enabled</li>
          <li>API endpoints enforce certificate pinning for high-security integrations</li>
          <li>Internal service-to-service communication encrypted via mutual TLS (mTLS)</li>
        </ul>

        <h2>3. Infrastructure Security</h2>
        <h3>3.1 Cloud Architecture</h3>
        <ul>
          <li>Multi-region deployment across AWS and GCP with no single point of failure</li>
          <li>VPC isolation with strict network segmentation between customer environments</li>
          <li>Zero-trust network architecture — no implicit trust based on network location</li>
          <li>DDoS protection via Cloudflare Enterprise with automatic mitigation</li>
          <li>Web Application Firewall (WAF) with custom rulesets for AI API abuse prevention</li>
        </ul>

        <h3>3.2 Access Controls</h3>
        <ul>
          <li>Role-Based Access Control (RBAC) with least-privilege principles</li>
          <li>Multi-factor authentication (MFA) mandatory for all ThinkMindLabs employees accessing production systems</li>
          <li>Privileged Access Management (PAM) for all administrative operations with session recording</li>
          <li>Access reviews conducted quarterly; departing employees deprovisioned within 4 hours</li>
          <li>Production access requires approval workflow; all access logged immutably</li>
        </ul>

        <h3>3.3 Supply Chain Security</h3>
        <ul>
          <li>Software Bill of Materials (SBOM) maintained for all production dependencies</li>
          <li>Automated dependency scanning via Snyk and GitHub Dependabot</li>
          <li>Container images scanned for vulnerabilities before deployment</li>
          <li>Third-party vendors assessed via a formal vendor security review programme</li>
        </ul>

        <h2>4. Application Security</h2>
        <ul>
          <li><strong>Secure SDLC:</strong> Security requirements integrated from design through deployment</li>
          <li><strong>Code review:</strong> All production code requires peer review; security-sensitive changes require security team sign-off</li>
          <li><strong>Static analysis:</strong> SAST tools run on every pull request; blocking on high/critical findings</li>
          <li><strong>Dynamic analysis:</strong> DAST scanning performed on staging before each major release</li>
          <li><strong>Penetration testing:</strong> Independent third-party penetration test conducted annually; critical findings remediated within 48 hours</li>
          <li><strong>Bug bounty:</strong> Coordinated vulnerability disclosure programme (see Section 7)</li>
        </ul>

        <h2>5. Operational Security</h2>
        <h3>5.1 Logging and Monitoring</h3>
        <ul>
          <li>Centralised, tamper-evident log aggregation with 12-month retention</li>
          <li>24/7 Security Operations Centre (SOC) monitoring with automated alerting</li>
          <li>Anomaly detection powered by ML-based threat intelligence</li>
          <li>API usage monitoring for abuse patterns, credential stuffing, and scraping attempts</li>
        </ul>

        <h3>5.2 Incident Response</h3>
        <ul>
          <li>Documented Incident Response Plan (IRP) tested via annual tabletop exercises</li>
          <li>Dedicated incident response team with defined escalation paths and roles</li>
          <li>Security incidents classified by severity; P0/P1 incidents activate 24/7 response</li>
          <li>Customer notification for material incidents within <strong>72 hours</strong> of discovery (GDPR) and as required under DPDPA</li>
          <li>Post-incident root cause analysis published internally; summaries shared with affected customers</li>
        </ul>

        <h3>5.3 Business Continuity</h3>
        <ul>
          <li>Recovery Time Objective (RTO): 4 hours for critical services</li>
          <li>Recovery Point Objective (RPO): 1 hour for customer data</li>
          <li>Automated daily backups with 30-day retention; weekly backups retained for 1 year</li>
          <li>Disaster recovery tested via annual failover drills</li>
          <li>Status page updated in real-time at <a href="https://status.thinkmindlabs.com" target="_blank" rel="noopener">status.thinkmindlabs.com</a></li>
        </ul>

        <h2>6. AI-Specific Security</h2>
        <p>Operating an AI platform introduces unique security considerations beyond traditional software:</p>
        <ul>
          <li><strong>Prompt injection defence:</strong> Input sanitisation and detection systems to prevent adversarial prompt manipulation</li>
          <li><strong>Model output filtering:</strong> Automated safety classifiers applied to outputs before delivery</li>
          <li><strong>Data isolation:</strong> Customer prompts and outputs are never cross-contaminated between tenants</li>
          <li><strong>Model weight protection:</strong> Proprietary model weights stored in isolated, hardware-secured environments; never exposed via API</li>
          <li><strong>Rate limiting and abuse prevention:</strong> Adaptive rate limiting to prevent API abuse, credential stuffing, and resource exhaustion</li>
          <li><strong>Watermarking:</strong> Enterprise customers can enable cryptographic output watermarking for provenance tracking</li>
        </ul>

        <h2>7. Vulnerability Disclosure Programme</h2>
        <p>We operate a coordinated vulnerability disclosure programme. If you believe you have found a security vulnerability in ThinkMindLabs products:</p>
        <ul>
          <li><strong>Report to:</strong> <a href="mailto:security@thinkmindlabs.com">security@thinkmindlabs.com</a> (PGP key available on request)</li>
          <li><strong>Include:</strong> Description of the vulnerability, steps to reproduce, potential impact, and your contact details</li>
          <li><strong>Acknowledgement:</strong> We will acknowledge receipt within <strong>24 hours</strong></li>
          <li><strong>Response SLA:</strong> Initial assessment within 72 hours; critical vulnerabilities triaged within 24 hours</li>
          <li><strong>Safe harbour:</strong> We will not pursue legal action against researchers who act in good faith and follow responsible disclosure guidelines</li>
          <li><strong>Recognition:</strong> Researchers who discover and responsibly disclose valid vulnerabilities are acknowledged in our Hall of Fame</li>
        </ul>

        <div className="legal-highlight">
          <p><strong>Scope:</strong> thinkmindlabs.com and all subdomains, API endpoints (api.thinkmindlabs.com), and developer portal. Out of scope: social engineering attacks, physical security, third-party services used by ThinkMindLabs.</p>
        </div>

        <h2>8. Employee Security</h2>
        <ul>
          <li>Background verification for all employees with access to production systems or customer data, in compliance with Indian law</li>
          <li>Security awareness training mandatory at onboarding and annually thereafter</li>
          <li>Phishing simulation exercises conducted quarterly</li>
          <li>Acceptable Use Policy and information security policies acknowledged by all employees</li>
          <li>Confidentiality agreements signed by all employees and contractors</li>
        </ul>

        <h2>9. Enterprise Security Features</h2>
        <p>Enterprise customers on our Professional and Enterprise plans have access to additional security controls:</p>
        <ul>
          <li>Single Sign-On (SSO) via SAML 2.0 and OIDC integration with your identity provider</li>
          <li>Dedicated VPC and private networking via AWS PrivateLink or GCP Private Service Connect</li>
          <li>Customer-managed encryption keys (CMEK)</li>
          <li>Audit log streaming to your SIEM (Splunk, Datadog, Elastic)</li>
          <li>IP allowlisting and network access controls</li>
          <li>Custom data residency (India, EU, US, APAC regions)</li>
          <li>Annual security review and dedicated security contact</li>
        </ul>
        <p>Contact <a href="mailto:enterprise@thinkmindlabs.com">enterprise@thinkmindlabs.com</a> to discuss enterprise security requirements.</p>

        <h2>10. Contact the Security Team</h2>
        <ul>
          <li><strong>Security incidents and vulnerability reports:</strong> <a href="mailto:security@thinkmindlabs.com">security@thinkmindlabs.com</a></li>
          <li><strong>Enterprise security enquiries:</strong> <a href="mailto:enterprise@thinkmindlabs.com">enterprise@thinkmindlabs.com</a></li>
          <li><strong>General security questions:</strong> <a href="mailto:contact@thinkmindlabs.com">contact@thinkmindlabs.com</a></li>
          <li><strong>Status and uptime:</strong> <a href="https://status.thinkmindlabs.com" target="_blank" rel="noopener">status.thinkmindlabs.com</a></li>
          <li><strong>Address:</strong> ThinkMindLabs Private Limited, Cyber City, Gurugram, Haryana 122002, India</li>
        </ul>
      </LegalPage>
    </>
  )
}
