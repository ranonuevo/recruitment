import * as React from 'react'
import { Column } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
}

export default function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const isSelected = Boolean(column?.getFilterValue())
  
  return (
    <Button asChild variant='outline' size='sm' className='h-8 border-dashed'>
      <label className='flex items-center cursor-pointer'>
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => {
            column?.setFilterValue(!isSelected)
          }}
          aria-label={title}
        />
        <span className='ml-2'>{ title }</span>
      </label>
    </Button>
  )
}