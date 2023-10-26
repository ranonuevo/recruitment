import { useState } from 'react'
import clx from '@/utils/clx'


type Item = {
  code: string
  title: String
  content: any
}

type AppTabsProps = {
  items: Item[]
  defaultTabSelected?: string
  variant?: 'default' | 'inline'
}

export default function AppTabs ({
  items,
  defaultTabSelected = '',
  variant = 'default'
}: AppTabsProps) {

  const getDefaultTabSelected = () => {
    if (defaultTabSelected) {
      const foundTab = items.find(i => i.code === defaultTabSelected)
      return foundTab? defaultTabSelected : items[0].code
    }
    return items[0].code
  }
  
  const [activeTab, setActiveTab] = useState(getDefaultTabSelected())

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
                  'text-center py-2 cursor-pointer',
                  {
                    'flex-1 border-b-2 border-b-[#efefef]': variant === 'default',
                    'mr-10': variant === 'inline',
                  },
                  variant === 'default' && activeTab === item.code? 'border-b-primary' : 'border-b-[#efefef]',
                  variant === 'inline' && activeTab === item.code? 'text-primary' : '',
                  
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