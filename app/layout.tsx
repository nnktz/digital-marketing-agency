import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

const font = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Bird',
  description: 'Digital Marketing Agency Website with Next.js 14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
