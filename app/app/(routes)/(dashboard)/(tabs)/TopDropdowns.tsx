'use client'

import { useState } from 'react'
import DropDown from '@/components/form/DropDown'

export default function TopDropdowns () {
  const [ selectedPersonel, setSelectedPersonel ] = useState(undefined) 
  const [ selectedRegion, setSelectedRegion ] = useState(undefined) 
  const [ selectedBranch, setSelectedBranch ] = useState(undefined) 
  
  const optionsPersonel = [
    { label: 'Personel 1', value: 'Personel 1' },
    { label: 'Personel 2', value: 'Personel 2' },
  ]
  const optionsRegion = [
    { label: 'Region 1', value: 'Region 1' },
    { label: 'Region 2', value: 'Region 2' },
  ]
  const optionsBranch = [
    { label: 'Branch 1', value: 'Branch 1' },
    { label: 'Branch 2', value: 'Branch 2' },
  ]

  const styleController = { minWidth: 220}

  return (
    <div className='flex gap-2'>
      <DropDown 
        label=''
        options={optionsPersonel}
        value={selectedPersonel}
        onChange={(o: any) => {
          setSelectedPersonel(o)
        }}
        placeholder='Select Personel'
        styleController={styleController}
      />

      <DropDown 
        label=''
        options={optionsRegion}
        value={selectedRegion}
        onChange={(o: any) => {
          setSelectedRegion(o)
        }}
        placeholder='Select Region'
        styleController={styleController}
      />

      <DropDown 
        label=''
        options={optionsBranch}
        value={selectedBranch}
        onChange={(o: any) => {
          setSelectedBranch(o)
        }}
        placeholder='Select Branch'
        styleController={styleController}
      />
    </div>
  )
}


