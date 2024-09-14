import type { Metadata } from 'next'
import { Noto_Sans, Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: "Peanxtt's Github Page",
  description: 'Generated by github page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
