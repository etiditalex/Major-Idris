import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Major Idris - Championing Health, Community & Progress for Nyali',
  description: 'Official website of Major Idris, dedicated to healthcare, youth empowerment, infrastructure development, and community progress in Nyali.',
  keywords: 'Major Idris, Nyali, healthcare, youth empowerment, infrastructure, governance, environment, The Walk Movement',
  authors: [{ name: 'Major Idris' }],
  creator: 'Major Idris',
  publisher: 'Major Idris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://major-idris.com',
    siteName: 'Major Idris',
    title: 'Major Idris - Championing Health, Community & Progress for Nyali',
    description: 'Official website of Major Idris, dedicated to healthcare, youth empowerment, infrastructure development, and community progress in Nyali.',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1757747145/Major_Idris_umab7k.png',
        width: 1200,
        height: 630,
        alt: 'Major Idris - Championing Health, Community & Progress for Nyali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Major Idris - Championing Health, Community & Progress for Nyali',
    description: 'Official website of Major Idris, dedicated to healthcare, youth empowerment, infrastructure development, and community progress in Nyali.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1757747145/Major_Idris_umab7k.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
