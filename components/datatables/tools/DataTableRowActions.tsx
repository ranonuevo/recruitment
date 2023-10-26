'use client'

import { MoreHorizontal, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


type DataTableActionsProps = {
  children: React.ReactNode
  isVertical?: boolean
}

export default function DataTableRowActions ({
  children,
  isVertical = false
}: DataTableActionsProps) {
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          {
            isVertical? (
              <MoreVertical className='h-4 w-4' />
            ) : (
              <MoreHorizontal className='h-4 w-4' />
            )
          }
        </Button>
      </DropdownMenuTrigger>
      
      { children }
    </DropdownMenu>
  )
}
