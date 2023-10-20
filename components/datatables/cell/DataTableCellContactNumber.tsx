import Link from 'next/link'

type DataTableCellContactNumberProps = {
  data: any
}

export default function DataTableCellContactNumber ({
  data
}: DataTableCellContactNumberProps) {
  const value = data.getValue()

  if (value) {
    return (
      <Link 
        href={`tel: ${value}`} 
        className='hover:underline text-[#3e6abb] w-[120px] flex'>
          { value}
      </Link>
    )
  }

  return ''
}