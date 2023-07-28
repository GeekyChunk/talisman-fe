import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/components/providers/auth'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
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
