import type { Metadata } from 'next'

import Footer from '@components/layout/Footer'
import Header from '@components/layout/Header'
import '@styles/globals.css'

export const metadata: Metadata = {
  title: 'rFleet.io',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
