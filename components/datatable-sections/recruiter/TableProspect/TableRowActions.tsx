import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { useModalConfirm } from '@/hooks/useModalConfirm'
import { CheckCircle2, XCircle, Pencil } from 'lucide-react'


type DataTableActionsProps = {
  row: any
}

export default function TableRowActions ({
  row
}: DataTableActionsProps) {
  const modalConfirm = useModalConfirm()

  const data = row.original

  const handleDelete = () => {
    modalConfirm({
      title: 'Prospect will not proceed.',
      description: 'This action cannot be undone.'
    })
    .then(() => {
      // router.push(PATHS.PATH_HOME)
    })
    .catch(() => {})
  }
  
  return (
    <> 
     <DropdownMenuContent align='end'>
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem
        onClick={() => navigator.clipboard.writeText(data.id)}
      >
        <div className='flex gap-2 items-center'>
          <CheckCircle2 size={12} /> Create Applicant
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleDelete}>
        <div className='flex gap-2 items-center'>
          <XCircle size={12} /> Not Proceeding
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div className='flex gap-2 items-center'>
          <Pencil size={12} /> Edit Profile
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
    </> 
  )
}
