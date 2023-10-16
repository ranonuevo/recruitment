'use client'

import { FieldController } from '@/components/form'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { formConfig } from './config'
import { defaultValues } from './default-values'
import { hookFormResolver } from '@/utils/jsonToYupSchema'
import { Button } from '@/components/ui/button'

export default function Page () {

  const hookForm = useForm({
    mode: 'onTouched',
    resolver: (...o) => hookFormResolver(formConfig, ...o),
    defaultValues: {
      ...defaultValues,
      isDummyFieldDisabled: true // special key
    }
  })
  const { 
    handleSubmit, 
    formState: { errors } // eslint-disable-line
  } = hookForm

  const onSubmit = async (data: Object) => { 
    console.log('submit', data) // eslint-disable-line

    try {
      await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      
      
    } catch (error : any) {
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
    <div>
      <main className='min-h-screen flex items-center justify-center my-10'>
        <section className='w-full max-w-[600px] bg-slate-200 p-8 px-8 rounded-lg'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-bold tracking-wide text-center'>
              Create account
            </h1>
            <p className='text-center text-sm mt-2'>
              Have an account already? &nbsp;
              <Link href='/' className='hover:underline'>Sign in here.</Link>
            </p>
            <p className='text-center text-sm mt-2'>
              Note: When field is disabled, it removed required validation and the value become undefined when submitted.
            </p>
            
            <div className='mt-8'>
              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                  { displayInput('name') }
                </div>
                <div>
                  { displayInput('email') }
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                  { displayInput('age') }
                </div>
                <div>
                  { displayInput('drinks') }
                </div>
              </div>
              
              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                  { displayInput('password') }
                </div>
                <div>
                  { displayInput('confirmPassword') }
                </div>
              </div>


              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                  { displayInput('categories') }
                </div>
                <div>
                  { displayInput('countries') }
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                  { displayInput('dummy') }
                </div>
                <div>
                </div>
              </div>

              <div className='mb-4'>
                { displayInput('agree') }
              </div>
              <div className='mb-4'>
                { displayInput('promotions') }
              </div>
            </div>
            
            <Button type='submit' className='w-full' variant='outline'>Create</Button>
          </form>
        </section>
      </main>
    </div>
  )
}