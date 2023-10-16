'use client'

import * as React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import * as PATHS from '@/constants/paths'
// import { useModalConfirm } from '@/hooks/useModalConfirm'
// import ThemeModeToggle from '@/components/global/ThemeModeToggle'
import { clearAuth } from '@/libs/auth'

import { 
  LucideHexagon,
  LayoutDashboard,
  BarChart4,
  Calendar,
  BellRing,
  Settings,
  ActivitySquare,
  LogOut
} from 'lucide-react'


type Link = {
  title: string,
  icon: React.ComponentType<{ className?: string }>,
  path: string,
  type?: string
}

const links: Link[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: PATHS.PATH_APP_DEFAULT
  },
  {
    title: 'Chart',
    icon: BarChart4,
    path: PATHS.PATH_APP
  },
  {
    title: 'Activities',
    icon: ActivitySquare,
    path: PATHS.PATH_APP
  },
  {
    title: 'Calendar',
    icon: Calendar,
    path: PATHS.PATH_APP
  },
  {
    title: 'Notification',
    icon: BellRing,
    path: PATHS.PATH_APP
  },
  {
    title: 'Settings',
    icon: Settings,
    path: PATHS.PATH_APP
  },
  {
    title: 'Log Out',
    icon: LogOut,
    path: PATHS.PATH_HOME,
    type: 'logout'
  },
]

export default function AppSidepbar () {
  // const router = useRouter()
  // const modalConfirm = useModalConfirm()

  const handleLinkClick = (link: Link, e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (link.type === 'logout') {
      e.preventDefault()

      clearAuth()
      // modalConfirm({
      //   title: 'This will logout your account, are you sure?',
      //   description: 'You can always sign back at any time.'
      // })
      // .then(() => {
      //   // router.push(PATHS.PATH_HOME)
      // })
      // .catch(() => {})
    }    
  }
  
  return (
    <aside className='bg-white w-[80px] flex flex-col items-center min-h-screen'>

      <Link href={PATHS.PATH_APP_DEFAULT}>
        <LucideHexagon className='h-10 w-10 mt-7' />
      </Link>

      <ul className='mt-10'>
        {
          links.map((link: Link, index: number) => {
            return (
              <li key={`sidebar-${index}`} className='py-6'>
                <Link href={link.path} title={link.title} onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleLinkClick(link,  e)}>
                  { link.icon && ( <link.icon className='h-6 w-6' /> ) }
                </Link>
              </li>
            )
          })
        }

        {/* <ThemeModeToggle /> */}
      </ul>
    </aside>
  )
}