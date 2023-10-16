import {
  Cross2Icon,
} from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import DataTableFacetedFilter from './DataTableFacetedFilter'
import { Button } from '@/components/ui/button'
import { Linkedin, Bot, Globe, GraduationCap } from 'lucide-react'

interface DataTableFilterProps<TData> {
  table: Table<TData>
}

export const sources = [
  {
    value: 'LinkedIn',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    value: 'Virtual Robot',
    label: 'Virtual Robot',
    icon: Bot,
  },
  {
    value: 'Website',
    label: 'Website',
    icon: Globe,
  },
]

export const educations = [
  {
    value: 'Bachelor Degree',
    label: 'Bachelor Degree',
    icon: GraduationCap,
  },
  {
    value: 'Master Degree',
    label: 'Master Degree',
    icon: GraduationCap,
  },
]

export default function DataTableFilter<TData>({
  table,
}: DataTableFilterProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0


  return (
    <div className='mb-3 flex items-center gap-2'>
        {table.getColumn('source') && (
          <DataTableFacetedFilter
            column={table.getColumn('source')}
            title='Source'
            options={sources}
          />
        )}
        {table.getColumn('education') && (
          <DataTableFacetedFilter
            column={table.getColumn('education')}
            title='Education'
            options={educations}
          />
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
