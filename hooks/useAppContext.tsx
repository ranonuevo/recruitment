'use client'

import { createContext, useContext } from 'react'


type AppContextProps = {
  session: any
}

type AppContextProviderProps = {
  children: React.ReactNode,
  session: any
}

export const AppContext = createContext<AppContextProps | null>(null)

export default function AppContextProvider({
  children,
  session
}: AppContextProviderProps) {
  return (
    <AppContext.Provider value={{ session }}>
      { children }
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider')
  }

  return context
}