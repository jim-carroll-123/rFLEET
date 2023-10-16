import React, { useState } from 'react'

import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Radio } from '@components/ui/Radio'

export const DriverForm = () => {
  return (
    <div className="p-3 flex flex-col h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold ">Add Driver</div>
          <span>x</span>
        </div>

        <GradientHR />
      </div>
      <div className="pr-3 max-h-[250px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
        <div className="grid grid-cols-4 gap-4 my-4">
          <div className="flex flex-col col-span-2">
            <Input label="*Name" labelClassName="text-[15px]  mt-[8px]" placeholder="Enter driver name" />
          </div>
          <div className="flex flex-col col-span-2">
            <Input label="Cell Phone" labelClassName="text-[15px]  mt-[8px]" placeholder="Enter driver name" />
          </div>
          <div className="flex flex-col col-span-2">
            <Input label="Email" type="email" labelClassName="text-[15px]  mt-[8px]" placeholder="Enter driver name" />
          </div>
          <div className="flex flex-col col-span-2">
            <Input
              label="Driving License Number"
              labelClassName="text-[15px]  mt-[8px]"
              placeholder="Enter driver name"
            />
          </div>

          <Check label="Active*" labelClassName="font-light " />
          <Check label="Flagged" labelClassName="font-light " />
          <Radio label="Email Instructions" />
          <Radio label="Text Instructions" />
        </div>
      </div>

      <div>
        <div className="my-6">
          <GradientHR />
        </div>

        <div className="flex justify-between">
          <TransparentButton className="border-0">Clear</TransparentButton>
          <div className="flex gap-2">
            <TransparentButton>Cancel</TransparentButton>
            <Button>Add</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
