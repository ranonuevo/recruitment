import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { useModalConfirm } from '@/hooks/useModalConfirm'
import { XCircle, Pencil } from 'lucide-react'


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
      title: 'Are you absolutely sure?',
      description: 'This action cannot be undone. This will permanently delete the data from our servers.'
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
          <Pencil size={12} /> Edit
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleDelete}>
        <div className='flex gap-2 items-center'>
          <XCircle size={12} /> Delete
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
    </> 
  )
}
