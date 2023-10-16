type DataTableCellCenterProps = {
  data: any,
  isSortable: boolean
}

export default function DataTableCellCenter ({
  data,
  isSortable = false
}: DataTableCellCenterProps) {
  return (
    <div className={`flex justify-center ${isSortable? 'pr-[32px]' : 'pr-[8px]'}`}>
      { data.getValue() }
    </div>
  )
}