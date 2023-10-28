'use client';

import { useState } from 'react';



import { Button } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { Circle } from '@components/ui/Circle'
import { GradientHR } from '@components/ui/GradientHR'
import { Line } from '@components/ui/Line'
import { Tab } from '@components/ui/TabPane'
import countries from '@json/countries.json'
import { cn } from '@lib/utils'

import { Field } from './types-schemas-constants'

interface ShippingStepsProps {
  shippingStepId: string
  data: any
}

const handleSubmit = async (data: any) => {
  const datatest = {
    rateOptions: {
      carrierIds: ['se-5107649']
    },
    shipment: {
      validateAddress: 'no_validation',
      shipTo: {
        name: 'Amanda Miller',
        phone: '555-555-5555',
        addressLine1: data.toAddress,
        stateProvince: data.toState,
        cityLocality: data.toCity,
        postalCode: data.toPostalCode,
        countryCode: data.toCountry
      },
      shipFrom: {
        companyName: 'Example Corp.',
        name: 'John Doe',
        phone: '111-111-1111',
        addressLine1: data.fromAddress,
        stateProvince: data.fromState,
        cityLocality: data.fromCity,
        postalCode: data.fromPostalCode,
        countryCode: data.fromCountry
      },
      packages: [
        {
          weight: {
            value: data.fields[0].weight,
            unit: 'ounce'
          }
        }
      ]
    }
  }

  try {
    const response = await fetch('/api/shipengine/rates/estimate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datatest)
    })

    console.log('Da Data: ', data)
    const responseData = await response.json()
    console.log('the response: ', responseData)
  } catch (error) {
    alert('Error')
  }
}

const handleButtonClick = (e: { preventDefault: () => void }, data: any) => {
  e.preventDefault()
  handleSubmit(data)
}

export const ShippingSteps = ({ shippingStepId, data }: ShippingStepsProps) => {
  const [isDisplayRate, setDisplayRate] = useState(false)

  const fields: Field[] = data.fields

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-d-16">
        <div className="grow">
          <div className="lg:grid lg:grid-cols-4 gap-d-12 flex flex-col lg:mb-[8px] mb-[6px]">
            <ShippingStep
              target="tab-ship-origin"
              label="Origin"
              className="overflow-x-hidden"
              shippingStepId={shippingStepId}
              setDisplayRate={setDisplayRate}
            >
              {data.fromType ? (
                <div className="flex items-center gap-d-10 text-white font-bold">
                  <div className="flex items-center shrink-0 lg:gap-[4px] gap-[3px]">
                    {
                      <img
                        src={countries.find((country) => country.code === data.fromCountry)?.flag}
                        className="w-[24px] h-[18px]"
                      />
                    }
                  </div>
                  <div className="text-input">{data.fromType}</div>
                </div>
              ) : (
                'Where are you shipping from?'
              )}
            </ShippingStep>
            <ShippingStep
              target="tab-ship-destination"
              label="Destination"
              className="overflow-x-hidden"
              shippingStepId={shippingStepId}
              setDisplayRate={setDisplayRate}
            >
              {data.toType ? (
                <div className="flex items-center gap-d-10 text-white font-bold">
                  <div className="flex items-center shrink-0 lg:gap-[4px] gap-[3px]">
                    {
                      <img
                        src={countries.find((country) => country.code === data.toCountry)?.flag}
                        className="w-[24px] h-[18px]"
                      />
                    }
                  </div>
                  <div className="text-input">{data.toType}</div>
                </div>
              ) : (
                'Where are you shipping to?'
              )}
            </ShippingStep>
            <ShippingStep
              target="tab-ship-load-type"
              label="Load Type"
              className="overflow-x-hidden"
              shippingStepId={shippingStepId}
              setDisplayRate={setDisplayRate}
            >
              {data.parcelType ? (
                <div className="flex items-center gap-d-10 text-white font-bold">
                  <div className="text-input">
                    {data.parcelType === 'Enter Custom Dimensions' ? 'Custom Dimensions' : data.parcelType}
                  </div>
                </div>
              ) : (
                'What are you shipping?'
              )}
            </ShippingStep>
            <ShippingStep
              target="tab-ship-goods-commodity"
              label="Goods/Commodity"
              className="overflow-x-hidden"
              shippingStepId={shippingStepId}
              setDisplayRate={setDisplayRate}
            >
              Goods/Commodity
            </ShippingStep>
          </div>
          <div className="lg:grid lg:grid-cols-4 flex flex-col gap-d-12 lg:mb-[34px] mb-[26px]">
            <Check label="Add Extra Pickups" />
            <Check label="Add Extra Drops" />
            <div className="lg:block hidden" />
            <Check label="Add More Goods/Commodities" />
          </div>
        </div>
        <div className="lg:pt-[32px]">
          <Tab target="tab">
            <Button
              size="sm"
              glossy
              className="lg:w-auto w-full"
              onClick={(e) => {
                handleButtonClick(e, data)
                setDisplayRate(true)
              }}
            >
              Search
            </Button>
          </Tab>
        </div>
      </div>

      {isDisplayRate && (
        <>
          <GradientHR />
          <div className="my-5 text-white font-poppins text-base font-bold leading-6">Load Details</div>
          {/* {fields.length > 1 && (
            <>
              {fields.slice(0, fields.length - 1).map((el, index) => ( */}
          <div className="flex border border-white rounded-d-6 mb-5">
            <div className="shrink-0 text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">Load 44</div>
            <div className="grow text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">5 Boxes/Crates</div>
            <div className="grow text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">4X4</div>
            <div className="flex shrink-0 justify-center items-center lg:px-[40px] px-[30px] lg:py-[20px] py-[15px] hover:cursor-pointer">
              {/* <Delete
                      onClick={() => {
                        let newArray = [...fields]
                        newArray.splice(index, 1)
                        setValue('fields', newArray, { shouldValidate: true })
                      }}
                    /> */}
            </div>
          </div>
          {/* ))}
            </>
          )} */}
          <GradientHR />

          <div className="flex flex-row">
            <div className="bg-gradient-rate-card w-[50%] rounded-lg p-4 my-5 mr-5 border shadow-md">
              <h3 className="text-white font-poppins text-[16px] font-semibold leading-6 mb-4">Sender</h3>
              <h4 className="text-white font-poppins text-[16px] font-semibold leading-6 mb-2">ABC Corporation</h4>
              <p className="text-whit font-poppins text-[14px] font-normal leading-6 mb-4">
                151 Merrimac t, Pittsburgh, PA 15211, United States
              </p>
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-white font-poppins text-[16px] leading-6">Use as return Address</span>
              </div>
            </div>

            <div className="bg-gradient-rate-card w-[50%] rounded-lg p-4 my-5 mr-5 border shadow-md">
              <h3 className="text-white font-poppins text-[16px] font-semibold leading-6 mb-4">Sender</h3>
              <h4 className="text-white font-poppins text-[16px] font-semibold leading-6 mb-2">ABC Corporation</h4>
              <p className="text-whit font-poppins text-[14px] font-normal leading-6 mb-4">
                151 Merrimac t, Pittsburgh, PA 15211, United States
              </p>
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-white font-poppins text-[16px] leading-6">Use as return Address</span>
              </div>
            </div>
          </div>

          <GradientHR />

          <div className="flex border border-white rounded-d-6 my-5 justify-content-center">
            <div className="flex mx-auto">
              {/* Best Value */}
              <div className="p-4 flex flex-row">
                <span>Best Value</span>
                <span className="p-2">
                  <Circle />
                </span>
                <span>2-4 days</span>
                <span className="p-2">
                  <Circle />
                </span>
                <span>$1,575</span>
              </div>
              <div className="p-2">
                <Line />
              </div>

              {/* Quickest */}
              <div className="p-4 flex flex-row">
                <span>Quickest</span>
                <span className="p-2">
                  <Circle />
                </span>
                <span>2-4 days</span>
                <span className="p-2">
                  <Circle />
                </span>
                <span>$1,575</span>
              </div>
              <div className="p-2">
                <Line />
              </div>

              {/* Cheapest */}
              <div className="p-4 flex flex-row">
                <span>Cheapest</span>
                <span className="p-2">
                  <Circle />
                </span>
                <span>2-4 days</span>
                <span className="p-2">
                  <Circle />
                </span>
                <span>$1,575</span>
              </div>
            </div>
          </div>

          {/* FedEx Shipping Details */}
          <div className="fedex-details">
            <h4>FedEx</h4>
            <span>Est. 5 business days</span>
            <div className="route">
              <span>15211, Pittsburgh</span>
              <span>123, Dhaka</span>
            </div>
            <div className="price-time">
              <span>$312.81</span>
              <span>Rate expires: Sep 16, 2023 05:58 (UTC)</span>
            </div>
            <p>
              *Any Pickup request received after 2 PM shipper's local time will be scheduled for the following business
              day.
            </p>
          </div>

          <GradientHR />
        </>
      )}
    </>
  )
}

interface ShippingStepProps extends React.HTMLAttributes<HTMLDivElement> {
  target: string
  label: string
  shippingStepId: string
  children: React.ReactNode
  setDisplayRate: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShippingStep = ({
  target,
  label,
  className,
  children,
  shippingStepId,
  setDisplayRate
}: ShippingStepProps) => {
  return (
    <div>
      <div className={cn('lg:mb-[8px] mb-[6px]', target === shippingStepId ? 'text-white' : 'text-gray')}>
        <span className="font-semibold text-caption">{label}</span>
      </div>
      <Tab
        target={target}
        onClick={() => {
          setDisplayRate(false)
        }}
        className={cn(
          'w-full lg:py-[10px] py-[8px] border-2 border-solid sm:text-sm shadow-sm lg:rounded-lg rounded-md bg-transparent lg:pl-[12px] pl-[8px] lg:pr-[12px] pr-[8px]',
          className,
          target === shippingStepId
            ? 'text-white border-white hover:text-white cursor-default'
            : 'text-gray border-gray hover:text-primary hover:border-primary'
        )}
      >
        {children}
      </Tab>
    </div>
  )
}

const ShippingOption = ({ label, duration, price }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <p className="text-blue-600 font-bold">{label}</p>
      <div className="flex justify-between mt-2">
        <p>{duration}</p>
        <p className="font-bold">${price}</p>
      </div>
    </div>
  )
}