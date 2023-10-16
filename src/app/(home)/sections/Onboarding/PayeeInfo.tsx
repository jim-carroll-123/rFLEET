import React, { useState } from 'react'
import { BiSolidInfoCircle } from 'react-icons/bi'

import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { Input } from '@components/ui/Input'
import { Option, Select } from '@components/ui/Select'

const companyTypes = [
  {
    label: 'Sole Proprietor',
    value: 'Sole Proprietor'
  },
  {
    label: 'LLC',
    value: 'LLC'
  },
  {
    label: 'S-Corp',
    value: 'S-Corp'
  },
  {
    label: 'C-Corp',
    value: 'C-Corp'
  },
  {
    label: 'Non-Profit',
    value: 'Non-Profit'
  },
  {
    label: "Gov't",
    value: "Gov't"
  }
]
export const PayeeInfo = () => {
  const [companyType, setCompanyType] = useState<Option>()
  return (
    <div className="p-3 flex flex-col h-full">
      <div>
        <div className="flex items-center justify-between">
          <div className="font-semibold ">Payee Information</div>
          <span>x</span>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-br from-cyan-900 to-indigo-900  my-6"></div>

        <div className=" p-1 border-2 rounded-md mb-6">
          <div className="p-2 rounded-sm text-center bg-primary text-white">Payee Information</div>
        </div>
      </div>
      <div className="pr-3 max-h-[250px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <Check
              label={
                <div className="font-light text-sm flex gap-2 items-center">
                  Billing Information Same as Company Info <BiSolidInfoCircle className="text-lg" />
                </div>
              }
            />
          </div>
          <div className="flex">
            <Check
              label={
                <div className="font-light text-sm flex gap-2 items-center">
                  Submit Payment to Factoring Company <BiSolidInfoCircle className="text-lg" />
                </div>
              }
            />
          </div>

          <div className="flex flex-col ">
            <Input label="*Company" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="Account Payable Contact*" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input
              label={
                <div className="flex items-baseline justify-between">
                  Payee DBA name
                  <Check label={<div className="text-gray-400 text-xs mt-1">Use payee DBA Name</div>} />
                </div>
              }
              labelClassName="text-[15px]  mt-[8px]"
              placeholder=""
            />
          </div>
          <div className="flex flex-col ">
            <Input label="Phone*" labelClassName="text-[15px]  mt-[16px]" placeholder="" />
          </div>

          <div className="flex flex-col ">
            <Input label="*Address 1" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="Phone Extension" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col ">
            <Input label="*Address 2" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="Cell Phone" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col ">
            <Input label="*City" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="Fax" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex z-[100]">
            <Select
              containerClassName="w-full"
              labelClassName="text-[15px]  mt-[8px]"
              label="State/Province"
              placeholder=""
              options={companyTypes}
              value={companyType}
              onChange={(newValue) => setCompanyType(newValue)}
            />
          </div>

          <div className="flex flex-col ">
            <Input label="Federal EIN or Tax ID#(SSN)" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex">
            <Select
              label="*Zip Code"
              containerClassName="w-full"
              labelClassName="text-[15px]  mt-[8px]"
              placeholder=""
              options={companyTypes}
              value={companyType}
              onChange={(newValue) => setCompanyType(newValue)}
            />
          </div>

          <div className="flex flex-col ">
            <Input label="Pay in days" type="number" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div>
            <Check label={<div className="font-light mt-1">Email Settlement Report after payment</div>} />
          </div>
        </div>
        <div>
          <div className="w-full h-[2px] bg-gradient-to-br from-cyan-900 to-indigo-900  my-6"></div>
          <Select
            label="Factoring Company"
            containerClassName="w-full mb-2"
            labelClassName="text-[15px]  mt-[8px]"
            placeholder=""
            options={companyTypes}
            value={companyType}
            onChange={(newValue) => setCompanyType(newValue)}
          />
          <Check label={<div className="font-light mt-1">Remit Payment to Factoring company by default</div>} />
        </div>
      </div>

      <div>
        <div className="w-full h-[2px] bg-gradient-to-br from-cyan-900 to-indigo-900  my-6"></div>

        <div className="flex justify-between">
          <TransparentButton className="border-0">Clear</TransparentButton>
          <div className="flex gap-2">
            <TransparentButton>Cancel</TransparentButton>
            <Button>Apply</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
