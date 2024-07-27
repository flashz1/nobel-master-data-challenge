import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header } from '@/components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nobel Master Data Challenge | Valerii Cara',
  description:
    'Nobel Master Data Challenge for Valerii Cara - Senior Frontend Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
