'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import AppTopBar from '@/components/global/AppTopBar'
import AppSideBar from '@/components/global/AppSideBar'
import AppRightPanelBar from '@/components/global/AppRightPanelBar'
import clx from '@/utils/clx'
import AppContextProvider from '@/hooks/useAppContext'
import * as PATHS from '@/constants/paths'

type AppLayoutProps = {
  children: React.ReactNode,
  session: any
}

export default function AppLayout({
  children,
  session
}: AppLayoutProps) {
  const pathname = usePathname()
  const { isRecruiter, user } = session
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const showRightPAnelContent = pathname === PATHS.PATH_APP_APPLICANT || pathname === PATHS.PATH_APP_PROSPECT
  
  useEffect(() => {
    if (showRightPAnelContent) {
      // setIsOpen(isRecruiter)
    }
  }, [isRecruiter, showRightPAnelContent])

  return (
    <AppContextProvider session={session}>
      <main className='min-h-screen grid grid-cols-[80px_minmax(0,1fr)]'>
        <AppSideBar />

        <div>
          <div 
            className={clx(
              'px-7 transition-[margin-right]',
              (showRightPAnelContent && isOpen)? 'mr-[450px]' : 'mr-0',
              { 'duration-500': showRightPAnelContent },
            )}
            id='content'
          >
            <AppTopBar user={user} />
            
            {children}
          </div>
          
          {
            showRightPAnelContent && (
              <AppRightPanelBar 
                isOpen={isOpen} 
                isRecruiter={isRecruiter} 
                setIsOpen={setIsOpen} 
              />
          )}
        </div>
      </main>
    </AppContextProvider>
  )
}
