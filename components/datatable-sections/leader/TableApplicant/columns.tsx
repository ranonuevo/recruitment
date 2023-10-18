'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import DataTableRowActions from '@/components/datatables/DataTableRowActions'
import DataTableHeaderSortable from '@/components/datatables/DataTableHeaderSortable'
import TableRowActions from './TableRowActions'
import { FileText } from 'lucide-react'
import DataTableCellCenter from '@/components/datatables/cell/DataTableCellCenter'
import DataTableCellFavorite from '@/components/datatables/cell/DataTableCellFavorite'
import DataTableCellAvatar from '@/components/datatables/cell/DataTableCellAvatar'
import DataTableCellSource from '@/components/datatables/cell/DataTableCellSource'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Applicant = {
  id: string
  name?: string
  phoneNumber?: string
  email?: string
  linkedInProfile?: string
  education?: string
  yearWorkOfExperience?: number
  source?: string
  potentialScoreAI?: string
  resume?: string
  favorite?: boolean
}


export const columns: ColumnDef<Applicant>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Name' />,
    cell: data => <DataTableCellAvatar data={data} />,
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Phone Number' />,
    
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Email' />,
  },
  {
    accessorKey: 'linkedInProfile',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='LinkedIn Profile' />,
  },
  {
    accessorKey: 'education',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Education' />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'yearWorkOfExperience',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Years of Work Experience' />,
    cell: data => <DataTableCellCenter data={data} isSortable={true} />
  },
  {
    accessorKey: 'source',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Source' />,
    cell: data => <DataTableCellSource data={data} />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'potentialScoreAI',
    // header: 'Potential Score AI',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Potential Score AI' />,
    cell: data => <DataTableCellCenter data={data} isSortable={true} />
  },
  {
    accessorKey: 'resume',
    header: 'Resume',
    cell: () => (
      <div className='flex justify-center'>
        <FileText />
      </div>
    ),
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
