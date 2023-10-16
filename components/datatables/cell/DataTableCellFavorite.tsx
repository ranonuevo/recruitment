
import { Heart } from 'lucide-react'


type DataTableCellFavoriteProps = {
  data: any
}

export default function DataTableCellFavorite ({
  data
}: DataTableCellFavoriteProps) {
  const { table, getValue, row, column } = data
  const isFavorite: boolean = getValue() === true

  const handleFavorite = () => {
    table.options.meta?.updateData(row.index, column.id, !isFavorite)
  }

  

  return (
    <div className='flex justify-center'>
      {
        isFavorite? (
          <Heart className='fill-[red] cursor-pointer' stroke='0' onClick={handleFavorite} />
        ) : (
          <Heart className='fill-[#b3b3bf] cursor-pointer' stroke='0' onClick={handleFavorite} />
        )
      }
    </div>
  )
}