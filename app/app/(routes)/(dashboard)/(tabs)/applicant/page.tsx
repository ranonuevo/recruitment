import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getServerSideSession } from '@/libs/auth'
import { getAllApplicants } from '@/libs/applicants'
import * as ROLES from '@/constants/roles'
import { Prospect as ProspectType } from '@/app/app/(routes)/(dashboard)/(tabs)/prospect/RoleRecruiterView/columns'

export const metadata: Metadata = {
  title: 'Applicant'
}

const DynamicRoleRecruiterView = dynamic(() => import('./RoleRecruiterView'), {
  ssr: false
})
const DynamicRoleLeaderView = dynamic(() => import('./RoleLeaderView'), {
  ssr: false
})


export default async function Applicant () {
  const { isRecruiter, user } = await getServerSideSession()
  const role = isRecruiter? ROLES.ROLE_RECRUITER : ROLES.ROLE_LEADER

  const prospectsData: Promise<ProspectType[]> = getAllApplicants(role)
  const data = await prospectsData

  if (isRecruiter) {
    return <DynamicRoleRecruiterView user={user} data={data} />
  }

  return <DynamicRoleLeaderView user={user} data={data} />
}