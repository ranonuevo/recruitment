import Input from '@/components/form/Input'
import { useState, useEffect, forwardRef } from 'react'


type InputDebouncedProps = {
  value: string | number
  onChange: any
  debounce?: number
  appendRightContent?: React.ReactElement | null
}

const InputDebounced = forwardRef(({
  value: initialValue,
  onChange,
  debounce = 500,
  appendRightContent = null,
  ...props
}: InputDebouncedProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>, ref: any) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value]) // eslint-disable-line

  return (
    <Input 
      {...props} 
      value={value} 
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
      appendRightContent={appendRightContent}
      ref={ref}
    />
  )
})

InputDebounced.displayName = 'InputDebounced'

export default InputDebounced