import styles from './Checkbox.module.scss' 
import clx from '@/utils/clx'

type CheckboxProps = {
  label?: string,
  name: string,
  error?: string | boolean,
  register?: any,
  isChecked?: boolean,
} & React.ComponentProps<'input'>

const CheckBox = ({
  label = '',
  name,
  error = '',
  id,
  register,
  isChecked = false,
  ...otherProps
}: CheckboxProps) => {



  let inputProps = {
    id: id || name,
    name,
    ...otherProps
  }

  // if react hook form register mounted
  if (register) {
    inputProps = {
      ...inputProps,
      ...register(name)
    }
  } else {
    inputProps = {
      ...inputProps,
      checked: isChecked,
    }
  }

  if (name === 'promotions') {
    // console.log('inputProps', inputProps)
  }
  
  const hasError = error? true : false
  
  return (
    <div className={clx(styles.wrapper, {
      [styles['has-error']]: hasError,
    })}>
      <label>
        <input 
          {...inputProps}
          type="checkbox" 
        />
        <div className={styles.indicator}></div>
        <span className={styles.label}>{ label }</span>
      </label>

    
      { hasError && (<small>{ error } </small>) }
    </div>
  )
}

export default CheckBox