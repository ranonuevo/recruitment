'use client'

import { useState } from 'react'
import DropDown from '@/components/form/DropDown'
import { STATIC_STATES } from '@/constants/static-data'
import { PhoneCall } from 'lucide-react'

type ProfileStateProps = {
  data: any
}
export default function ProfileState ({
  data
}: ProfileStateProps) {
  const { state } = data
  
  let defaultSate = STATIC_STATES[0]
  const stateFound = STATIC_STATES.find(s => s.value === state)
  if (stateFound) {
    defaultSate = stateFound
  }

  const [ selectedState, setSelectedState ] = useState(defaultSate) 

  return (
    <div className='bg-white text-xl'>
      <div className='px-[25px] pt-[25px]'>Prospect State</div>

      <div className='flex items-center justify-between px-[13px] pb-[25px]'>
        <div>
          <DropDown 
            label=''
            options={STATIC_STATES}
            value={selectedState}
            onChange={(o: any) => {
              setSelectedState(o)
            }}
            placeholder='Select State'
            styleController={{
              color: '#4084e3',
              width: '200px',
            }}
            // styleContainer={{
            //   width: '100%'
            // }}
          />
        </div>
        <div className='h-[70px] w-[70px] rounded-full bg-[#eff4ff] flex items-center justify-center cursor-pointer '>
          <PhoneCall size={30} strokeWidth={2} className='text-[#4084e3]' />
        </div>
      </div>
    </div>
  )
}
