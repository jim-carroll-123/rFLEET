import React, { useState } from 'react'
import { BiEdit, BiInfoCircle, BiPlus, BiSolidCircle, BiSolidInfoCircle, BiTrash, BiUpload } from 'react-icons/bi'

import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Option, Select } from '@components/ui/Select'

export const InsurancePolicy = () => {
  return (
    <div className="p-3 flex flex-col gap-4 h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Insurance Policies</div>
          <span>x</span>
        </div>

        <GradientHR />
        <div className="flex justify-end my-3">
          <Button className="h-10 flex">
            <BiPlus /> Insurance
          </Button>
        </div>
      </div>
      <div className="max-h-[250px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
        <div className="p-3 lg:rounded-[10px] rounded-[8px] bg-[#1a194990] border border-[#282774] shadow-[0px,4px,4px,0px,rgba(0,0,0,0.25)] backdrop-blur-[25px]">
          <table className="w-full border-collapse">
            <thead className="text-sm font-light border-b w-full">
              <tr className="text-left">
                <th className="px-2 py-4">Type</th>
                <th className="px-2 py-4">*Amount</th>
                <th className="px-2 py-4">*Effective Date</th>
                <th className="px-2 py-4">*Expiration Date</th>
                <th className="px-2 py-4">Email</th>
                <th className="px-2 py-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-light text-sm">
                <td className="px-2 py-4 flex gap-1">Auto Liability</td>
                <td className="px-2 py-4">$1,000,000</td>
                <td className="px-2 py-4">02/20/2021</td>
                <td className="px-2 py-4">02/20/2021</td>
                <td className="px-2 py-4">customers@10roadsexpress.com</td>
                <td className="px-2 py-4 flex gap-2">
                  <BiEdit /> <BiTrash />
                </td>
              </tr>

              <tr className="font-light text-sm">
                <td className="px-2 py-4 flex gap-1">Cargo</td>
                <td className="px-2 py-4">$1,000,000</td>
                <td className="px-2 py-4">02/20/2021</td>
                <td className="px-2 py-4">02/20/2021</td>
                <td className="px-2 py-4">customers@10roadsexpress.com</td>
                <td className="px-2 py-4 flex gap-2">
                  <BiEdit /> <BiTrash />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <TransparentButton>Cancel</TransparentButton>
        </div>
        <Button>Send Request</Button>
      </div>
    </div>
  )
}
