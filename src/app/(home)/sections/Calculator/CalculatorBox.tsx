'use client'

import { useState } from 'react'

import { ButtonSelect } from '@components/ui/ButtonSelect'

export const CalculatorBox = () => {
  const types = [
    { label: 'Parcel', value: 'Parcel' },
    { label: 'LTL & Partials', value: 'LTL & Partials' },
    { label: 'Ocean Shipping', value: 'Ocean Shipping' },
    { label: 'Air Cargo', value: 'Air Cargo' },
    {
      label: 'FTL, Power Only, Drayage,\nor Oversize & Overweight',
      value: 'FTL, Power Only, Drayage, or Oversize & Overweight',
    },
  ]
  const [type, setType] = useState(types[0])
  return (
    <div className="relative bg-[linear-gradient(117deg,#1C194B,0.9%,rgba(47,128,237,0.20)100%)] border border-solid border-[#ffffff30] p-[26px] lg:p-[36px] rounded-[20px]">
      <ButtonSelect options={types} value={type} onChange={setType} />
    </div>
  )
}
