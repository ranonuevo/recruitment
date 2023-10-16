import { Input, DropDown, CheckBox } from '../index'
import { FieldControllerProps } from './types'

const FormikFieldController = ({
  name,
  fieldsConfig,
  formik,
  isDisabled = false
}: FieldControllerProps) => {
  const fieldConfig = fieldsConfig.find(f => f.name === name)
  if (!fieldConfig) {
    return <>{`Config for '${name}' not found.`}</>
  }

  const { fieldProps } = fieldConfig
  const { type,  options, ...otherFieldProps } = fieldProps
  const { values, handleChange, handleBlur, errors, touched, setFieldValue, setFieldTouched } = formik

  const errorText = (touched?.[name] && errors?.[name])? errors?.[name] : ''
  
  const getOptions = () => {
    if (Array.isArray(options)) return options

    if (typeof options === 'string') {
      // if stored in redux/context you can return here
    }

    return []
  }

  switch (type) {
    case 'dropdown': 
      return (
        <DropDown 
          {...otherFieldProps}
          options={getOptions()}
          value={values?.[name]}
          onChange={(o: any) => {
            setFieldValue(name, o)
          }}
          onBlur={() => setFieldTouched(name, true)}
          error={errorText}
          disabled={isDisabled}
        />
      )

    case 'checkbox': 
      return (
        <CheckBox 
          {...otherFieldProps}
          name={name}
          isChecked={values?.[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorText}
          // disabled={isDisabled}
        />
      )

    default:
      return (
        <Input 
          {...otherFieldProps}
          type={type}
          name={name}
          value={values?.[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorText}
          disabled={isDisabled}
        />
      )
  }
}

export default FormikFieldController