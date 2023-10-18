
import type { Metadata } from 'next'
import SourceLegend from '@/components/datatables/cell/SourceLegend'
import { Button } from '@/components/ui/button'
import TableLeaderProspect from '@/components/datatable-sections/leader/TableProspect'
import TableRecruiterProspect from '@/components/datatable-sections/recruiter/TableProspect'
import Tabs from '../Tabs'
import { getServerSideSession } from '@/libs/auth'

export const metadata: Metadata = {
  title: 'Prospect'
}

export default async function Prospect () {
  const { isRecruiter } = await getServerSideSession()

  return (
    <div className=''>
      <div className='flex justify-between mb-5'>
        <Tabs />
        {
          isRecruiter? (
            <Button>Create Prospect</Button>
          ) : (
            <Button>Assign Prospect</Button>
          )
        }
      </div>

      {
        isRecruiter? (
          <TableRecruiterProspect />
        ) : (
          <TableLeaderProspect />
        )
      }
    
    {
      !isRecruiter? (

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


