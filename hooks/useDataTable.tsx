'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  // ColumnDef,
  VisibilityState,
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from '@tanstack/react-table'
import { PAGE_SIZE, DATATABLE_VIEW_TYPE_LIST, DATATABLE_VIEW_TYPE_GALLERY, DATATABLE_VIEW_TYPE_PREFIX } from '@/constants/datatable'


export type ViewTypeState = typeof DATATABLE_VIEW_TYPE_LIST |  typeof DATATABLE_VIEW_TYPE_GALLERY
 
function useSkipper() {
  const shouldSkipRef = useRef(true)
  const shouldSkip = shouldSkipRef.current

  // Wrap a function with this to skip a pagination reset temporarily
  const skip = useCallback(() => {
    shouldSkipRef.current = false
  }, [])

  useEffect(() => {
    shouldSkipRef.current = true
  })

  return [shouldSkip, skip] as const
}

const getInitialViewTypeState = (id: string): any => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(`${DATATABLE_VIEW_TYPE_PREFIX}${id}`) || DATATABLE_VIEW_TYPE_LIST
  }
  
  return DATATABLE_VIEW_TYPE_LIST
}

export const useDataTable = (
  id: string,
  data: any,
  columns: any,
  pageSize = PAGE_SIZE
) => {
  const [tableData, setTableData] = useState(data)
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState('')
  const [viewType, setViewType] = useState<ViewTypeState>(getInitialViewTypeState(id))
  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper()
  
  const table = useReactTable({
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,


    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),

    autoResetPageIndex,

    meta: {
      updateData: (rowIndex: number, columnId: string, value: any) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex()
        setTableData((old: any) =>
          old.map((row: any, index: number) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              }
            }
            return row
          })
        )
      },
    },
    // debugTable: true,
    
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  })

  useEffect(() => {
    localStorage.setItem(`${DATATABLE_VIEW_TYPE_PREFIX}${id}`, viewType)
  }, [viewType])

  
  return {
    table,
    globalFilter,
    setGlobalFilter,
    viewType,
    setViewType
  }
} 