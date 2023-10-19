import type { Metadata } from 'next'
import { getServerSideSession } from '@/libs/auth'
import RoleLeaderView from './RoleLeaderView'
import RoleRecruiterView from './RoleRecruiterView'

import { getAllApplicants } from '@/libs/applicants'
import * as ROLES from '@/constants/roles'
import { Prospect as ProspectType } from '@/app/app/(routes)/(dashboard)/(tabs)/prospect/RoleRecruiterView/columns'

export const metadata: Metadata = {
  title: 'Applicant'
}

export default async function Applicant () {
  const { isRecruiter, user } = await getServerSideSession()
  const role = isRecruiter? ROLES.ROLE_RECRUITER : ROLES.ROLE_LEADER

  const prospectsData: Promise<ProspectType[]> = getAllApplicants(role)
  const data = await prospectsData

  if (isRecruiter) {
    return <RoleRecruiterView user={user} data={data} />
  }

  return <RoleLeaderView user={user} data={data} />
}