import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConfirmServiceProvider } from '@/hooks/useModalConfirm'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/libs/utils'
import AppProvider from '@/components/providers/AppProvider'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recruitment App',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(
        font.className,
        // 'bg-white dark:bg-[#313338]'
      )}>
        <AppProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem={false}
            storageKey='recruitment-theme'
          >
            <ConfirmServiceProvider>
              { children }
            </ConfirmServiceProvider>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html> 
  )
}
