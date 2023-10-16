import { 
  Input,
  CheckBox,
  DropDown
} from '@/components/form'
import { FieldControllerProps } from './types'
import { Controller } from 'react-hook-form'

const FieldController = ({
  name,
  fieldsConfig,
  hookForm
}: FieldControllerProps) => {
  const fieldConfig = fieldsConfig.find(f => f.name === name)
  if (!fieldConfig) {
    return <>{`Config for '${name}' not found.`}</>
  }

  const { fieldProps } = fieldConfig
  const { type, label, options, ...otherFieldProps } = fieldProps
  const { register, watch, getValues, setValue, control, formState: { errors } } = hookForm
  const value = getValues(name)
  const errorText = errors[name]?.message || ''
  let isFieldDisabled = false


  // ##### Disabled thing
  if ('disabled' in otherFieldProps) {
    if (typeof otherFieldProps.disabled === 'function') {
      const values = watch()
      isFieldDisabled = otherFieldProps.disabled(values, name)
    } else {
      isFieldDisabled = otherFieldProps.disabled
    }
  }
  otherFieldProps.disabled = isFieldDisabled
  // ##### End disabled thing


  if (name == 'categories' || name == 'countries') {
    // console.log(name, otherFieldProps)
  }
  
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
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            // console.log('field', field)
            return (
            <DropDown 
              {...otherFieldProps}
              {...field}
              label={label}
              options={getOptions()}
              value={value}
              onChange={(o: any) => {
                setValue(name, o, {
                  shouldValidate: true,
                  shouldDirty: true
                })
              }}
              // onBlur={() => setFieldTouched(name, true)}
              error={errorText}
              // register={register}
            />
          )}}
        />
      )

    case 'checkbox': 
      return (
        <CheckBox 
          {...otherFieldProps}
          name={name}
          label={label}
          error={errorText}
          register={register}
        />
      )

    default:
      return (
        <Input 
          {...otherFieldProps}
          type={type}
          name={name}
          label={label}
          error={errorText}
          register={register}
        />
      )
  }
}

export default FieldController