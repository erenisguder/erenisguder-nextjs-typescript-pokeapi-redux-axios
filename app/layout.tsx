import './globals.scss'
import type { Metadata } from 'next'
import { Providers } from './provider'

export const metadata: Metadata = {
  title: 'Poke App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <main className='container'>
            <div className='row'>
              <div className='col'>
                <h1 className='text-center mb-4'>Welcome to Poke App!</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                {children}
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
