import { FileText } from 'lucide-react'

type PersonalDetailsProps = {
  data: any
}

type RowType = {
  label?: String
  value: String | React.ReactElement
}

export default function PersonalDetails ({
  data
}: PersonalDetailsProps) {
  
  const Row = ({ label, value}: RowType) => (
    <div className='flex mb-4'>
      { label && 
        <div className='w-[220px] text-[#4084e3]'>
          { label }
        </div>
      }
      <div className='flex-1'>
        {
          typeof value === 'string'? value : (value? value : '')
        }
      </div>
    </div>
  )

  return (
    <section className="mt-10 w-full bg-white p-5">
      <h3 className='text-lg'>Personal Details</h3>

      <div className='grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_25%] gap-4 text-sm mt-4'>
        <div>
          <Row label='Name' value={data?.name} />
          <Row label='Last Name' value={data?.lastName} />
          <Row label='Contact No' value={data?.contactNumber} />
          <Row label='Address' value={data?.address} />
          <Row label='Email' value={data?.email} />
          <Row label='Resume' value={<FileText className='cursor-pointer' />} />
        </div>

        <div>
          <Row label='Years of Experience' value={data?.yearWorkOfExperience} />
          <Row label='Highest Education' value={data?.highestEducation} />
          <Row label='Language Skills' value={data?.languageSkills} />
          <Row label='Current Employment Status' value={data?.currentEmployedStatus} />
          <Row label='Current Salary' value={data?.currentSalary} />
          <Row label='Expected Salary' value={data?.expectedSalary} />
        </div>

        <div>
          <Row label='Potential Score AI' value={data?.potentialScoreAI? `${data?.potentialScoreAI}%` : ''} />
          <Row value='With relevant work experience , high education and language skills' />

          <div className='my-5'></div>

          <Row label='MBTI' value={data?.mbti} />
          <Row value={`
              With analytical abilities and adaptability, good at paying attention to detail and policy analysis.
              However, may need to work on communication, people skills and sales abilities...
            `} 
          />
        </div>
      </div>

    </section>
  )
}
