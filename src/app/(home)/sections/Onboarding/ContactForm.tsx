import React, { useState } from 'react'

import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'

export const ContactForm = () => {
  return (
    <div className="p-3 flex flex-col h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold ">New Contact</div>
          <span>x</span>
        </div>

        <GradientHR />
      </div>
      <div className="pr-3 max-h-[250px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="flex flex-col col-span-2">
            <Input label="*Name" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col">
            <Input label="Title" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col">
            <Input label="Department" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col">
            <Input label="Phone" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col">
            <Input label="Phone Extension" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col">
            <Input label="*Email" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col">
            <Input label="Fax" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col">
            <Input label="Address 1" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col">
            <Input label="Address 2" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col">
            <Input label="City" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col">
            <Input label="State" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col">
            <Input label="Country" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col">
            <Input label="Zip Code 1" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-3">
          <Check label="Primary Contact" />
          <Check label="Payee Contact" />
          <Check label="Bid Request" />
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
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
