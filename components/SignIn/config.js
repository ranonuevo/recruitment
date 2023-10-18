export const formConfig = [
  {
    name: 'email',
    fieldProps: {
      type: 'input',
      label: 'Email',
      placeholder: 'example@gmail.com',
      readOnly: false,
      disabled: (values, name) => { // eslint-disable-line
        return values.isLoading
      },
    },
    validation: {
      type: 'string',
      label: ['Email'],
      required: null,
      // email: null
    }
  },
  {
    name: 'password',
    fieldProps: {
      type: 'password',
      label: 'Password',
      placeholder: '*********',
      disabled: (values, name) => { // eslint-disable-line
        return values.isLoading
      },
    },
    validation: {
      type: 'string',
      label: ['Password'],
      required: null,
    }
  },
  {
    name: 'agree',
    fieldProps: {
      type: 'checkbox',
      label: 'Remember me',
      readOnly: false,
      disabled: false
    },
    validation: {
      type: 'boolean',
    }
  },
]
