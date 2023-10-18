
import * as API from '@/constants/api'

export async function getAllProspects (role: string = 'leader') {
  
  const url = `${API.API_PROSPECTS}?for=${role}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch prospects')
  }

  return res.json()
}


