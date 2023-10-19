'use client'


import InputDebounced from '@/components/form/InputDebounced'

type DataTableSearchProps = {
  globalFilter: string
  setGlobalFilter: any
}

export default function DataTableSearch ({
  globalFilter,
  setGlobalFilter, 
}: DataTableSearchProps) {
  return (
    <InputDebounced
      placeholder='Search'
      value={globalFilter}
      // onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGlobalFilter(String(event.target.value))}
      onChange={(value: String) => setGlobalFilter(String(value))}
      className='max-w-sm'
    />
  )
}
