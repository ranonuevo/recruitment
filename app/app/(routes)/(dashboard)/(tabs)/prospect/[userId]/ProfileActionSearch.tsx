'use client'

import { useState, useRef, useEffect } from 'react'
import Combobox from '@/components/form/Combobox'
import { useRouter } from 'next/navigation'
import * as PATHS from '@/constants/paths'
import { searchProspect } from '@/libs/prospects'

const formatOptionObj = (prospect: any) => {
  return {
    ...prospect,
    label: prospect.name || '',
    value: prospect.id || '',
  }
}

type ProfileActionSearchProps = {
  data: any
}

export default function ProfileActionSearch ({
  data
}: ProfileActionSearchProps) {
  const abortControllerRef: any = useRef(null)
  const router = useRouter()
  const [suggestions, setSuggestions] = useState<any>([])
  const [isShowContent, setIsShowContent] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const currentProspect = formatOptionObj(data)

  useEffect(() => {
    return () => {
      // Cleanup function to abort any pending requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  const handleInputChange = async (term: string) => {
    // Abort any pending requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }


    if (term) {
      setIsLoading(true)

      const newAbortController = new AbortController()
      abortControllerRef.current = newAbortController
      
      searchProspect(newAbortController.signal, term).then((res) => {
        const prospectSuggestions = res.map((prospect: any) => {
          return formatOptionObj(prospect)
        })
        setIsShowContent(true)
        setSuggestions(prospectSuggestions)
        setIsLoading(false)
      }).catch(e => {
        if (e.name === 'AbortError') {
          // console.log('abort request')
        }
      })
    } else {
      setIsShowContent(false)
      setSuggestions([])
      setIsLoading(false)
    }
  }
  
  return (
    <div className=''>
      <Combobox 
        suggestionSelected={currentProspect}
        suggestions={suggestions} 
        onInputChange={handleInputChange}
        onSelectedSuggestion={(value: any) => {
          const link = `${PATHS.PATH_APP_PROSPECT}/${value?.id}`
          router.push(link)
        }}
        placeholder='Search Prospect' 
        emptyMessage='No prospect available'
        showContent={isShowContent}
        isLoading={isLoading} 
      />
    </div>
  )
}
