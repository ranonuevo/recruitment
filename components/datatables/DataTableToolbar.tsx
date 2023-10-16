'use client'

import { Table } from '@tanstack/react-table'
// import Input from '@/components/form/Input'
import InputDebounced from '@/components/form/InputDebounced'
import DataTableViewOptions from './DataTableViewOptions'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  globalFilter: string
  setGlobalFilter: any
  leftContent: any
}

export default function DataTableToolbar<TData>({
  table,
  globalFilter,
  setGlobalFilter, 
  leftContent
}: DataTableToolbarProps<TData>) {


  return (
    <div className='flex items-center justify-between mb-3'>
      <div className='flex gap-2'>
        { leftContent }
      </div>
      <div className='flex items-center'>
        <div className='mr-2'>
          <InputDebounced
            placeholder='Search'
            value={globalFilter}
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGlobalFilter(String(event.target.value))}
            onChange={(value: String) => setGlobalFilter(String(value))}
            className='max-w-sm'
          />
        </div>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
