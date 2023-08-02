import Provider from './provider'
import { ToastContainer } from 'react-toastify'
import AuthProvider from '@/components/providers/auth'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import '@/styles/scroll.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const rem = localFont({ src: '../styles/fonts/REM.ttf' });

export const metadata: Metadata = {
  title: 'Talisman',
  description: 'Talisman media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="light" lang="en">
      <body style={rem.style}>
        <ToastContainer />
        <Provider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Provider>
      </body>
    </html>
  )
}
