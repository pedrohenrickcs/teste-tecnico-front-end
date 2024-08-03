import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import { FavoritesProvider } from '@/context/FavoritesContext'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Github Repositórios',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  )
}
