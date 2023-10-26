// 'use client'

import clx from '@/utilities/clx'
import AvatarProfile from '@/components/global/AppAvatar'
import Link from 'next/link'
import * as PATHS from '@/constants/paths'
import { DataTableRowActions } from '@/components/datatables/tools'
import TableRowActions from './TableRowActions'
import { DataTableCellFavorite } from '@/components/datatables/cell'

type GalleryViewProps = {
  table: any
  row: any
}

type RowType = {
  label?: String
  value: String | React.ReactElement,
  className?: String
}

export default function GalleryView({
  table,
  row
}: GalleryViewProps) {
  const data = row.original
  const currentFavoriteValue = row.getValue('favorite')
  const cellData = {
    table,
    row
  }

  const GalleryRow = ({ label, value, className = ''}: RowType) => (
    <div className='grid grid-cols-[100px_minmax(0,1fr)] mb-2 text-sm'>
      { label && 
        <div className='w-[100px] flex-1'>
          { label }
        </div>
      }
      <div className={clx(
        'pl-5',
        className
      )} >
        {
          typeof value === 'string'? value : (value? value : '')
        }
      </div>
    </div>
  )

  return (
    <div
      key={row.id}
      data-state={row.getIsSelected() && 'selected'}
      className='bg-white rounded-sm p-4 pt-10 max-w-[300px] w-full relative'
    >
      <div className='absolute left-0 top-4 w-full px-4 flex items-center justify-between'>
        <span></span>
        
        <div className='flex items-center'>
          <DataTableCellFavorite 
            data={{
              ...cellData,
              column: {
                id: 'favorite'
              }
            }}
            currentValue={currentFavoriteValue} 
          />

          <DataTableRowActions isVertical={true}> 
            <TableRowActions row={row} /> 
          </DataTableRowActions>
        </div>
      </div>
      
      <div className=''>
        <Link 
          href={`${PATHS.PATH_APP_PROSPECT}/${data?.id}`}
          className={clx(
            'group cursor-pointer',
            'text-center flex flex-col justify-center items-center'
          )}
        >
          <AvatarProfile 
            name={data.name || ''}
            size='large'
          />

          <span className='text-base mt-2 group-hover:underline'>{ data.name || '' }</span>
        </Link>
      </div>
      
      <div className='mt-4'>
        <GalleryRow label='Phone Number' value={data.phoneNumber || ''} className='text-[#4084e3]' />
        <GalleryRow label='Email' value={data.email || ''} />
        <GalleryRow label='Potential Score AI' value={data.potentialScoreAI? `${data.potentialScoreAI}%`: ''} />
      </div>
    </div>
  )
}
