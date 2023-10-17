import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import dummyCredentials from '@/constants/dummyCredentials.json'

export const options: NextAuthOptions = {
  pages: {
    signIn: '/',
    error: '/'
  },

  // debug: process.env.NODE_ENV === 'development',
  session: { strategy: 'jwt' },
  secret: 'secret-dummy', // store this in a .env file
  providers: [
    CredentialsProvider({
      name: 'credentials',

      clientId: process.env.REACT_APP_NEXTAUTH_URL,
      clientSecret: process.env.REACT_APP_NEXTAUTH_SECRET,
      // @ts-ignore
      async authorize(credentials) { 
        const user = dummyCredentials.find((c) => c.username === credentials?.email && c.pass === credentials.password)

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          id: user.id,
          role: user.role
        }
      }
      return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
        if (session?.user) {
          session = {
            ...session,
            user: {
              ...session.user,
              id: token.id,
              role: token.role
            }
          }
        }
        return session
    },
  },
}