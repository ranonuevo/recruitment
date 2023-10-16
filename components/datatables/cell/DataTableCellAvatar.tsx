
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buildInitials } from '@/utils/helper/string'


type DataTableCellAvatarProps = {
  data: any
}

export default function DataTableCellAvatar ({
  data
}: DataTableCellAvatarProps) {

  return (
    <div className='flex justify-start items-center min-w-[140px]'>
      <Avatar className='mr-2'>
        <AvatarImage src={`https://picsum.photos/id/2${data.row.id}/100`} />
        <AvatarFallback>
          { buildInitials(data.getValue() || '') }
        </AvatarFallback>
      </Avatar>
      
      <span>{ data.getValue() }</span>
    </div>
  )
}