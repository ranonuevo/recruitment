
import * as API from '@/constants/api'

export async function getAllApplicants (role: string) {
  // await new Promise(resolve => setTimeout(resolve, 5000))

  const url = `${API.API_APPLICANTS}?for=${role}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch applicants')
  }

  return res.json()
}