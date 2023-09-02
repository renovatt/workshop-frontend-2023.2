import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import ReactQueryProvider from './components/ReactQueryProvider'
import { AosProvider } from './components/AosProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '600', '700'],
})

const APP_NAME = 'Star Wars'
const APP_DESCRIPTION =
  'Workshop Front-End-2023.2 - Desafio Frabrica de Software'

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['renovatt', 'Workshop Front-End-2023.2', 'Frabrica de Software'],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#222223' }],
  authors: [
    { name: 'renovatt' },
    { name: 'renovatt', url: 'https://www.linkedin.com/in/renovatt/' },
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

  openGraph: {
    type: 'website',
    url: 'https://star-wars-renovatt.vercel.app',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: 'https://star-wars-renovatt.vercel.app/web-1.png',
      },
    ],
  },

  icons: [
    { rel: 'apple-touch-icon', url: '/web-1.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReactQueryProvider>
          <AosProvider>
            <Header />
            <Container>{children}</Container>
            <Footer />
          </AosProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
