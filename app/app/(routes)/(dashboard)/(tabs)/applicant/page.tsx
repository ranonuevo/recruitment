
import TableApplicant from '@/components/datatable-sections/leader/TableApplicant'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Tabs from '../Tabs'
import { getServerSideSession } from '@/libs/auth'

export const metadata: Metadata = {
  title: 'Applicant'
}

export default async function Applicant () {
  const { isRecruiter } = await getServerSideSession()

  return (
    <div className=''>
      <div className='flex justify-between mb-5'>
        <Tabs />

        {
          isRecruiter? (
            <Button>Create Applicant</Button>
          ) : (
            <Button>Assign Applicant</Button>
          )
        }
        
      </div>
      
      {
        isRecruiter? (
          'TODO'
        ) : (
          <TableApplicant />
        )
      }
      
    </div>
    
  )
}


