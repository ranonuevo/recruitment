// 'use client'

import Input from '@/components/form/Input'
import { Search } from 'lucide-react'

type ProfileActionSearchProps = {
}
export default function ProfileActionSearch ({}: ProfileActionSearchProps) {

  return (
    <div className=''>
      <Input 
        type='text'
        placeholder='Search Prospect'
        appendRightContent={
          <Search size={16} />
        }
      />

    </div>
  )
}
