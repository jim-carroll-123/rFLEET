'use client'

import { useState } from 'react'

import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { Check } from '@components/ui/Check'
import { Input } from '@components/ui/Input'

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
      <ButtonSelect options={types} value={type} onChange={setType} className="mb-[28px]" />
      <div className="lg:grid lg:grid-cols-4 lg:gap-[16px] flex flex-col gap-[30px] lg:mb-[34px] mb-[26px]">
        <div>
          <div className="font-semibold text-white mb-4">Origin*</div>
          <Input transparent placeholder="Where are you shipping from?" className="mb-6" />
          <Check label="Add Extra Pickups" />
        </div>
        <div>
          <div className="font-semibold text-white mb-4">Destination*</div>
          <Input transparent placeholder="Where are you shipping to?" className="mb-6" />
          <Check label="Add Extra Drops" />
        </div>
        <div>
          <div className="font-semibold text-white mb-4">Load Details*</div>
          <Input transparent placeholder="What are you shipping?" className="mb-6" />
        </div>
        <div>
          <div className="font-semibold text-white mb-4">Goods/Commodity</div>
          <Input transparent placeholder="Tell us about your goods" className="mb-6" />
          <Check label="Add More Goods/Commodities" />
        </div>
      </div>
      <div className="flex justify-center">
        <Button size="xl" glossy>
          SEARCH
        </Button>
      </div>
    </div>
  )
}
