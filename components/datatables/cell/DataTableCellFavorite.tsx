
import FavoriteIcon from '@/components/global/Favorite'

type DataTableCellFavoriteProps = {
  data: any
  currentValue: any
}

export default function DataTableCellFavorite ({
  data,
  currentValue
}: DataTableCellFavoriteProps) {
  const { table, row, column } = data
  const isFavorite: boolean = currentValue === true

  const handleFavorite = () => {
    table.options.meta?.updateData(row.index, column.id, !isFavorite)
  }

  return <FavoriteIcon isFavorite={isFavorite} handleToggle={handleFavorite} />
}