import { Skeleton } from '@/components/ui/skeleton'

export default function Loading () {
  return (
    <div>
      <div className='gap-10 flex justify-between'>
        <Skeleton className='w-[40%] h-[40px] mb-3' />
        <Skeleton className='w-[20%] h-[40px] mb-3' />
      </div>
      <Skeleton className='w-full h-[40px] mb-3' />
      <Skeleton className='w-full h-[40px] mb-3' />
      <Skeleton className='w-full h-[40px] mb-3' />
      <Skeleton className='w-full h-[40px] mb-3' />
      <Skeleton className='w-full h-[40px] mb-3' />
      <Skeleton className='w-full h-[40px] mb-3' />
      <div className='gap-10 flex justify-between'>
        <Skeleton className='w-[20%] h-[40px] mb-3' />
        <Skeleton className='w-[30%] h-[40px] mb-3' />
      </div>
    </div>
  )
}


