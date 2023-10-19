import { columns } from './columns'
import DatePickerWithRange from '@/components/ui/datepicker-with-range'
import DataTable from '@/components/datatables/DataTable'
import { 
  DataTableSearch,
  DataTableViewOptions,
  DataTableFilter,
  DataTableViewType
} from '@/components/datatables/tools'

type LeaderViewProps = {
  table: any
  globalFilter: any 
  setGlobalFilter: any
}


export default function LeaderView ({
  table, 
  globalFilter, 
  setGlobalFilter
}: LeaderViewProps) {
  return (
    <>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-2'>
          <DataTableViewType />
          <DatePickerWithRange />
        </div>

        <div className='flex items-center gap-2'>
          <DataTableSearch 
            globalFilter={globalFilter} 
            setGlobalFilter={setGlobalFilter} 
          />
          <DataTableViewOptions table={table} />
        </div>
      </div>

      <div className='mb-2'>
        <DataTableFilter table={table} />
      </div>

      <DataTable table={table} columns={columns} />
    </>
  )
}