import { Table } from '@tanstack/react-table'
import Input from '@/components/form/Input'
import DataTableViewOptions from './DataTableViewOptions'


interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export default function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className='flex items-center py-4'>
      <Input
        placeholder='Filter emails...'
        value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
        onChange={(event: any) =>
          table.getColumn('email')?.setFilterValue(event.target.value)
        }
        className='max-w-sm'
        name='filter'
      />
    
      <DataTableViewOptions table={table} />
    </div>
  )
}
