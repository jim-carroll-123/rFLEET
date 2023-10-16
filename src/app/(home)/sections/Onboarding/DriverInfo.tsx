import React, { useState } from 'react'
import { BiEdit, BiPlus, BiSolidCircle, BiSolidInfoCircle, BiTrash } from 'react-icons/bi'

import { Button } from '@components/ui/Button'
import { GradientHR } from '@components/ui/GradientHR'

export const DriverInfo = () => {
  return (
    <div className="p-3 flex flex-col gap-4 h-full">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Please provide your drivers info?</div>
          <span>x</span>
        </div>

        <GradientHR />
        <div className="flex justify-end my-3">
          <Button className="h-10 flex">
            <BiPlus /> Driver
          </Button>
        </div>
      </div>
      <div className="max-h-[250px]  flex-grow overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-blue-500">
        <div className="p-3 lg:rounded-[10px] rounded-[8px] bg-[#1a194990] border border-[#282774] shadow-[0px,4px,4px,0px,rgba(0,0,0,0.25)] backdrop-blur-[25px]">
          <table className="w-full border-collapse">
            <thead className="text-sm font-light border-b w-full">
              <tr className="text-left">
                <th className="px-2 py-4"></th>
                <th className="px-2 py-4">Name</th>
                <th className="px-2 py-4">Driving Lic. Num</th>
                <th className="px-2 py-4">Phone</th>
                <th className="px-2 py-4">Email</th>
                <th className="px-2 py-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-light text-sm">
                <td className="px-2 py-4 flex gap-1">
                  <BiSolidInfoCircle />
                  <BiSolidCircle className="text-red-500" />
                  <BiSolidCircle className="text-yellow-500" />
                  <BiSolidCircle className="text-green-500" />
                </td>
                <td className="px-2 py-4">ADAM</td>
                <td className="px-2 py-4">163456456</td>
                <td className="px-2 py-4">(866) 348-9290</td>
                <td className="px-2 py-4">sales@10roadsexpress.com</td>
                <td className="px-2 py-4 flex gap-2">
                  <BiEdit /> <BiTrash />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex justify-between mt-4">
        <TransparentButton className="border-0">Clear</TransparentButton>
        <div className="flex gap-2">
          <TransparentButton>Cancel</TransparentButton>
          <Button>Apply</Button>
        </div>
      </div> */}
    </div>
  )
}
