import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buildInitials } from '@/utils/helper/string'


type AppAvatarProps = {
  imgUrl?: string
  name?: string
}

export default function AppAvatar ({
  imgUrl = '',
  name = ''
}: AppAvatarProps) {

  return (
    <Avatar>
      <AvatarImage src={imgUrl} />
      <AvatarFallback>
        { buildInitials(name) }
      </AvatarFallback>
    </Avatar>
)
}