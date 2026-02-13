import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './global.css'

export const metadata = {
  title: {
    default: 'Provenonce Developer Docs',
    template: '%s — Provenonce Docs',
  },
  description: 'The trust registry for the agentic era. SDK docs, API reference, tutorials.',
  openGraph: {
    title: 'Provenonce Developer Docs',
    description: 'The trust registry for the agentic era',
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
        provenonce<span style={{ color: '#f97316' }}>.dev</span>
      </span>
    }
    projectLink="https://provenonce.io"
  />
)

const footer = (
  <Footer>
    {new Date().getFullYear()}{' '}
    <a href="https://provenonce.io" target="_blank" rel="noopener noreferrer">
      Provenonce
    </a>
    . The trust registry for the agentic era.
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
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://provenonce.dev"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
