export const formConfig = [
  {
    name: 'name',
    fieldProps: {
      type: 'input',
      label: 'Name (Read Only)',
      placeholder: 'Ex. John Doe',
      readOnly: true,
      disabled: false
    },
    validation: {
      type: 'string',
      label: ['Name'],
      required: null,
    }
  },
  {
    name: 'email',
    fieldProps: {
      type: 'input',
      label: 'Email (Disabled)',
      placeholder: 'example@domain.com',
      readOnly: false,
      disabled: false
    },
    validation: {
      type: 'string',
      label: ['Email'],
      required: null,
      email: null
    }
  },

  // Dependency
  {
    name: 'age',
    fieldProps: {
      type: 'input',
      label: 'Age',
      placeholder: '21',
      readOnly: false,
      disabled: false
    },
    validation: {
      type: 'string',
      label: ['Age'],
      required: null,
    }
  },
  {
    name: 'drinks',
    fieldProps: {
      type: 'input',
      label: 'Drinks (Enable: Age >=21)',
      placeholder: 'Wine',
      readOnly: false,
      disabled: (values, name) => { // eslint-disable-line
        return !values.age || parseInt(values.age) < 21
      }
    },
    mandatoryWhen: (values, name) => { // eslint-disable-line
      return values.age && parseInt(values.age) >= 21
    },
    validation: {
      type: 'string',
      label: ['Drinks'],
      required: null,
    }
  },


  
  {
    name: 'password',
    fieldProps: {
      type: 'password',
      label: 'Password',
      placeholder: '***********',
    },
    validation: {
      type: 'string',
      label: ['Password'],
      required: null,
      test: [
        ['numeric'],
        ['numeric-equal-length', 3]
      ]
    }
  },
  {
    name: 'confirmPassword',
    fieldProps: {
      type: 'password',
      label: 'Confirm Password',
      placeholder: '***********',
    },
    validation: {
      type: 'string',
      label: ['Confirm Password'],
      required: null,
      oneOfRef: ['password', 'Password and confirm password fields value must be matched'],
    }
  },



  {
    name: 'categories',
    fieldProps: {
      type: 'dropdown',
      label: 'Categories',
      multiple: true,
      placeholder: 'Select categories',
      options: [
        { label: 'Singapore', value: 'Singapore', id: {}, name: 123 },
        { label: 'Japan', value: 'Japan', a:false },
        { label: 'Kyoto', value: 'Kyoto' },
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Russia', value: 'Russia' },
        { label: 'Manila', value: 'Manila' },
        { label: 'Laguna', value: 'Laguna' },
        { label: 'MyanmarrzzzMyanmarrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', value: 'Myanmar' },
        { label: 'The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It is situated in the western Pacific Ocean and consists of around 7,641 islands that are broadly categorized under three main geographical divisions from north to south: Luzon, Visayas, and Mindanao.', value: 'Philippines' }
      ]
    },
    validation: {
      type: 'array',
      label: ['Categories'],
      min: [2, 'Select atleast 2 categories.']
    }
  },
  {
    name: 'countries',
    fieldProps: {
      type: 'dropdown',
      label: 'Countries',
      multiple: false,
      placeholder: 'Select countries',
      disabled: true,
      options: [
        { label: 'Singapore', value: 'Singapore', id: {}, name: 123 },
        { label: 'Japan', value: 'Japan', a:false },
        { label: 'Kyoto', value: 'Kyoto' },
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Russia', value: 'Russia' },
        { label: 'Manila', value: 'Manila' },
        { label: 'Laguna', value: 'Laguna' },
        { label: 'MyanmarrzzzMyanmarrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', value: 'Myanmar' },
        { label: 'The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It is situated in the western Pacific Ocean and consists of around 7,641 islands that are broadly categorized under three main geographical divisions from north to south: Luzon, Visayas, and Mindanao.', value: 'Philippines' }
      ]
    },
    validation: {
      type: 'object',
      required: null,
    }
  },
  {
    name: 'agree',
    fieldProps: {
      type: 'checkbox',
      label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      readOnly: false,
      disabled: false
    },
    validation: {
      type: 'boolean',
      required: null,
      test: [
        ['must-boolean-true', 'You must agree first.']
      ]
    }
  },
  {
    name: 'promotions',
    fieldProps: {
      type: 'checkbox',
      label: 'Receive Future Promotions (Disabled)',
      disabled: true
    },
    validation: {
      type: 'boolean',
      required: null,
      test: [
        ['must-boolean-true', 'You must accept promotions.']
      ]
    }
  },



  {
    name: 'dummy',
    fieldProps: {
      type: 'input',
      label: 'Dummy Field (Disabled through form specific value)',
      placeholder: 'Ex. qwerty',
      readOnly: false,
      disabled: (values, name) => { // eslint-disable-line
        return values.isDummyFieldDisabled 
      }
    },
    validation: {
      type: 'string',
      label: ['Dummy'],
      required: null,
    }
  },
]
