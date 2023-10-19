
import AvatarProfile from '@/components/global/AppAvatar'
import Link from 'next/link'
import clx from '@/utils/clx'

type DataTableCellAvatarProps = {
  data: any
  link?: string
}

export default function DataTableCellAvatar ({
  data,
  link
}: DataTableCellAvatarProps) {
  
  const renderContent = () => (
    <>
      <div className='mr-2'>
        <AvatarProfile 
          imgUrl={`https://picsum.photos/id/2${data.row.id}/100`}
          name={data.getValue()}
        />
      </div>
      
      <span>{ data.getValue() }</span>
    </>
  )

  const className = 'flex justify-start items-center min-w-[140px]' 

  if (link) {
    return <Link href={link} className={clx(className, 'cursor-pointer hover:underline')}>{ renderContent() }</Link>
  }

  return (
    <div className={className}>
      { renderContent()}
    </div>
  )
}