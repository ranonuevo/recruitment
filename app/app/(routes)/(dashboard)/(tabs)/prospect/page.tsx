
import TableProspect from '@/components/TableProspect'
import type { Metadata } from 'next'
import SourceLegend from '@/components/datatables/cell/SourceLegend'

export const metadata: Metadata = {
  title: 'Prospect'
}

export default function Prospect () {
  return (
    <>
      <TableProspect />

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
    </>
  )
}


