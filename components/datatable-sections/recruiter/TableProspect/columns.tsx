'use client'

import { ColumnDef } from '@tanstack/react-table'
import DataTableRowActions from '@/components/datatables/DataTableRowActions'
import DataTableHeaderSortable from '@/components/datatables/DataTableHeaderSortable'
import TableRowActions from './TableRowActions'
import DataTableCellCenter from '@/components/datatables/cell/DataTableCellCenter'
import DataTableCellFavorite from '@/components/datatables/cell/DataTableCellFavorite'
import DataTableCellAvatar from '@/components/datatables/cell/DataTableCellAvatar'
import DataTableCellState from '@/components/datatables/cell/DataTableCellState'
import * as STATIC from '@/constants/static-data'

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
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Name' />,
    cell: data => <DataTableCellAvatar data={data} />,
  },
  {
    accessorKey: 'state',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='State' />,
    cell: data => <DataTableCellState data={data} />,
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
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Contact No' />,
    
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Email' />,
  },
  {
    accessorKey: 'potentialScoreAI',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Potential Score AI' />,
    cell: data => <DataTableCellCenter data={data} isSortable={true} />
  },
  {
    accessorKey: 'mbti',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='MBTI' />,
  },
  {
    accessorKey: 'favorite',
    header: '',
    cell: data => <DataTableCellFavorite data={data} />
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
