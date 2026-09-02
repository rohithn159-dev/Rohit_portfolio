import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Madupoju Rohith | Android Developer & BCA Student',
  description: 'Portfolio of Madupoju Rohith - BCA Student, Android Developer, and Tech Enthusiast. Building innovative mobile applications and web solutions.',
  keywords: ['Madupoju Rohith', 'Android Developer', 'BCA Student', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Madupoju Rohith' }],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  openGraph: {
    title: 'Madupoju Rohith | Android Developer',
    description: 'BCA Student passionate about technology and app development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
