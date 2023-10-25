
import type { Metadata } from 'next'
import Profile from './Profile'
import ProfileState from './ProfileState'
import PersonalDetails from './PersonalDetails'
import ProfileActionButtons from './ProfileActionButtons'
import ProfileActionSearch from './ProfileActionSearch'
import ProfileTabs from './ProfileTabs'
import { getProspect } from '@/libs/prospects'

export const metadata: Metadata = {
  title: 'Prospect Profile'
}

type Params = {
  params: {
    userId: string
  }
}

export default async function Prospect ({ 
  params
}: Params ) {
  const { userId } = params

  const profileData: Promise<any> = getProspect(userId)
  const data = await profileData

  return (
    <div>
      <div className='grid grid-cols-4 gap-5'>
        <div className='pt-[25px]'>
          <Profile />
        </div>
        <div>
          <ProfileState data={data?.user} />
        </div>
        <div className='flex items-center justify-center'>
          <ProfileActionButtons />
        </div>
        <div className='flex justify-end items-start'>
          <ProfileActionSearch />
        </div>
      </div>

      <PersonalDetails data={data?.user} />
      
      <ProfileTabs />
    </div>
  )
}


