'use client'

import { Button } from '@/components/ui/button'
import Tabs from '../../Tabs'

import { useDataTable } from '@/hooks/useDataTable'
import { columns } from './columns'
import RoleLeaderContent from './RoleLeaderContent'

type LeaderViewProps = {
  user: any,
  data: any
}


export default function LeaderView ({
  // user,
  data
}: LeaderViewProps) {

  const { table, globalFilter, setGlobalFilter, viewType, setViewType  } = useDataTable('LeaderViewApplicant', data, columns)

  return (
    <>
      <div className='flex items-center justify-between mb-5'>
        <Tabs />
        <Button>Assign Applicant</Button>
      </div>

      <RoleLeaderContent 
        table={table} 
        globalFilter={globalFilter} 
        setGlobalFilter={setGlobalFilter} 
        viewType={viewType} 
        setViewType={setViewType} 
      />
      
    </>
  )
}