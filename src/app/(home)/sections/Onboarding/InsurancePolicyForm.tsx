import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { Button, TransparentButton } from '@components/ui/Button'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Option, Select } from '@components/ui/Select'

const insuranceTypes = [
  {
    label: 'General Liability',
    value: 'General Liability'
  },
  {
    label: 'Auto Liability',
    value: 'Auto Liability'
  },
  {
    label: 'Cargo',
    value: 'Cargo'
  }
]

type Props = {
  onClose?: () => void
  onSubmit?: () => void
}
export const InsurancePolicyForm = ({ onClose, onSubmit }: Props) => {
  const [insuranceType, setInsuranceType] = useState<Option>()
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.()
  }
  return (
    <div className="p-3 flex flex-col h-full">
      <form onSubmit={onSubmitForm}>
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold ">New Insurance Policy Details</div>
            <AiOutlineClose onClick={onClose} className=" cursor-pointer" />
          </div>

          <div className="my-4">
            <GradientHR />
          </div>
        </div>
        <div className="pr-3 max-h-[300px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
          <div className="grid grid-cols-4 gap-4 my-4">
            <div className="flex flex-col col-span-2">
              <Select
                label="*Type"
                containerClassName="w-full"
                labelClassName="text-[15px]  mt-[8px]"
                placeholder=""
                options={insuranceTypes}
                value={insuranceType}
                onChange={(newValue) => setInsuranceType(newValue)}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <Input label="Insurer" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
            </div>
            <div className="flex flex-col col-span-2">
              <Input label="*Amount" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
            </div>
            <div className="flex flex-col col-span-2">
              <Input label="Policy#" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
            </div>

            <div className="flex flex-col col-span-2">
              <Input label="*Effective Date" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
            </div>

            <div className="flex flex-col col-span-2">
              <Input label="*Expiration Date" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
            </div>

            <div className="flex flex-col col-span-2">
              <Input label="Phone" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
            </div>
            <div className="flex flex-col col-span-2">
              <Input label="Email" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
            </div>
          </div>
        </div>

        <div>
          <div className="my-4">
            <GradientHR />
          </div>

          <div className="flex justify-between">
            <TransparentButton className="border-0" type="reset">
              Clear
            </TransparentButton>
            <div className="flex gap-2">
              <TransparentButton onClick={onClose} type="button">
                Cancel
              </TransparentButton>
              <Button type="submit">Add</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
