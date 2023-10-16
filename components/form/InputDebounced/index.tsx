import Input from '@/components/form/Input'
import { useState, useEffect } from 'react'


type InputDebouncedProps = {
  value: string | number
  onChange: any
  debounce?: number
}

export default function InputDebounced({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: InputDebouncedProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
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
    />
  )
}