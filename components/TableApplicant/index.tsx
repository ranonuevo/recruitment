// 'use client'

import { columns, Applicant } from './columns'
import DataTable from '@/components/datatables/DataTable'
import ViewType from './ViewType'
import DatePickerWithRange from '@/components/ui/datepicker-with-range'
import { getAllApplicants } from '@/libs/applicants'

export default async function TableApplicant() {
  const applicantsData: Promise<Applicant[]> = getAllApplicants()
  const data = await applicantsData
  
  return (
    <DataTable 
      columns={columns} 
      data={data} 
      toolbarLeftContent={
        <>
          <ViewType />
          <DatePickerWithRange />
        </>
      }
    />
  )
}
