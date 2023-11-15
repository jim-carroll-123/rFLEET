'use client'

import React from 'react'

import X from '@assets/icons/x-internal.svg'
import { Check } from '@components/ui/CheckInternal'
import { Input } from '@components/ui/InputInternal'

const QuoteSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 grid-rows-6 mt-8 text-[#0C0A09]">
        <div className="col-span-1 row-span-4 bg-white rounded-lg border border-[#B8BEF8] shadow-lg">
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

        <div className="col-span-1 row-span-3 bg-white rounded-lg border border-[#B8BEF8] shadow-lg">
          <div className="flex flex-col p-4">
            <h1 className="text-2xl mb-4">Service</h1>
            <hr></hr>

            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="col-span-2">
                <div className="text-input font-semibold">Ship Date</div>
                <Input placeholder="Search Address Book" />
              </div>
              <div className="col-span-2">
                <div className="text-input font-semibold ">Load Type</div>
                <Input placeholder="Enter company name" />
              </div>
              <div className="col-span-2">Service Options</div>
              <Check label="Signature Options" />
              <Check label="Broker Select" />
              <Check label="Hold at Location" />
              <Check label="Dangerous Goods" />
              <div className="col-span-2">
                You can find dry ice, lithium batteries and non-standard packaging in the package details section.
              </div>
            </div>
            <hr></hr>
            <div className="mt-4">Additional Options</div>

            <div className="flex flex-col gap-3 mt-4">
              <Check label="Add references" />
              <Check label="Email Import shipment label" />
              <Check label="Include a return label" />
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8] shadow-lg">
          <div className="flex flex-col p-4">
            <h1 className="text-2xl">Pickup / Drop Off</h1>
            <hr className="my-3"></hr>
            <div className="col-span-2">
              <div className="text-input font-semibold ">Pickup/Drop Off</div>
              <Input placeholder="Enter company name" />
            </div>
            <hr className="my-3"></hr>
            <p>Find a location</p>
          </div>
        </div>

        <div className="col-span-1 row-span-2 bg-white rounded-lg border border-[#B8BEF8] flex flex-col shadow-lg">
          <div className="p-4 flex flex-col h-full">
            <h1 className="text-2xl ">Delivery To</h1>
            <hr className="my-3"></hr>
            <div className="col-span-2">
              <div className="text-input font-semibold ">Choose Address</div>
              <Input placeholder="Choose Address" />
            </div>
            <div className="flex-grow bg-[#F7F6F5] rounded-lg mt-4 p-4">
              <div>Rashid Sharif</div>
              <div>123 Main Street</div>
              <div>San Francisco, CA 94105</div>
              <div>United States</div>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8] shadow-lg">
          <div className="flex flex-col p-4">
            <h1 className="text-2xl">Billing and Tax IDs</h1>
            <hr className="my-3"></hr>
            <div className="col-span-2">
              <div className="text-input font-semibold ">Bill Transportation cost to*</div>
              <Input placeholder="My account" />
            </div>
            <hr className="my-3"></hr>
            <p>You can find the shipment references in the service options section.</p>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8] shadow-lg">
          <div className="flex flex-col p-4">
            <h1 className="text-2xl">Customs and Clearance</h1>
            <hr className="my-3"></hr>
            <div className="col-span-2">
              <div className="text-input font-semibold ">Bill Transportation cost to*</div>
              <Input placeholder="My account" />
            </div>
            <hr className="my-3"></hr>
            <p>You can find the shipment references in the service options section.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-[#0C0A09] bg-white rounded-lg border border-[#B8BEF8] p-4">
        <h1 className="text-2xl">Package Details</h1>
        <hr className="my-3"></hr>

        <div className="grid grid-cols-2 gap-3 my-4 ">
          <div className="col-span-1">
            <div className="text-input font-semibold ">Bill Transportation cost to*</div>
            <Input placeholder="My account" />
          </div>
          <div className="col-span-1 flex flex-col justify-center gap-2">
            <Check label="Purchase a higher limit of liability" />
            <Check label="Add non-standard packaging, dry ice or lithium batteries" />
          </div>
        </div>

        <hr className="my-3"></hr>

        <div className="flex-grow bg-[#F7F6F5] rounded-lg mt-4 p-4">
          <div className="text-caption font-bold">Dimensions</div>
          <div className="flex lg:flex-row flex-col gap-d-16">
            <div className="flex gap-d-16">
              <Input type="text" placeholder="L" />
              <div className="flex items-center flex-1">
                <X />
              </div>

              <Input type="text" placeholder="W" />
            </div>
            <div className="flex gap-d-16">
              <div className="flex items-center flex-1">
                <X />
              </div>

              <Input type="text" placeholder="H" />
            </div>
          </div>
          <div className="text-caption">Enter dimensions of package</div>
        </div>
      </div>
    </>
  )
}

export default QuoteSection
