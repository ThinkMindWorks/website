import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="ThinkMindLabs — AI Lab building deployment-ready AI products. OpenVoce.ai, Pravakta.ai, TalkBuy.ai, AgentForDoc.ai." />
        <meta property="og:title" content="ThinkMindLabs — AI Lab. Born to Build." />
        <meta property="og:description" content="Build with AI. Build for AI. Build to integrate. Sovereign AI stacks and deployment-ready products for enterprise." />
        <meta property="og:url" content="https://thinkmindlabs.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ThinkMindLabs — AI Lab. Born to Build." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
