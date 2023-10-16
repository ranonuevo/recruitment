import clx from '@/utils/clx'

type InputProps = {
  label?: string,
  id?: string,
  name?: string,
  type?: string,
  error?: any,
  register?: Function,
} & React.ComponentProps<'input'>

const Input = ({
  type = 'text',
  label = '',
  name,
  error = '',
  register,
  ...otherProps
}: InputProps) => {
  let inputProps = {
    type,
    label,
    name,
    ...otherProps
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
      <input
        {...inputProps}
        // onChange={(e: any,f: any) => console.log(e, f)}
        className={clx(
          'p-2 w-full rounded-lg bg-white p-2 border-[1px] border-gray-300 border-solid',
          'focus:bg-slate-100 focus:outline-none focus:border-slate-400 placeholder:text-gray-400',
          {
            'border-red-500 focus:border-red-500': hasError,
            'bg-slate-100': otherProps?.readOnly,
            'cursor-not-allowed placeholder:text-gray-700 bg-slate-300': otherProps?.disabled,
          }
        )}
      />
      { hasError? (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          { error }
        </span>
      ) : null}
    </div>
  )
}

export default Input