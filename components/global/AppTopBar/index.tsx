export default function AppTopBar ({
  user
}: any) {

  return (
    <div className='py-10'>
      <p className='text-4xl'>
        Good Morning, { user?.name }
      </p>
    </div>
  )
}