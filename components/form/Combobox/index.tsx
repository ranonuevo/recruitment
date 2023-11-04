/* eslint-disable */
'use client'

import * as React from 'react'
import { useState, useRef, useCallback } from 'react'
import InputDebounced from '@/components/form/InputDebounced'
import { Search } from 'lucide-react'
import { Check, Loader2 } from 'lucide-react'
import clx from '@/utilities/clx'
import Option from './Option'
import { AutoCompleteProps, Suggestion } from './types'

export default function Combobox({
  suggestions,
  onInputChange,
  placeholder,
  showContent,
  emptyMessage = 'No option available',
  suggestionSelected,
  onSelectedSuggestion,
  disabled = false,
  isLoading = false,
}: AutoCompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<Suggestion>(suggestionSelected as Suggestion)
  const [ inputValue, setInputValue ] = useState<string>( '')

  const handleSelectOption = useCallback((selectedOption: Suggestion) => {
    setSelected(selectedOption)
    onSelectedSuggestion?.(selectedOption)

    // This is a hack to prevent the input from being focused after the user selects an option
    // We can call this hack: 'The next tick'
    setTimeout(() => {
      inputRef?.current?.blur()
    }, 0)
  },[onSelectedSuggestion])

  const handleBlur = () => {
    setOpen(false)
  }
  
  const handleFocus = () => {
    setOpen(true)
  }

  let RightIcon = Search
  if (isLoading) {
    RightIcon = Loader2
  }

  return (
    <div className='w-full'>
      <div>
        <InputDebounced
          ref={inputRef}
          value={inputValue}
          onChange={(value: String) => {
            setInputValue(String(value))
            onInputChange(String(value))
          }}
          onBlur={handleBlur}
          onFocus={handleFocus}
          // onKeyDown={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          appendRightContent={
            <RightIcon className={clx(
              'mr-2 h-4 w-4 shrink-0 opacity-50', {
                'animate-spin': isLoading
              }
            )}/>
          }
        />
      </div>


      <div className='mt-1 relative'>
        {isOpen ? (
          <div className='absolute top-0 z-9 w-full rounded-xl bg-stone-50 outline-none animate-in fade-in-0 zoom-in-95'>
            {showContent ? (
              <div className='max-h-[300px] overflow-y-auto overflow-x-hidden ring-1 ring-slate-200 rounded-lg'>
                <ul className={clx(
                    'overflow-hidden text-slate-950',
                    'p-1'
                  )}
                >
                  {(suggestions.length > 0 && !isLoading) && suggestions.map((suggestion) => {
                    const isSelected = selected?.value === suggestion.value
                    return (
                      <Option 
                        key={suggestion.value} 
                        isSelected={isSelected}
                        onClick={() => handleSelectOption(suggestion)}
                      >
                        {isSelected ? <Check className='w-4' /> : null}
                        {suggestion.label}
                      </Option>
                    )
                  })}

                  {(suggestions.length === 0 && !isLoading) && (
                    <Option className='text-slate-500 pointer-events-none'>{ emptyMessage }</Option>
                  )}
                </ul>
              </div>
            ): null }
          </div>
        ) : null}
      </div>
    </div>
  )
}