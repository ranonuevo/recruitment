'use client'

import AutoComplete from '@/components/form/AutoComplete'
// import Combobox from '@/components/form/Combobox'
import { useRouter } from 'next/navigation'
import dataDummy from '@/api/prospects/recruiter-data'
import * as PATHS from '@/constants/paths'

type ProfileActionSearchProps = {
  data: any
}
export default function ProfileActionSearch ({
  data
}: ProfileActionSearchProps) {
  const router = useRouter()

  const options =  dataDummy.map((o) => {
    return {
      ...o,
      label: o.name || '',
      value: o.id || '',
    }
  })
  const currentUserId = data.id
  let value: any = undefined
  const userFound = options.find(o => o.id === currentUserId)
  if (userFound) {
    value = userFound
  }

  return (
    <div className=''>
      <AutoComplete 
        value={value}
        onValueChange={(value: any) => {
          const link = `${PATHS.PATH_APP_PROSPECT}/${value?.id}`
          router.push(link)
        }}
        options={options} 
        placeholder='Search Prospect' 
        isLoading={false} 
        emptyMessage='No Prospect available'
      />
      {/* <Combobox 
        value={undefined}
        onValueChange={(value: any) => {
          const link = `${PATHS.PATH_APP_PROSPECT}/${value?.id}`
          router.push(link)
        }}
        options={options} 
        placeholder='Search Prospect' 
        isLoading={false} 
        emptyMessage='No Prospect available'
      /> */}
    </div>
  )
}
