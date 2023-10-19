type DataTableCellLinkedInProps = {
  data: any
}

export default function DataTableCellLinkedIn ({
  data
}: DataTableCellLinkedInProps) {

  let value = ''

  if (data.getValue()) {
    value = `linkedin.com/${data.getValue()}`
  }
  
  return (
    <div>
      { value }
    </div>
  )
}