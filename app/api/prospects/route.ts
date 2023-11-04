import { NextResponse, type NextRequest } from 'next/server'
import leaderData from './leader-data.json'
import recruiterData from './recruiter-data'
import * as ROLES from '@/constants/roles'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const forRole = searchParams.get('for')
  const search = searchParams.get('search')
  
  if (search) {
    const filterSuggestions = recruiterData.filter((o: any) => {
      const formattedValue = search.toString().toLowerCase()
      const formattedLabel = o.name.toString().toLowerCase()
      return formattedLabel.includes(formattedValue)
    })

    return NextResponse.json(filterSuggestions)

  } else {
    if (forRole === ROLES.ROLE_RECRUITER) {
      return NextResponse.json(recruiterData)
    } 
  }

  return NextResponse.json(leaderData)
}