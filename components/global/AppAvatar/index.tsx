import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buildInitials } from '@/utils/helper/string'


type AppAvatarProps = {
  imgUrl?: string
  name?: string
  className?: string
}

export default function AppAvatar ({
  imgUrl = '',
  name = '',
  className = ''
}: AppAvatarProps) {

  return (
    <Avatar className={className}>
      <AvatarImage src={imgUrl} />
      <AvatarFallback>
        { buildInitials(name) }
      </AvatarFallback>
    </Avatar>
)
}