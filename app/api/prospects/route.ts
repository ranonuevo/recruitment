import { NextResponse, type NextRequest } from 'next/server'
import leaderData from './leader-data.json'
import recruiterData from './recruiter-data'
import * as ROLES from '@/constants/roles'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const forRole = searchParams.get('for')

  if (forRole === ROLES.ROLE_RECRUITER) {
    return NextResponse.json(recruiterData)
  } 
  
  return NextResponse.json(leaderData)
}