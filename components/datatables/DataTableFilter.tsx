import {
  Cross2Icon,
} from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import DataTableFacetedFilter from './DataTableFacetedFilter'
import { Button } from '@/components/ui/button'
// import { Checkbox } from '@/components/ui/checkbox'
import { 
  STATIC_STATES,
  STATIC_SOURCES,
  STATIC_EDUCATIONS
} from '@/constants/static-data'

interface DataTableFilterProps<TData> {
  table: Table<TData>
}


export default function DataTableFilter<TData>({
  table,
}: DataTableFilterProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const columns = table.getAllFlatColumns()

  const isColumnExist = (id: string) => {
    return columns.find(c => c.id === id)
  }

  return (
    <div className='mb-3 flex items-center gap-2 bg-gray-200 p-2'>
      {isColumnExist('source') && (
        <DataTableFacetedFilter
          column={table.getColumn('source')}
          title='Source'
          options={STATIC_SOURCES}
        />
      )}
      {isColumnExist('education') && (
        <DataTableFacetedFilter
          column={table.getColumn('education')}
          title='Education'
          options={STATIC_EDUCATIONS}
        />
      )}

      {isColumnExist('state') && (
        <DataTableFacetedFilter
          column={table.getColumn('state')}
          title='State'
          options={STATIC_STATES}
        />
      )}

      {isColumnExist('favorite') && (
        // <Checkbox
        //   checked={row.getIsSelected()}
        //   onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        //   aria-label='Select row'
        // />
        ''
      )}

      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <Cross2Icon className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
