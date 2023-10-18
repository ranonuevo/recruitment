'use client'

import { usePathname } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/libs/utils'
import Link from 'next/link'
import * as paths from '@/constants/paths'

export default function Tabs () {
  const pathname = usePathname()
  
  return (
    <div>
      <Link 
        href={paths.PATH_APP_APPLICANT}
        className={cn(buttonVariants({ 
          variant: paths.PATH_APP_APPLICANT === pathname? 'default' : 'outline'
        }), 'mr-4')} 
      >
        Applicant
      </Link>
      <Link 
        href={paths.PATH_APP_PROSPECT}
        className={buttonVariants({ 
          variant: paths.PATH_APP_PROSPECT === pathname? 'default' : 'outline'
        })} 
      >
        Prospect
      </Link>
    </div>
  )
}


