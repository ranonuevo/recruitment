'use client'

import { SourceLegend } from '@/components/datatables/cell'
import { Button } from '@/components/ui/button'
import Tabs from '../../Tabs'
import { useDataTable } from '@/hooks/useDataTable'
import { columns } from '@/app/app/(routes)/(dashboard)/(tabs)/applicant/RoleLeaderView/columns'
import RoleLeaderContent from '@/app/app/(routes)/(dashboard)/(tabs)/applicant/RoleLeaderView/RoleLeaderContent'

type LeaderViewProps = {
  user: any,
  data: any
}

export default function LeaderView ({
  // user,
  data
}: LeaderViewProps) {

  const { table, globalFilter, setGlobalFilter, viewType, setViewType } = useDataTable('LeaderViewProspect', data, columns)

  return (
    <>
      <div className='flex items-center justify-between mb-5'>
        <Tabs />
        <Button>Assign Prospect</Button>
      </div>

      <RoleLeaderContent 
        table={table} 
        globalFilter={globalFilter} 
        setGlobalFilter={setGlobalFilter} 
        viewType={viewType}
        setViewType={setViewType}
      />

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