import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Provenonce Developer Docs',
    template: '%s — Provenonce Docs',
  },
  description: 'Cryptographic identity and accountability for AI agents. SDK docs, API reference, tutorials.',
  openGraph: {
    title: 'Provenonce Developer Docs',
    description: 'Cryptographic identity and accountability for AI agents',
    siteName: 'provenonce.dev',
  },
}

const banner = (
  <Banner storageKey="devnet-notice">
    Provenonce is currently on Solana devnet. APIs may change.
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
        provenonce<span style={{ color: '#10b981' }}>.dev</span>
      </span>
    }
    projectLink="https://github.com/jarekpiot/provenonce"
  />
)

const footer = (
  <Footer>
    {new Date().getFullYear()} Provenonce. Built by{' '}
    <a href="https://provenonce.io" target="_blank" rel="noopener noreferrer">
      Jarek Piotrowski &amp; Jon Teo
    </a>
    .
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#020617" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/jarekpiot/provenonce-dev/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
