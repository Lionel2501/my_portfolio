import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Lionel Cassar developpeur informatique',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
