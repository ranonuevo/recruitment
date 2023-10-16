
import * as API from '@/constants/api'

export async function getAllProspects () {
  const res = await fetch(API.API_PROSPECTS)

  if (!res.ok) {
    throw new Error('Failed to fetch prospects')
  }

  return res.json()
}


