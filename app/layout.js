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
      <head>
        {/* Interakt.ai WhatsApp Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Wait 2 seconds, then paste this clean version
              setTimeout(() => {
                if (!window.kiwi) {
                  (function(w,d,s,c,r,a,m){
                    w['KiwiObject']=r;
                    w[r]=w[r] || function () {
                      (w[r].q=w[r].q||[]).push(arguments)};
                    w[r].l=1*new Date();
                      a=d.createElement(s);
                      m=d.getElementsByTagName(s)[0];
                    a.async=1;
                    a.src=c;
                    m.parentNode.insertBefore(a,m)
                  })(window,document,'script',"https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v="+ new Date().getTime(),'kiwi');
                  
                  setTimeout(() => {
                    if (window.kiwi && typeof window.kiwi.init === 'function') {
                      window.kiwi.init('', 'OF6SlHVVutUvvH4bD9Nk40xqa8wFfCYB', {});
                      console.log('Kiwi initialized successfully!');
                    }
                  }, 3000);
                }
              }, 2000);
            `,
          }}
        />
      </head>
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
