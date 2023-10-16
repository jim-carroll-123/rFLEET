import React, { useState } from 'react'
import { BiMinus, BiPlus, BiSolidInfoCircle, BiTrash } from 'react-icons/bi'
import { ImAttachment } from 'react-icons/im'

import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { CountrySelect, countryOptions } from '@components/ui/CountrySelect'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Option, Select, findOption } from '@components/ui/Select'

import StatesMap from './StatesMap'

export const PreferedLanes = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  return (
    <div className="p-3 flex flex-col h-full">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="font-semibold text-lg">Carrier Lanes</div>
            <div className="font-extralight text-[10px]">Select the lanes this carrier runs.</div>
          </div>
          <span>x</span>
        </div>

        <GradientHR />
      </div>
      <div className="pr-3 min-h-[250px] max-h-[350px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
        <div className="my-3">
          <div className="text-input font-semibold text-gray-200 lg:mb-[8px] mb-[6px]">Select Country</div>
          <CountrySelect
            className="z-[100]"
            searchable
            value={findOption(countryOptions, selectedCountry)}
            placeholder="Select a country"
            onChange={({ value }) => setSelectedCountry(value)}
          />
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-[400px]">
            <StatesMap />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Check label={<div className="font-light mt-1">States</div>} />
        </div>
      </div>
      <div>
        <GradientHR />
        <div className="mt-4 flex items-center justify-between">
          <div className="flex">
            <TransparentButton>Decline</TransparentButton>
          </div>
          <div className="flex gap-2">
            <Button>Accept</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
