import React from 'react';



import { Check } from '@components/ui/CheckInternal'
import { Input } from '@components/ui/InputInternal';


const QuoteSection = () => {
  return (
    <div className="grid grid-cols-2 gap-2 grid-rows-6 mt-5 text-black">
      <div className="col-span-1 row-span-4 bg-white rounded-lg border border-[#B8BEF8]">
        <div className="flex flex-col p-4">
          <h1 className="text-2xl mb-4">Shipping From</h1>
          <hr></hr>

          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="col-span-2">
              <div className="text-input font-semibold">Address Book</div>
              <Input placeholder="Search Address Book" />
            </div>
            <div className="col-span-2">
              <div className="text-input font-semibold ">Company Name</div>
              <Input placeholder="Enter company name" />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">Contact Name</div>
              <Input placeholder="Enter contact name" />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">Email</div>
              <Input placeholder="Enter email" />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">Phone Number</div>
              <Input placeholder="Enter phone number" />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">Phone Extension</div>
              <Input placeholder="Enter extension" />
            </div>
            <div className="col-span-2">
              <div className="text-input font-semibold">Address Line 1</div>
              <Input />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">Address Line 2</div>
              <Input />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">Address Line 3</div>
              <Input />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">Country/Territory</div>
              <Input />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">Postal Code</div>
              <Input />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">State or Province</div>
              <Input />
            </div>
            <div className="col-span-1">
              <div className="text-input font-semibold">City</div>
              <Input />
            </div>
          </div>
          <hr></hr>

          <div className="flex flex-col gap-d-16 mt-4">
            <Check label="Save as default sender details" />
            <div className="flex items-center gap-2">
              <Check label="Save as a new sender in" />
              <Input />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 row-span-3 bg-white rounded-lg border border-[#B8BEF8]">
        <div className="flex flex-col p-4">
          <h1 className="text-2xl ">Service</h1>
          <p className="text-sm ">This is the quote section</p>
        </div>
      </div>

      <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8]">
        <div className="flex flex-col p-4">
          <h1 className="text-2xl ">Quote Section</h1>
          <p className="text-sm ">This is the quote section</p>
        </div>
      </div>

      <div className="col-span-1 row-span-2 bg-white rounded-lg border border-[#B8BEF8]">
        <div className="flex flex-col p-4">
          <h1 className="text-2xl ">Quote Section</h1>
          <p className="text-sm ">This is the quote section</p>
        </div>
      </div>

      <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8]">
        <div className="flex flex-col p-4">
          <h1 className="text-2xl ">Quote Section</h1>
          <p className="text-sm ">This is the quote section</p>
        </div>
      </div>

      <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8]">
        <div className="flex flex-col p-4">
          <h1 className="text-2xl ">Quote Section</h1>
          <p className="text-sm ">This is the quote section</p>
        </div>
      </div>
    </div>
  )
}

export default QuoteSection