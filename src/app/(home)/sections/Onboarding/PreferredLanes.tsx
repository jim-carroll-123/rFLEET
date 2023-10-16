import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMinus, BiPlus, BiSolidInfoCircle, BiTrash } from 'react-icons/bi'
import { ImAttachment } from 'react-icons/im'

import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { CountrySelect, countryOptions } from '@components/ui/CountrySelect'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Option, Select, findOption } from '@components/ui/Select'

import StatesMap from './StatesMap'

type Props = {
  onClose?: () => void
  onSubmit?: () => void
}

export const PreferedLanes = ({ onClose, onSubmit }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.()
  }
  return (
    <div className="p-3 flex flex-col h-full">
      <form onSubmit={onSubmitForm}>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="font-semibold text-lg">Carrier Lanes</div>
              <div className="font-extralight text-[10px]">Select the lanes this carrier runs.</div>
            </div>
            <AiOutlineClose onClick={onClose} className=" cursor-pointer" />
          </div>

          <div className="my-4">
            <GradientHR />
          </div>
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
          <div className="my-4">
            <GradientHR />
          </div>

          <div className="flex justify-between">
            <div>
              <TransparentButton onClick={onClose} type="button">
                Decline
              </TransparentButton>
            </div>
            <div className="flex gap-2">
              <Button type="submit">Accept</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
