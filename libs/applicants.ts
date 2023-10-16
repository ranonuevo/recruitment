
import * as API from '@/constants/api'

export async function getAllApplicants () {
  // await new Promise(resolve => setTimeout(resolve, 5000))

  const res = await fetch(API.API_APPLICANTS)

  if (!res.ok) {
    throw new Error('Failed to fetch applicants')
  }

  return res.json()
}

export async function getApplicant (id: string) {
  const res = await fetch(`${API.API_APPLICANTS}/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch applicant')
  }

  return res.json()
}

