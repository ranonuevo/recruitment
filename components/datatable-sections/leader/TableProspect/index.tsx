// 'use client'

import { columns, Applicant } from '@/components/datatable-sections/leader/TableApplicant/columns'
import DataTable from '@/components/datatables/DataTable'
import ViewType from './ViewType'
import DatePickerWithRange from '@/components/ui/datepicker-with-range'
import { getAllProspects } from '@/libs/prospects'

export default async function TableProspect() {
  const applicantsData: Promise<Applicant[]> = getAllProspects()
  const data = await applicantsData
  
  return (
    <DataTable 
      columns={columns} 
      data={data} 
      contentToolBarLeftContent={
        <>
          <ViewType />
          <DatePickerWithRange />
        </>
      }
    />
  )
}
