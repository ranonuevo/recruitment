'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'

import { DataTableHeaderSortable } from '@/components/datatables/header'
import {
  DataTableRowActions
} from '@/components/datatables/tools'

import TableRowActions from './TableRowActions'
import { 
  DataTableCellCenter,
  DataTableCellFavorite,
  DataTableCellAvatar,
  DataTableCellSource,
  DataTableCellLinkedIn,
  DataTableCellResume,
  DataTableCellContactNumber
} from '@/components/datatables/cell'

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
  resume?: boolean
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
    meta: {
      label: 'Name'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Name' />,
    cell: data => <DataTableCellAvatar data={data} />,
  },
  {
    accessorKey: 'phoneNumber',
    meta: {
      label: 'Phone Number'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Phone Number' />,
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
    accessorKey: 'linkedInProfile',
    meta: {
      label: 'LinkedIn Profile'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='LinkedIn Profile' />,
    cell: data => <DataTableCellLinkedIn data={data}  />
  },
  {
    accessorKey: 'education',
    meta: {
      label: 'Education'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Education' />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'yearWorkOfExperience',
    meta: {
      label: 'Years of Work Experience'
    },
    header: ({ column }) => {
      return (
        <DataTableHeaderSortable 
          column={column} 
          title='Years of Work Experience' 
          styleTitle={{
            minWidth: '80px',
            fontSize: 12
          }}
        />
      )
    },
    cell: data => <DataTableCellCenter data={data} isSortable={true} />
  },
  {
    accessorKey: 'source',
    meta: {
      label: 'Source'
    },
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Source' />,
    cell: data => <DataTableCellSource data={data} />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'potentialScoreAI',
    meta: {
      label: 'Potential Score AI'
    },
    // header: 'Potential Score AI',
    header: ({ column }) => <DataTableHeaderSortable column={column} title='Potential Score AI' />,
    cell: data => <DataTableCellCenter data={data} isSortable={true} appendValue='%' />
  },
  {
    accessorKey: 'resume',
    meta: {
      label: 'Resume'
    },
    header: 'Resume',
    cell: data => <DataTableCellResume data={data} />,
    filterFn: (row, id, value) => {
      return value === Boolean(row.getValue(id))
    },
  },
  {
    accessorKey: 'favorite',
    meta: {
      label: 'Favorite'
    },
    header: '',
    cell: data => <DataTableCellFavorite data={data} />,
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
