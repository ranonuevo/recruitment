'use client'

type AppTopBarProps = {
  user: any
}

export default function AppTopBar ({
  user
}: AppTopBarProps) {
  return (
    <div className='py-10'>
      <p className='text-4xl'>
        Good Morning, { user?.name }
      </p>
    </div>
  )
}