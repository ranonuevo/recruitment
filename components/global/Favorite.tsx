
import { Heart } from 'lucide-react'


type FavoriteIconProps = {
  isFavorite: boolean
  handleToggle: any
}

export default function FavoriteIcon ({
  isFavorite,
  handleToggle
}: FavoriteIconProps) {
  return (
    <div className='flex justify-center'>
      {
        isFavorite? (
          <Heart className='fill-[red] cursor-pointer' stroke='0' onClick={handleToggle} />
        ) : (
          <Heart className='fill-[#b3b3bf] cursor-pointer' stroke='0' onClick={handleToggle} />
        )
      }
    </div>
  )
}