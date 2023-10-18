import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { List, Image as ImageIcon } from 'lucide-react'


export default function ViewType () {

  return (
    <> 
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='px-10'>
            View Type
          </Button>
        </DropdownMenuTrigger>
      
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <List size={18} />
          <span className='ml-4'>List View</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ImageIcon size={18} />
          <span className='ml-4'>Gallery View</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
     
    </> 
  )
}
