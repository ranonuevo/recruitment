import { useState } from 'react'
import clx from '@/utils/clx'


type Item = {
  code: string
  title: string
  content: any
}

type AppTabsProps = {
  items: Item[]
}

export default function AppTabs ({
  items
}: AppTabsProps) {
  const [activeTab, setActiveTab] = useState(items[0].code)

  return (
    <div className='w-full'>
      
      <div className='flex'>
        {
          items.map((item, index) => {
            return (
              <div 
                key={`${item.code}-${index}`}
                onClick={() => setActiveTab(item.code)}
                className={clx(
                  activeTab === item.code? 'border-b-primary' : 'border-b-[#efefef]',
                  'flex-1 text-center border-b-2 border-b-[#efefef] py-2 cursor-pointer',
                )}
              >
                { item.title }
              </div>
            )
          })
        }
      </div>

      <div className='pt-3'>
        {
          items.map((item, index) => {
            return (
              <div 
                className={clx(
                  activeTab === item.code? 'block' : 'hidden',
                  ''
                )}
                key={`${item.code}-content-${index}`}
              >
                { item.content }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}