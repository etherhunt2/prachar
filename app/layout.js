import React from 'react'
import './globals.css'
import LenisProvider from '@/components/lenis-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Hey Prachar - Best Digital Marketing Service',
  description: 'We are the agency that wants to bring you closer to the story of why you started your business in the first place.',
  keywords: 'digital marketing, marketing agency, business growth, online marketing, SEO, social media marketing',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ]
  },
  openGraph: {
    title: 'Hey Prachar - Best Digital Marketing Service',
    description: 'We are the agency that wants to bring you closer to the story of why you started your business in the first place.',
    url: 'https://heyprachar.com',
    siteName: 'Hey Prachar',
    images: [
      {
        url: '/mainlogo_.png',
        width: 1200,
        height: 630,
        alt: 'Hey Prachar Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hey Prachar - Best Digital Marketing Service',
    description: 'We are the agency that wants to bring you closer to the story of why you started your business in the first place.',
    images: ['/mainlogo_.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
