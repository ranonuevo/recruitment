
import type { Metadata } from 'next'
import SourceLegend from '@/components/datatables/cell/SourceLegend'
import { Button } from '@/components/ui/button'
import TableLeaderProspect from '@/components/datatable-sections/leader/TableProspect'
import TableRecruiterProspect from '@/components/datatable-sections/recruiter/TableProspect'
import Tabs from '../Tabs'
import { options as authOptions } from '@/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import * as ROLES from '@/constants/roles'

export const metadata: Metadata = {
  title: 'Prospect'
}

export default async function Prospect () {
  const session = await getServerSession(authOptions)
  const isRecuiter = session?.user?.role === ROLES.ROLE_RECRUITER

  return (
    <div className=''>
      <div className='flex justify-between mb-5'>
        <Tabs />
        {
          isRecuiter? (
            <Button>Create Prospect</Button>
          ) : (
            <Button>Assign Prospect</Button>
          )
        }
      </div>

      {
        isRecuiter? (
          <TableRecruiterProspect />
        ) : (
          <TableLeaderProspect />
        )
      }
    
    {
      !isRecuiter? (

        <div className='w-full mt-3 flex justify-end'>
          <ul className=''>
            <li className='flex items-center'>
              <SourceLegend isResponded={true} className='mr-2' /> 
              Prospect responded the Virtual Robot
            </li>
            <li className='flex items-center'>
              <SourceLegend isResponded={false} className='mr-2' /> 
              Prospect did not respond Virtual Robot
            </li>
          </ul>
        </div>
      ) : null
    }
    </div>
  )
}


