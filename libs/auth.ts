
import * as PATHS from '@/constants/paths'
import { signOut } from 'next-auth/react'
import { options as authOptions } from '@/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import * as ROLES from '@/constants/roles'
// import { BroadcastChannel } from 'broadcast-channel'
// const logoutChannel = new BroadcastChannel('logout')

// export const clearAuthInAllTabs = () => {
//   logoutChannel.onmessage = (msgs) => { // eslint-disable-line
//     // console.log('msgs', msgs) 
//     clearAuth()
//     logoutChannel.close()
//   }
// }

export async function getServerSideSession () {
  const session: any = await getServerSession(authOptions)
  const { user } = session
  const isRecruiter = user?.role === ROLES.ROLE_RECRUITER
  
  return { user, isRecruiter}
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

