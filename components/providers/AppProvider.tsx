'use client'

import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'
import { clearAuthInAllTabs } from '@/libs/auth'
 
type AppGlobalProps = {
  children: React.ReactNode
}

export default function AppProvider({ 
  children
}: AppGlobalProps) {

  useEffect(() => {
    clearAuthInAllTabs()
  })

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}