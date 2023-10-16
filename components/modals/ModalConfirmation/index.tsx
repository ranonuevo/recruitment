'use client'

import {
  AlertDialog,
  AlertDialogAction,
  // AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'


type Config = {
  title: string,
  description: string
  // children: React.ReactNode
  // size?: 'small' | 'large'
  // dismissOnClickOutside?: boolean
  // disableClose?: boolean
}

type ModalConfirmationProps = {
  config: Config
  isOpen: boolean
  handleClose?: () => void
  handleConfirm?: () => void
}

const ModalConfirmation = ({
  config,
  isOpen = false,
  handleClose,
  handleConfirm
}: ModalConfirmationProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{ config.title }</AlertDialogTitle>
          <AlertDialogDescription>
            { config?.description }
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel> */}
          <Button variant='outline' onClick={handleClose}>Cancel</Button>
          <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ModalConfirmation