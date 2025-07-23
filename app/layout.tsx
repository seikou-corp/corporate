import './global.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP, M_PLUS_Rounded_1c } from 'next/font/google'
import { Header } from './components/header'
import { CorporateFooter } from './components/corporate-footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  variable: '--font-mplus-rounded',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'SEIKOU - Corporate Site',
    template: '%s | SEIKOU',
  },
  description: 'SEIKOU corporate website',
  openGraph: {
    title: 'SEIKOU',
    description: 'SEIKOU corporate website',
    url: baseUrl,
    siteName: 'SEIKOU',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={cx(
        'text-black bg-white',
        notoSansJP.variable,
        mPlusRounded1c.variable
      )}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 -top-[100px] relative font-noto-sans-jp">
          {children}
        </main>
        <CorporateFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
