
import { Button } from '@/components/ui/button'
import Tabs from './Tabs'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=''>
      <div className='flex justify-between mb-5'>
        <Tabs />

        <Button>Assign Applicant</Button>
      </div>

      { children }
      
    </div>
  )
}
