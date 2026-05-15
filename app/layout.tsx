import type { Metadata } from 'next'
import { Antonio, Manrope, Reenie_Beanie } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const antonio = Antonio({
  subsets: ['latin'],
  variable: '--font-antonio-next',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope-next',
  display: 'swap',
})

const reenieBeanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-reenie-next',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Duaskala',
  description: 'A studio from Indonesia. We Design your product.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${manrope.variable} ${reenieBeanie.variable}`}
    >
      <body className="bg-[#FFF8F6] text-black antialiased">
        {children}
        <Script
          src="https://kit.fontawesome.com/9be93daa8d.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
