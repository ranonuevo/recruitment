
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getServerSideSession } from '@/libs/auth'
import { getAllProspects } from '@/libs/prospects'
import * as ROLES from '@/constants/roles'
import { Prospect as ProspectType } from '@/app/app/(routes)/(dashboard)/(tabs)/prospect/RoleRecruiterView/columns'

export const metadata: Metadata = {
  title: 'Prospect'
}

const DynamicRoleRecruiterView = dynamic(() => import('./RoleRecruiterView'), {
  ssr: false
})
const DynamicRoleLeaderView = dynamic(() => import('./RoleLeaderView'), {
  ssr: false
})


export default async function Prospect () {
  const { isRecruiter, user } = await getServerSideSession()
  const role = isRecruiter? ROLES.ROLE_RECRUITER : ROLES.ROLE_LEADER

  const prospectsData: Promise<ProspectType[]> = getAllProspects(role)
  const data = await prospectsData

  if (isRecruiter) {
    return <DynamicRoleRecruiterView user={user} data={data} />
  }

  return <DynamicRoleLeaderView user={user} data={data} />
}


