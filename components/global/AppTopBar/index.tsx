// 'use client'

import { useAppContext } from '@/hooks/useAppContext'

export default function AppTopBar () {
  let { session } = useAppContext()

  return (
    <div className='py-10'>
      <p className='text-4xl'>
        Good Morning, { session?.user?.name }
      </p>
    </div>
  )
}