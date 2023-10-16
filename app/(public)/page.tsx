import SignIn from '@/components/SignIn'

export default function Home() {
  return (
    <main className='flex h-full'>
      <aside className='w-[350px] bg-white h-full'>
        <div>
          <SignIn />
        </div>
      </aside>
    </main>
  )
}
