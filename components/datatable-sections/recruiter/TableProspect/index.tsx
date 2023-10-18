
import { columns, Prospect } from './columns'
import DataTable from '@/components/datatables/DataTable'
import ViewType from './ViewType'
import DatePickerWithRange from '@/components/ui/datepicker-with-range'
import { getAllProspects } from '@/libs/prospects'
import * as ROLES from '@/constants/roles'


export default async function TableProspect() {
  const prospectsData: Promise<Prospect[]> = getAllProspects(ROLES.ROLE_RECRUITER)
  const data = await prospectsData
  
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
