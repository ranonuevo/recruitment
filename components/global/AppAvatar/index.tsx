
import clx from '@/utilities/clx'
import { buildInitials } from '@/utils/helper/string'


type AppAvatarProps = {
  name?: string
  size?: 'small' | 'large'
  className?: string
}

export default function AppAvatar ({
  name = '',
  className = '',
  size = 'small'
}: AppAvatarProps) {

  return (
    <div className={clx(
      'relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full',
      {
        'h-[100px] w-[100px] text-3xl': size === 'large'
      },
      className
    )}>
      <div className={clx(
        'flex h-full w-full items-center justify-center',
        'rounded-full bg-slate-200'
      )}>
        { buildInitials(name) }
      </div>
    </div>
)
}