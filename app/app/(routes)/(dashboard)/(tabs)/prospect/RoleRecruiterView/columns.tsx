'use client'

import { ColumnDef } from '@tanstack/react-table'

import TableRowActions from './TableRowActions'

import { DataTableRowActions } from '@/components/datatables/tools'
import { DataTableHeaderSortable } from '@/components/datatables/header'
import {
  DataTableCellCenter,
  DataTableCellFavorite,
  DataTableCellAvatar,
  DataTableCellState,
  DataTableCellContactNumber
} from '@/components/datatables/cell'
import * as STATIC from '@/constants/static-data'
import * as PATHS from '@/constants/paths'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Prospect = {
  id: string
  name?: string
  state?: string
  contactNumber?: string
  email?: string
  potentialScoreAI?: string
  favorite?: boolean,
  mbti?: string
}


export const columns: ColumnDef<Prospect>[] = [
  {
    accessorKey: 'name',
    meta: {
      label: 'Name'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Name' />,
    cell: data => <DataTableCellAvatar data={data} link={`${PATHS.PATH_APP_PROSPECT}/${data?.row?.original?.id}`} />,
  },
  {
    accessorKey: 'state',
    meta: {
      label: 'State'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='State' />,
    cell: data => <DataTableCellState data={data} currentValue={data.getValue()} />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    sortingFn: (rowA: any, rowB: any, columnId) => {
      const valueA: any = rowA.getValue(columnId)
      const valueB: any = rowB.getValue(columnId)

      const labelA = STATIC.getStatesLabelByValue(valueA)
      const labelB = STATIC.getStatesLabelByValue(valueB)
  
      return labelB < labelA ? 1 : labelB > labelA ? -1 : 0
    }
  },
  {
    accessorKey: 'contactNumber',
    meta: {
      label: 'Contact No'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Contact No' />,
    cell: data => <DataTableCellContactNumber data={data} />
  },
  {
    accessorKey: 'email',
    meta: {
      label: 'Email'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Email' />,
  },
  {
    accessorKey: 'potentialScoreAI',
    meta: {
      label: 'Potential Score AI'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Potential Score AI' center={true} />,
    cell: data => <DataTableCellCenter data={data} isSortable={true} appendValue='%' />
  },
  {
    accessorKey: 'mbti',
    meta: {
      label: 'MBTI'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='MBTI' />,
  },
  {
    accessorKey: 'favorite',
    meta: {
      label: 'Favorite'
    },
    header: '',
    cell: data => <DataTableCellFavorite data={data} currentValue={data.getValue()} />,
    filterFn: (row, id, value) => {
      return value === Boolean(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <DataTableRowActions> 
          <TableRowActions row={row} /> 
        </DataTableRowActions>
      )
    }
  },
]
