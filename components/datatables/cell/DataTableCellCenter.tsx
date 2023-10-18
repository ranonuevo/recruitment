type DataTableCellCenterProps = {
  data: any,
  isSortable: boolean
  appendValue?: string
}

export default function DataTableCellCenter ({
  data,
  isSortable = false,
  appendValue = ''
}: DataTableCellCenterProps) {
  return (
    <div className={`flex justify-center ${isSortable? 'pr-[32px]' : 'pr-[8px]'}`}>
      { data.getValue() }{ appendValue }
    </div>
  )
}