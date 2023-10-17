
import * as PATHS from '@/constants/paths'
import { signOut } from 'next-auth/react'
import { BroadcastChannel } from 'broadcast-channel'

const logoutChannel = new BroadcastChannel('logout')


export const clearAuthInAllTabs = () => {
  logoutChannel.onmessage = (msgs) => { // eslint-disable-line
    // console.log('msgs', msgs) 
    clearAuth()
    logoutChannel.close()
  }
}


export const clearAuth = (isPushState = false) => {
  // logoutChannel.postMessage('Logout')
  
  signOut({
    callbackUrl: PATHS.PATH_SIGN_IN
  })

  if (isPushState) {
    // window.history.pushState({}, '', PATHS.PATH_SIGN_IN)
  } else {
    // window.location.href = PATHS.PATH_SIGN_IN
  }
}

export const isRoleRecruiter = () => {
  return true
  // const credentials = getAuthCredentials()
  // return credentials?.role === ROLES.ROLE_RECRUITER
}