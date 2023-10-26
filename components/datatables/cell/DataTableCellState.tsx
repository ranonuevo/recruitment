import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { getStatesLabelByValue, STATIC_STATES } from '@/constants/static-data'
import clx from '@/utilities/clx'

type DataTableCellStateProps = {
  data: any
  currentValue: any
  isCardView?: boolean
}

export default function DataTableCellState ({
  data,
  currentValue,
  isCardView = false
}: DataTableCellStateProps) {
  const { table, row, column } = data

  const state = getStatesLabelByValue(currentValue) 
  
  const handleState = (newValue: string) => {
    table.options.meta?.updateData(row.index, column.id, newValue)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant='ghost' 
          className={clx(
            'p-0 m-0 h-auto',
            {
              'justify-start min-w-[100px]': !isCardView
            }
          )}
        >
          <span className='bg-primary/10 text-primary p-1 text-xs'>{ state }</span>
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