// 'use client'

import { flexRender } from '@tanstack/react-table'
import { DataTablePagination } from '@/components/datatables/tools'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DATATABLE_VIEW_TYPE_LIST, PAGE_LIMIT_LIST } from '@/constants/datatable'
import { ViewTypeState } from '@/hooks/useDataTable'

type DataTableProps = {
  table: any
  columns: any
  pageLimitList?: any[],
  viewType: ViewTypeState,
  galleryViewCard?: any
}

export default function DataTable({
  table,
  columns,
  pageLimitList = PAGE_LIMIT_LIST,
  viewType,
  galleryViewCard
}: DataTableProps) {
  if (viewType === DATATABLE_VIEW_TYPE_LIST) {
    return (
      <>
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup: any) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header: any) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row: any) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell: any) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className='h-24 text-center'>
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className='py-5'>
          <DataTablePagination table={table} pageLimitList={pageLimitList} />
        </div>
      </>
    )
  }

  return (
    <div className=''>
      <div className='bg-[#efefef] p-4'>
        <div className='flex flex-wrap gap-5 justify-start'>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row: any) => {
              return galleryViewCard? galleryViewCard(row) : ''
            })
          ) : (
            <div className='h-24 text-center w-full flex items-center '>
              No results.
            </div>
          )}
        </div>
      </div>

      <div className='py-5'>
        <DataTablePagination table={table} pageLimitList={pageLimitList} />
      </div>
    </div>
  )
}
