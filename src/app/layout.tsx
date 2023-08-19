import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Streaming SSR Demo',
  description: 'Built with Next.js by Abdul Rehman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Streaming SSR Demo</title>
        <meta name="description" content="Built with Next.js by Abdul Rehman" />
        <meta property="og:url" content="https://streaming.abdulrehmandev.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Streaming SSR Demo" />
        <meta property="og:description" content="Built with Next.js by Abdul Rehman" />
        <meta property="og:image" content="/card.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="streaming.abdulrehmandev.me" />
        <meta property="twitter:url" content="https://streaming.abdulrehmandev.me/" />
        <meta name="twitter:title" content="Streaming SSR Demo" />
        <meta name="twitter:description" content="Built with Next.js by Abdul Rehman" />
        <meta name="twitter:image" content="/card.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
