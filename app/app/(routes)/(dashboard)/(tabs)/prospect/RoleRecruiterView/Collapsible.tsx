'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { DataTableFilter } from '@/components/datatables/tools'

type CollapsibleProps = {
  children: React.ReactNode,
  table: any
  user: any
}
export default function Collapsible ({
  children,
  table,
  user
}: CollapsibleProps) {
  const [ isOpen, setIsOpen ] = useState(true)
  
  return (
    <div>
      <div className='flex mb-5 items-center'>
        <span className='mr-2'>Recruiter:</span>

        <div className='flex items-center mr-5'>
          <span className='mr-2'>{ user?.name }</span>

          <span onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
            { isOpen? <ChevronDown /> : <ChevronUp />}
          </span>
        </div>

        <DataTableFilter table={table} />
      </div>
      

      <div className={isOpen? 'block' : 'hidden'}>
        { children }
      </div>
    </div>
  )
}