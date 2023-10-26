'use client'

import Tabs from '../../Tabs'

type RecruiterViewProps = {
  user: any,
  data: any
}

export default function RecruiterView ({
  // user,
  // data
}: RecruiterViewProps) {
  

  return (
    <>
      <div className='mb-5 flex gap-2'>
        <Tabs />
      </div>
    </>
  )
}


