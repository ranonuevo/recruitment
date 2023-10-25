import { Button } from '@/components/ui/button'
import { CheckCircle2, XCircle } from 'lucide-react'

type ProfileActionButtonsProps = {
}
export default function ProfileActionButtons ({}: ProfileActionButtonsProps) {

  return (
    <div className='flex flex-col gap-4 max-w-[220px] w-full self-center'>
      <Button className='flex gap-2 w-full bg-[#47dbb7] hover:bg-[#47dbb7]/80 text-white'>
        <CheckCircle2 size={12} />
        Create Applicant
      </Button>
      <Button className='flex gap-2 w-full bg-[#ef6676] hover:bg-[#ef6676]/80 text-white'>
        <XCircle size={12} />
        Not Proceeding
      </Button>
    </div>
  )
}
