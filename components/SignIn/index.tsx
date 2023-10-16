'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FieldController } from '@/components/form'
import { useForm } from 'react-hook-form'
import { formConfig } from './config'
import { defaultValues } from './default-values'
import { hookFormResolver } from '@/utils/jsonToYupSchema'
import { Button } from '@/components/ui/button'
import * as PATHS from '@/constants/paths'
import { signIn } from 'next-auth/react'


export default function SignIn () {
  const router = useRouter()
  const [error, setError] = useState<String>('')

  const hookForm = useForm({
    mode: 'onTouched',
    resolver: (...o) => hookFormResolver(formConfig, ...o),
    defaultValues: {
      ...defaultValues
    }
  })
  const { 
    handleSubmit, 
    formState: { errors }, // eslint-disable-line
    setValue
  } = hookForm

  const onSubmit = async (data: any) => { 
    setError('')
    // console.log('submit', data) // eslint-disable-line

    try {
      const signin = await signIn('credentials', {
        ...data,
        // callbackUrl: PATHS.PATH_APP_DEFAULT,
        redirect: false
      })

      if (signin?.status === 200) {
        router.push(PATHS.PATH_APP_DEFAULT)
      } else {
        setError('Incorrect email or password.')
        setValue('password', '')
      }

    } catch (error: any) {
      console.log({ error }) // eslint-disable-line
    }
  }

  const displayInput = (name: string) => {
    return (
      <FieldController 
        name={name} 
        // @ts-ignore
        fieldsConfig={formConfig}  
        hookForm={hookForm}
      />
    )
  }

  return (
    <main className='min-h-screen flex items-center justify-center'>
      <section className='w-full p-8 px-8 rounded-lg'>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-3xl font-bold tracking-wide mb-[60px] text-center'>
            Log in
          </h1>

          
          <div className='mb-4'>
            { displayInput('email') }
          </div>
          <div className='mb-4'>
            { displayInput('password') }
          </div>

          <div className='mb-5'>
            { displayInput('agree') }
          </div>
          
          { error? (
            <span className="flex items-center font-medium tracking-wide text-red-500 mb-5">
              { error }
            </span>
          ) : null}
          
          <Button type='submit' className='w-full'>Login</Button>
        </form>
      </section>
    </main>
  )
}