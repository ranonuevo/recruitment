/* eslint-disable */
'use client'

import * as React from 'react'
import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react'
import InputDebounced from '@/components/form/InputDebounced'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'


export type Option = {
  label: string
  value: any,
  [key: string]: any
}

type AutoCompleteProps = {
  options: Option[]
  emptyMessage?: string
  value?: Option
  onValueChange?: any, //(value: Option) => void
  isLoading?: boolean
  disabled?: boolean
  placeholder?: string
}

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
  {
    value: '13',
    label: '13',
  },
  {
    value: '14',
    label: '14',
  },
  {
    value: '15',
    label: '15',
  },
]

export default function Combobox({
  options,
  placeholder,
  emptyMessage = '',
  value,
  onValueChange,
  disabled = false,
  isLoading = false,
}: AutoCompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<Option>(value as Option)
  const [
    inputValue, // eslint-disable-line
    setInputValue
  ] = useState<string>(value?.label || '')

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (!input) {
        return
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true)
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === 'Enter' && input.value !== '') {
        const optionToSelect = options.find((option) => option.label === input.value)
        if (optionToSelect) {
          setSelected(optionToSelect)
          onValueChange?.(optionToSelect)
        }
      }

      if (event.key === 'Escape') {
        input.blur()
      }
    },
    [isOpen, options, onValueChange]
  )

  const handleBlur = useCallback(() => {
    setOpen(false)
    // setInputValue(selected?.label)
  }, [selected])

  return (
    <Popover open={isOpen}>
      <PopoverTrigger>
        <InputDebounced
          // ref={inputRef}
          value={inputValue}
          // onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGlobalFilter(String(event.target.value))}
          onChange={(value: String) => setInputValue(String(value))}
          // onValueChange={isLoading? undefined : setInputValue}
          // onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className='text-base'
        />
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <div>test</div>
      </PopoverContent>
    </Popover>
  )
}