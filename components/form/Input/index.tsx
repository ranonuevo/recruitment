import { forwardRef } from 'react'
import clx from '@/utils/clx'

type InputProps = {
  label?: string,
  id?: string,
  name?: string,
  type?: string,
  error?: any,
  register?: Function,
  appendRightContent?: React.ReactElement | null
} & React.ComponentProps<'input'> & React.RefAttributes<any>

const Input = forwardRef(({
  type = 'text',
  label = '',
  name,
  error = '',
  register,
  appendRightContent = null,
  ...otherProps
}: InputProps, ref: any) => {

  let inputProps = {
    type,
    label,
    name,
    ...otherProps,
    className: clx(
      'p-2 w-full rounded-lg bg-white p-2 flex-1',
      'focus:outline-none',
    )
  }

  // if react hook form register mounted
  if (register) {
    inputProps = {
      ...inputProps,
      ...register(name, {
        disabled: otherProps?.disabled
      })
    }
  }

  const hasError = error? true : false

  return (
    <div>
      {
        label && (<label htmlFor={name} className='mb-2'>{ label }</label> ) 
      }

      <div
        className={clx(
          'flex items-center',
          'w-full rounded-md bg-white border-[1px] border-gray-300 border-solid',
          'focus:bg-slate-100 focus:outline-none focus:border-slate-400 placeholder:slate-gray-400',
          {
            'border-red-500 focus:border-red-500': hasError,
            'bg-slate-100': otherProps?.readOnly,
            'cursor-not-allowed placeholder:text-gray-700 bg-slate-300 disabled:opacity-50': otherProps?.disabled,
          }
        )}
      >
        { ref? <input ref={ref} {...inputProps} /> : <input {...inputProps} /> }

        { appendRightContent && (<span className='pr-2'>{ appendRightContent }</span>) }
      </div>
      { hasError? (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          { error }
        </span>
      ) : null}
    </div>
  )
})

Input.displayName = 'Input'

export default Input