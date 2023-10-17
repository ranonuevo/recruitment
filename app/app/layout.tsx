import type { Metadata } from 'next'
import AppLayout from './AppLayout'
import { options as authOptions } from '@/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import * as PATHS from '@/constants/paths'

export const metadata: Metadata = {
  title: 'App',
  description: '',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect(PATHS.PATH_SIGN_IN)
  }

  return (
    <AppLayout session={session}>{ children } </AppLayout>
  )
}
