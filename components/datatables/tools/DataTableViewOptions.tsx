'use client'

import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ViewTypeState } from '@/hooks/useDataTable'
import { 
  DATATABLE_VIEW_TYPE_LIST, 
  // DATATABLE_VIEW_TYPE_GALLERY 
} from '@/constants/datatable'

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>,
  viewType: ViewTypeState,
}

export default function DataTableViewOptions<TData>({
  table,
  viewType
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {

          viewType === DATATABLE_VIEW_TYPE_LIST && (
          <Button
            variant='outline'
            size='sm'
            className='ml-auto h-8 flex'
            // disabled={viewType === DATATABLE_VIEW_TYPE_GALLERY}
          >
            <MixerHorizontalIcon className='mr-2 h-4 w-4' />
            View
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[150px]'>
        <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column : any) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className=''
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column?.columnDef?.meta?.label || column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
