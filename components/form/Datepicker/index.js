// import DatePicker from 'react-datepicker'

const Datepicker = ({
  type = 'text',
  label = '',
  name,
  error = '',
  ...otherProps
}) => {
  let inputProps = {
    type,
    label,
    name,
    ...otherProps
  }

  const hasError = error? true : false

  const handleChange = (e) => {
    // const fakeEvent = {
    //   target: {
    //     value: 'test: ' + e.target.value,
    //     name
    //   },
    //   type: 'change'
    // }
    // console.log(fakeEvent)
    otherProps.onChange(e.target.value)
  }

  const handleBlur = (e) => {
    const fakeEvent = {
      target: {
        value: 'test: ' + e.target.value,
        name
      }
    }
    otherProps.onBlur && otherProps.onBlur(fakeEvent)
  }


  return (
    <div>
      <label htmlFor={name}>{ label }</label>
      <input 
        {...inputProps} 
        onChange={handleChange} 
        onBlur={handleBlur} 
      />
      { hasError? (
        <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
          { error }
        </span>
      ) : null}
    </div>
  )
}

export default Datepicker