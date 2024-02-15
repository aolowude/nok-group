import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import ScrollToTopButton from '@/components/ScrollToTop'

import '@/styles/tailwind.css'
import SplashPage from '@/components/SplashPage'

export const metadata: Metadata = {
  title: {
    template: '%s - NokGroup',
    default: 'NokGroup',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <SplashPage />
        {/* Comment out to hide main site */}
        {/* <RootLayout>{children}</RootLayout>
        <ScrollToTopButton /> */}
      </body>
    </html>
  )
}
