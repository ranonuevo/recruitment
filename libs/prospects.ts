
import * as API from '@/constants/api'

export async function getAllProspects (role: string) {
  
  const url = `${API.API_PROSPECTS}?for=${role}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch prospects')
  }

  return res.json()
}


export async function getProspect (userId: string) {
  const url = `${API.API_PROSPECTS}/${userId}`
  const res = await fetch(url)

  if (!res.ok) throw new Error('Failed to fetch prospect')

  return res.json()
}