import AvatarProfile from '@/components/global/AppAvatar'
import clx from '@/utilities/clx'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react'

const socials = [
  Facebook,
  Twitter,
  Instagram,
  Linkedin
]

type ProfileProps = {
  data: any
}
export default function Profile ({
  data
}: ProfileProps) {
  return (
    <div className='flex items-center gap-4'>
      <div className=''>
        <AvatarProfile 
          size='large'
          name={data.name}
        />
      </div>
      <div className=''>
        <div className='text-2xl'>{ data.name || '' }</div>
        <div className='text-[10px] text-gray-400 mt-2'>
          <span className='mr-4'>Prospect ID: 3213223{data.id || ''}</span> 
          <span>Interested Position: Senior Agent</span>
        </div>
        

        <div className='flex items-center gap-2 mt-2'>
          {
            socials.map((s, index) => {
              const Icon = s
              return (
                <div key={`social-${index}`} className='bg-gray-500 w-6 h-6 rounded-full flex items-center justify-center'>
                  <Icon 
                    size={18} 
                    strokeWidth={s !== Instagram? 0 : 2} 
                    className={clx(
                      'text-white', {
                        'fill-white': s !== Instagram
                      }
                    )}
                  />
                </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}
