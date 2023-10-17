
import AvatarProfile from '@/components/global/AppAvatar'

type DataTableCellAvatarProps = {
  data: any
}

export default function DataTableCellAvatar ({
  data
}: DataTableCellAvatarProps) {

  return (
    <div className='flex justify-start items-center min-w-[140px]'>
      <div className='mr-2'>
        <AvatarProfile 
          imgUrl={`https://picsum.photos/id/2${data.row.id}/100`}
          name={data.getValue()}
        />
      </div>
      
      <span>{ data.getValue() }</span>
    </div>
    
  )
}