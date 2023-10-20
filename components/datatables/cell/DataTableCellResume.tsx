
import { FileText } from 'lucide-react'

type DataTableCellResumeProps = {
  data: any
}

export default function DataTableCellResume ({
  data
}: DataTableCellResumeProps) {
  const hasResume = data.getValue() === true
  
  return (
    <div className='flex justify-center'>
      { hasResume? <FileText /> : '' }
    </div>
)
}