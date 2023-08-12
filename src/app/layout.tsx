import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets:['devanagari'],weight:["100","200","300","400","500","600","800","900"]})

export const metadata: Metadata = {
  title: 'Farm Websites Uganda',
  description: 'Get a modern farm website today',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
