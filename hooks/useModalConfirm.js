'use client'

import React, { useState, useRef, useContext, createContext } from 'react'
import ModalConfirmation from '@/components/modals/ModalConfirmation'

// Create Context
const ConfirmContext = createContext()

export const useModalConfirm = () => useContext(ConfirmContext)

export const ConfirmServiceProvider = ({ children }) => {
  const [config, setConfig] = useState({})
  const awaitingPromiseRef = useRef(null)

  const openModal = config => {
    setConfig(config)
    return new Promise((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject }
    })
  }

  const handleClose = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject('close')
    }
    setConfig({})
  }

  const handleConfirm = (data = null) => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve(data)
    }
    setConfig({})
  }
  
  return (
    <>
      <ConfirmContext.Provider value={openModal}>
        {children}
      </ConfirmContext.Provider>

      <ModalConfirmation 
        config={config}
        isOpen={Object.entries(config).length? true : false} 
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
      
      
    </>
  )
}
