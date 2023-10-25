import { NextResponse, type NextRequest } from 'next/server'
import recruiterData from '../recruiter-data'

type Params = { 
  params: { userId: number } 
}

export async function GET(request : NextRequest, { params }: Params ) {
  const { userId } = params
  
  const res = recruiterData.find(r => r.id == userId)
  
  if (res) {
    return NextResponse.json({message: 'ok', user: res })
  }

  return NextResponse.json({message: 'error'}, { status: 404  })
}