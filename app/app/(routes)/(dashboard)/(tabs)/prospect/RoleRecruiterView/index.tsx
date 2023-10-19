'use client'

import { Button } from '@/components/ui/button'
import Tabs from '../../Tabs'
import TopDropdowns from '../../TopDropdowns'
import { Plus } from 'lucide-react'
import Collapsible from './Collapsible'

import { useDataTable } from '@/hooks/useDataTable'
import { columns } from './columns'
import DatePickerWithRange from '@/components/ui/datepicker-with-range'
import DataTable from '@/components/datatables/DataTable'
import {
  DataTableSearch,
  DataTableViewOptions,
  DataTableViewType
} from '@/components/datatables/tools'

type RecruiterViewProps = {
  user: any,
  data: any
}

export default function RecruiterView ({
  user,
  data
}: RecruiterViewProps) {
  
  const { table, globalFilter, setGlobalFilter } = useDataTable(data, columns)
  
  return (
    <>
      <div className='flex justify-between mb-5'>
        <TopDropdowns />
        
        <Button>
          <Plus className='mr-2' /> 
          Create Prospect
        </Button>
      </div>

      <div className='mb-5 flex gap-2 justify-between'>
        
        <Tabs />

        <div className='flex gap-2 items-center'>
          <DataTableViewType />
          <DatePickerWithRange />
          <DataTableSearch 
            globalFilter={globalFilter} 
            setGlobalFilter={setGlobalFilter} 
          />
          <DataTableViewOptions table={table} />
        </div>
      </div>

      <Collapsible user={user} table={table}>
        <DataTable table={table} columns={columns} />
      </Collapsible>
    </>
  )
}


