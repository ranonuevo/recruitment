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
}
export default function Profile ({}: ProfileProps) {
  return (
    <div className='flex items-center gap-4'>
      <div className=''>
        <AvatarProfile 
          className='w-[100px] h-[100px]'
          imgUrl='https://picsum.photos/id/52/100'
          name='Dehen Loh'
        />
      </div>
      <div className=''>
        <div className='text-2xl'>Dehen Loh</div>
        <div className='text-[10px] text-gray-400 mt-2'>
          <span className='mr-4'>Prospect ID: 3213223</span> 
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
