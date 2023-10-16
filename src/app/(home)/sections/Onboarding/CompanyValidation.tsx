import React, { useState } from 'react'
import { BiCloudUpload, BiSolidInfoCircle, BiUpload } from 'react-icons/bi'

import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { Input } from '@components/ui/Input'
import { Option, Select } from '@components/ui/Select'

export const CompanyValidation = () => {
  return (
    <div className="p-3 flex flex-col h-full">
      <div>
        <div className="flex items-center justify-between">
          <div className="font-semibold ">Company Validation</div>
          <span>x</span>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-br from-cyan-900 to-indigo-900  my-6"></div>

        <div className=" p-1 border-2 rounded-md mb-6">
          <div className="p-2 rounded-sm text-center bg-primary text-white">Upload Company Documents</div>
        </div>
      </div>
      <div className="pr-3 max-h-[250px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
        <div className="flex flex-col gap-3">
          <div className="font-bold">Document Center</div>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="trade-licenses"
                className="flex flex-col gap-4 p-6 items-center justify-center w-full border rounded-lg cursor-pointer "
              >
                <BiUpload className="text-2xl" />
                <p className="font-light text-xs">Trade Licenses</p>

                <input id="trade-licenses" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="incorporate-certeficates"
                className="flex flex-col gap-4 p-6 items-center justify-center w-full border rounded-lg cursor-pointer "
              >
                <BiUpload className="text-2xl" />
                <p className="font-light text-xs">Incorporate Certeficates</p>

                <input id="incorporate-certeficates" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="owner-validation"
                className="flex flex-col gap-4 p-6 items-center justify-center w-full border rounded-lg cursor-pointer "
              >
                <BiUpload className="text-2xl" />
                <p className="font-light text-xs">Owner/Tax Validation</p>

                <input id="owner-validation" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-4">
          <Check label="Carrier Authority*" labelClassName="font-light text-sm" />
          <Check label="Certificate of Good Standing*" labelClassName="font-light text-[13px]" />
          <Check label="W9*" labelClassName="font-light text-[13px]" />
          <Check label="EIN Letter*" labelClassName="font-light text-[13px]" />
          <Check label="SCAC Letter*" labelClassName="font-light text-[13px]" />
          <Check label="Voided Check*" labelClassName="font-light text-[13px]" />
          <Check label="Hazmat License" labelClassName="font-light text-[13px]" />
          <Check label="Smart Way Certified" labelClassName="font-light text-[13px]" />
          <Check label="Delivery of Funds" labelClassName="font-light text-[13px]" />
          <Check label="Clean Air Compliant(CARB)" labelClassName="font-light text-[13px]" />
          <Check label="STA CArd Driver" labelClassName="font-light text-[13px]" />
          <Check label="Owner/Member Identification*" labelClassName="font-light text-[13px]" />
          <Check label="Banded Carrier Status" labelClassName="font-light text-[13px]" />
          <Check label="TWIC Card Driver" labelClassName="font-light text-[13px]" />
        </div>

        <div className="w-full h-[2px] bg-gradient-to-br from-cyan-900 to-indigo-900  my-6"></div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="col-span-2 font-bold ">Licenses & Certificates</div>

          <div className="flex flex-col ">
            <Input label="EIN#" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="D&B" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="MC#" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="DOT#" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>

          <div className="flex flex-col ">
            <Input label="HAZMAT#" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
          </div>
          <div className="flex flex-col ">
            <Input label="SCAC#" labelClassName="text-[15px]  mt-[8px]" placeholder="" />
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
