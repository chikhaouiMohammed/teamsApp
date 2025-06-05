import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teams',
  description: 'Created with Chikhaoui Mohammed Mostafa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon/Frame.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
