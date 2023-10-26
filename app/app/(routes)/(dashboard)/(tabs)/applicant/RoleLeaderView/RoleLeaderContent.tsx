import { columns } from './columns'
import DatePickerWithRange from '@/components/ui/datepicker-with-range'
import DataTable from '@/components/datatables/DataTable'
import GalleryView from './GalleryView'
import { 
  DataTableSearch,
  DataTableViewOptions,
  DataTableFilter,
  DataTableViewType
} from '@/components/datatables/tools'
import { ViewTypeState } from '@/hooks/useDataTable'

type LeaderViewProps = {
  table: any
  globalFilter: any 
  setGlobalFilter: any,
  viewType: ViewTypeState,
  setViewType: any
}


export default function LeaderView ({
  table, 
  globalFilter, 
  setGlobalFilter,
  viewType, 
  setViewType 
}: LeaderViewProps) {
  return (
    <>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-2'>
          <DataTableViewType viewType={viewType} setViewType={setViewType} />
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

      <DataTable 
        table={table} 
        columns={columns} 
        viewType={viewType} 
        galleryViewCard={(row: any) => (<GalleryView key={row.id} table={table} row={row} />)}
      />
    </>
  )
}