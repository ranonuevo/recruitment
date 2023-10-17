
import TableApplicant from '@/components/TableApplicant'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Tabs from '../../Tabs'

export const metadata: Metadata = {
  title: 'Applicant'
}

export default function Applicant () {
  return (
    <div className=''>
      <div className='flex justify-between mb-5'>
        <Tabs />

        <Button>Assign Applicant</Button>
      </div>

      <TableApplicant />
      
    </div>
    
  )
}


