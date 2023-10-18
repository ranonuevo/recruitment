import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { getStatesLabelByValue, STATIC_STATES } from '@/constants/static-data'

type DataTableCellStateProps = {
  data: any
}

export default function DataTableCellState ({
  data
}: DataTableCellStateProps) {
  const { table, getValue, row, column } = data

  const state = getStatesLabelByValue(getValue()) 
  
  const handleState = (newValue: string) => {
    table.options.meta?.updateData(row.index, column.id, newValue)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='m-0 p-0 h-auto text-left justify-start min-w-[100px]'>
          { state }
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>State</DropdownMenuLabel>

        {
          STATIC_STATES.map((s, index: number) => {
            return (
              <DropdownMenuItem
                key={`state-${s.id}-${index}`}
                onClick={() => handleState(s.value)}
              >
                { s.label }
              </DropdownMenuItem>
            )
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}