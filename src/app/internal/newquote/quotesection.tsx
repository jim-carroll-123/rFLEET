'use client'

import React from 'react'

import X from '@assets/icons/x-internal.svg'
import { Check } from '@components/ui/CheckInternal'
import { Input } from '@components/ui/InputInternal'

const QuoteSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 grid-rows-6 mt-8 text-[#0C0A09]">
        <div className="col-span-1 row-span-4 bg-white rounded-lg border border-[#B8BEF8] shadow-md">
          <div className="flex flex-col p-4">
            <div className="flex justify-between mb-4">
              <h1 className="text-[18px] font-semibold leading-6">Shipping From</h1>
              <div className="bg-[#141943] text-white text-[12px] rounded-md px-2 flex items-center">Required</div>
            </div>

            <hr></hr>

            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="col-span-2">
                <div className="text-input font-medium leading-6">Address Book</div>
                <Input placeholder="Search Address Book" />
              </div>
              <div className="col-span-2">
                <div className="text-input font-medium leading-6">Company Name</div>
                <Input placeholder="Enter company name" />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">Contact Name</div>
                <Input placeholder="Enter contact name" />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">Email</div>
                <Input placeholder="Enter email" />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">Phone Number</div>
                <Input placeholder="Enter phone number" />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">Phone Extension</div>
                <Input placeholder="Enter extension" />
              </div>
              <div className="col-span-2">
                <div className="text-input font-medium leading-6">Address Line 1</div>
                <Input />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">Address Line 2</div>
                <Input />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">Address Line 3</div>
                <Input />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">Country/Territory</div>
                <Input />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">Postal Code</div>
                <Input />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">State or Province</div>
                <Input />
              </div>
              <div className="col-span-1">
                <div className="text-input font-medium leading-6">City</div>
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

        <div className="col-span-1 row-span-3 bg-white rounded-lg border border-[#B8BEF8] shadow-md">
          <div className="flex flex-col p-4">
            <div className="flex justify-between mb-4">
              <h1 className="text-[18px] font-semibold leading-6">Service</h1>
              <div className="bg-[#141943] text-white text-[12px] rounded-md px-2 flex items-center">Required</div>
            </div>
            <hr></hr>

            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="col-span-2">
                <div className="text-input font-medium leading-6">Ship Date</div>
                <Input placeholder="Search Address Book" />
              </div>
              <div className="col-span-2">
                <div className="text-input font-medium leading-6">Load Type</div>
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

        <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8] shadow-md">
          <div className="flex flex-col p-4">
            <div className="flex justify-between">
              <h1 className="text-[18px] font-semibold leading-6">Pickup / Drop Off</h1>
              <div className="bg-[#141943] text-white text-[12px] rounded-md px-2 flex items-center">Required</div>
            </div>
            <hr className="my-3"></hr>
            <div className="col-span-2">
              <div className="text-input font-medium leading-6">Pickup/Drop Off</div>
              <Input placeholder="Enter company name" />
            </div>
            <hr className="my-3"></hr>
            <p>Find a location</p>
          </div>
        </div>

        <div className="col-span-1 row-span-2 bg-white rounded-lg border border-[#B8BEF8] flex flex-col shadow-md">
          <div className="p-4 flex flex-col h-full">
            <div className="flex justify-between">
              <h1 className="text-[18px] font-semibold leading-6">Deliver to</h1>
              <div className="bg-[#141943] text-white text-[12px] rounded-md px-2 flex items-center">Required</div>
            </div>
            <hr className="my-3"></hr>
            <div className="col-span-2">
              <div className="text-input font-medium leading-6">Choose Address</div>
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

        <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8] shadow-md">
          <div className="flex flex-col p-4">
            <div className="flex justify-between">
              <h1 className="text-[18px] font-semibold leading-6">Billing and Tax IDs</h1>
              <div className="bg-[#141943] text-white text-[12px] rounded-md px-2 flex items-center">Required</div>
            </div>{' '}
            <hr className="my-3"></hr>
            <div className="col-span-2">
              <div className="text-input font-medium leading-6">Bill Transportation cost to*</div>
              <Input placeholder="My account" />
            </div>
            <hr className="my-3"></hr>
            <p>You can find the shipment references in the service options section.</p>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-white rounded-lg border border-[#B8BEF8] shadow-md">
          <div className="flex flex-col p-4">
            <div className="flex justify-between">
              <h1 className="text-[18px] font-semibold leading-6">Customs Clearance</h1>
              <div className="bg-[#141943] text-white text-[12px] rounded-md px-2 flex items-center">Required</div>
            </div>
            <hr className="my-3"></hr>
            <div className="col-span-2">
              <div className="text-input font-medium leading-6 mb-1">Bill Transportation cost to*</div>
              <Input placeholder="My account" />
            </div>
            <hr className="my-3"></hr>
            <p>You can find the shipment references in the service options section.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-[#0C0A09] bg-white rounded-lg border border-[#B8BEF8] p-4 shadow-md">
        <h1 className="text-base font-semibold leading-6">Package Details</h1>
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

        <div className="flex-grow bg-[rgb(247,246,245)] rounded-lg mt-4 p-4">
          <div className="flex gap-6">
            <div>
              <div className="text-caption font-bold">No of packages</div>
              <Input type="text" placeholder="1" />
            </div>

            <div>
              <div className="text-caption font-bold">Weight per Package</div>
              <Input type="text" placeholder="Weight" />
            </div>

            <div>
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
            </div>
          </div>
        </div>

        <h1 className="text-base font-semibold leading-6 my-5">Commodity</h1>

        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2">
            <div className="text-input font-semibold ">Commodity</div>
            <Input placeholder="Start typing..." />
          </div>

          <div className="col-span-2">
            <div className="text-input font-semibold ">Cargo Value</div>
            <Input placeholder="Enter cargo value" />
          </div>

          <div className="col-span-1">
            <div className="text-input font-semibold ">Currency</div>
            <Input placeholder="USD" />
          </div>

          <div className="col-span-2">
            <div className="text-input font-semibold ">Schedule B</div>
            <Input placeholder="Start typing..." />
          </div>
        </div>
      </div>
    </>
  )
}

export default QuoteSection
