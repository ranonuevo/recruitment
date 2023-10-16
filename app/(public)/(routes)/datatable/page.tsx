import { Payment, columns } from './components/columns'
import { DataTable } from './components/DataTable'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      amount: 400,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '2',
      amount: 1200,
      status: 'failed',
      email: 'abc@company.com',
    },
    {
      id: '3',
      amount: 43100,
      status: 'processing',
      email: 'cccct@example.com',
    },
    {
      id: '4',
      amount: 823,
      status: 'processing',
      email: 'bbbb@example.com',
    },
    {
      id: '5',
      amount: 9122,
      status: 'processing',
      email: 'eeeeg@example.com',
    },
    {
      id: '6',
      amount: 5423,
      status: 'processing',
      email: 'aakdot@example.com',
    },
    {
      id: '7',
      amount: 9232,
      status: 'processing',
      email: 'testing101@test.com',
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
