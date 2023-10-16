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
export const CompanyInfo = () => {
  const [companyType, setCompanyType] = useState<Option>()
  return (
    <div className="p-3 flex flex-col h-full">
      <div>
        <div className="flex items-center justify-between">
          <div className="font-semibold ">Owner and Company Information?</div>
          <span>x</span>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-br from-cyan-900 to-indigo-900  my-6"></div>

        <div className=" p-1 border-2 rounded-md mb-6">
          <div className="p-2 rounded-sm text-center bg-primary text-white">Company Information</div>
        </div>
      </div>
      <div className="pr-3 max-h-[250px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="">
              Company
            </label>
            <Check
              label={
                <div className="font-semibold flex gap-2 items-center">
                  Carrier <BiSolidInfoCircle className="text-lg" />
                </div>
              }
            />
          </div>
          <div className="flex">
            <Select
              label="Company Type*"
              placeholder="Select Company Type"
              options={companyTypes}
              value={companyType}
              onChange={(newValue) => setCompanyType(newValue)}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-8">
          <div className="flex flex-col ">
            <Input label="Date Established On*" labelClassName="text-[15px]  mt-[8px]" placeholder="MM-DD-YYYY" />
          </div>
          <div className="flex flex-col ">
            <Input label={<Check label={<div className="">Company MC#</div>} />} />
          </div>
          <div className="flex flex-col ">
            <Input label={<Check label={<div className="">Company DTO#</div>} />} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-8">
          <div className="flex flex-col ">
            <Input label="Company Name*" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="Owner Name/Managing Member*" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="DBA name (doing business as)" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="Company's Phone*" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col ">
            <Input label="* Address 1" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="Phone Extension" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col ">
            <Input label="* Address 2" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="Cell Phone" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col ">
            <Input label="* City" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
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
            <Input label="Website" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
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
            <Input label="Company Email" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
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
