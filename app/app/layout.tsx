import type { Metadata } from 'next'
import AppLayout from './AppLayout'
import { redirect } from 'next/navigation'
import * as PATHS from '@/constants/paths'
import { getServerSideSession } from '@/libs/auth'

export const metadata: Metadata = {
  title: 'App',
  description: '',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSideSession()
  
  if (!session) {
    redirect(PATHS.PATH_SIGN_IN)
  }

  return (
    <AppLayout session={session}>
      { children } 
    </AppLayout>
  )
}
