import { Button } from '@/components/ui/button'

type EngagementProps = {
}
export default function Engagement ({}: EngagementProps) {
  
  return (
    <div className=''>
      <div className='p-4 bg-[#fafafb] flex justify-between pl-[50px]'>
        <div>Meeting Name</div>
        <div>Status</div>
        <div>Meeting Method</div>
        <div>Time</div>
        <div>Date</div>
        <div>Location</div>
        <div>Interviewer</div>
      </div>
      <div className='h-[150px] w-full relative flex items-center justify-center p-4 border-gray-400 border-solid border'>
        <span className='text-black'>No meetings are scheduled</span>
        <Button 
          size='sm' 
          className='bg-[#fef3eb] hover:bg-[#fef3eb]/80 text-[#f7b477] absolute right-4 bottom-4'
        >
          Schedule
        </Button>
      </div>

      <div className='p-4 bg-[#fafafb] flex justify-between pl-[50px]'>
        <div>Meeting Notes</div>
      </div>
      <div className='h-[150px] w-full relative flex items-center justify-center p-4 border-gray-400 border-solid border'>
        <span className='text-black'>No meetings notes are added</span>
        <Button 
          size='sm' 
          className='bg-[#fef3eb] hover:bg-[#fef3eb]/80 text-[#f7b477] absolute right-4 bottom-4'
        >
          Add Note
        </Button>
      </div>
    </div>
  )
}
