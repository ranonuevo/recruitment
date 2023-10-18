
import TableApplicant from '@/components/datatable-sections/leader/TableApplicant'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Tabs from '../Tabs'
import { options as authOptions } from '@/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import * as ROLES from '@/constants/roles'

export const metadata: Metadata = {
  title: 'Applicant'
}

export default async function Applicant () {
  // TODO: create a utility to reuse getServerSession() wihtour passing authOptions
  // TODO: improve get user role
  const session = await getServerSession(authOptions)
  const isRecuiter = session?.user?.role === ROLES.ROLE_RECRUITER

  return (
    <div className=''>
      <div className='flex justify-between mb-5'>
        <Tabs />

        {
          isRecuiter? (
            <Button>Create Applicant</Button>
          ) : (
            <Button>Assign Applicant</Button>
          )
        }
        
      </div>
      
      {
        isRecuiter? (
          'TODO'
        ) : (
          <TableApplicant />
        )
      }
      
    </div>
    
  )
}


