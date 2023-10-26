import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { List, Image as ImageIcon } from 'lucide-react'
import { ViewTypeState } from '@/hooks/useDataTable'
import { DATATABLE_VIEW_TYPE_GALLERY, DATATABLE_VIEW_TYPE_LIST } from '@/constants/datatable'

type ViewTypeProps = {
  viewType: ViewTypeState,
  setViewType: React.Dispatch<React.SetStateAction<ViewTypeState>>
}

export default function ViewType ({
  viewType,
  setViewType
}: ViewTypeProps) {

  const ListView = () => (
    <div className='flex w-[120px]'>
      <List size={18} />
      <span className='ml-4'>List View</span>
    </div>
  )

  const GalleryView = () => (
    <div className='flex w-[120px]'>
      <ImageIcon size={18} />
      <span className='ml-4'>Gallery View</span>
    </div>
  )

  return (
    <> 
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='flex'>
            { viewType === DATATABLE_VIEW_TYPE_LIST? (
              <ListView />
            ): (
              <GalleryView />
            )}
          </Button>
        </DropdownMenuTrigger>
      
      <DropdownMenuContent align='center'>
        { viewType === DATATABLE_VIEW_TYPE_LIST? (
            <DropdownMenuItem onClick={() => setViewType(DATATABLE_VIEW_TYPE_GALLERY)}>
              <GalleryView />
          </DropdownMenuItem>
        ): (
          <DropdownMenuItem onClick={() => setViewType(DATATABLE_VIEW_TYPE_LIST)}>
            <ListView />
         </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
     
    </> 
  )
}
