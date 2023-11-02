'use client'

import { useState } from 'react'

import { set } from 'mongoose'

import Delete from '@assets/icons/delete.svg'
import IconDHL from '@assets/icons/dhl.svg'
import IconFedEx from '@assets/icons/fedex.svg'
import IconPostalService from '@assets/icons/postal-service.svg'
import uPsLogo from '@assets/images/UPS-logo.png'
import { Button } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { Circle } from '@components/ui/Circle'
import { GradientHR } from '@components/ui/GradientHR'
import { Line } from '@components/ui/Line'
import { LineRate } from '@components/ui/LineRate'
import { Location } from '@components/ui/Location'
import { Pencil } from '@components/ui/Pencil'
import { Plane } from '@components/ui/Plane'
import { Star } from '@components/ui/Star'
import { Tab } from '@components/ui/TabPane'
import countries from '@json/countries.json'
import { cn } from '@lib/utils'

import { Field } from './types-schemas-constants'

const carrierProviderIcons: any = {
  USPS: <IconPostalService />,
  FedEx: <IconFedEx />,
  DHL: <IconDHL />,
  UPS: <img src={uPsLogo.src} />
}
interface ShippingStepsProps {
  shippingStepId: string
  data: any
}

const handleSubmit = async (
  data: any,
  setRates: React.Dispatch<React.SetStateAction<any>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const datatest = {
      rateOptions: {
        carrierIds: ['se-5107649']
      },
      shipment: {
        validateAddress: 'no_validation',
        shipTo: {
          name: data.toName,
          phone: '555-555-5555',
          addressLine1: data.toAddress,
          stateProvince: data.toState,
          cityLocality: data.toCity,
          postalCode: data.toPostalCode,
          countryCode: data.toCountry
        },
        shipFrom: {
          companyName: 'Example Corp.',
          name: data.fromName,
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
            },
            dimensions: {
              unit: 'inch',
              length: data.fields?.[0].length,
              width: data.fields?.[0].width,
              height: data.fields?.[0].height
            }
          }
        ]
      }
    }

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
    setRates(responseData)
    setIsLoading(false)
  } catch (error) {
    setIsLoading(false)
    alert('Please fill out all the fields.')
  }
}

const handleButtonClick = (
  e: { preventDefault: () => void },
  data: any,
  setRates: React.Dispatch<React.SetStateAction<any>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault()
  handleSubmit(data, setRates, setIsLoading)
}

export const ShippingSteps = ({ shippingStepId, data }: ShippingStepsProps) => {
  const [isDisplayRate, setDisplayRate] = useState(false)
  const [rates, setRates] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const [selected, setSelected] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setSelected(index)
  }

  const getBgColor = (index: number) => {
    if (selected === index) {
      return 'bg-blue-500'
    }
    return ''
  }

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
                setIsLoading(true)

                handleButtonClick(e, data, setRates, setIsLoading)
                setDisplayRate(true)
              }}
            >
              {isDisplayRate ? <Pencil /> : 'Search'}
            </Button>
          </Tab>
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {Object.keys(rates).length === 0 ? (
            <div>No Data</div>
          ) : (
            <div>
              {isDisplayRate && (
                <div className="backdrop-blur -mx-[24px] px-[24px] -mb-[24px] pb-[24px]">
                  <GradientHR />
                  <div className="my-5 text-white font-poppins text-[16px] font-bold leading-6">Load Details</div>
                  {/* {fields.length > 1 && (
                <>
                  {fields.slice(0, fields.length - 1).map((el, index) => ( */}
                  <div className="flex border border-white rounded-d-6 mb-5">
                    <div className="shrink-0 text-[14px] lg:px-[30px] px-[23px] lg:py-[15px] py-[10px]">Load 1</div>
                    <div className="grow text-[14px] lg:px-[60px] px-[53px] lg:py-[15px] py-[10px]">
                      {(rates as any).packages?.[0]?.packageCode}
                    </div>
                    <div className="grow text-[14px] lg:px-[30px] px-[23px] lg:py-[15px] py-[10px]">
                      {(rates as any).packages?.[0]?.dimensions.length}X{(rates as any).packages?.[0]?.dimensions.width}
                      X{(rates as any).packages?.[0]?.dimensions.height} {(rates as any).packages?.[0]?.dimensions.unit}
                      {' / '}
                      {(rates as any).packages?.[0]?.weight.value} {(rates as any).packages?.[0]?.weight.unit}
                      {'s'}
                    </div>
                    <div className="flex shrink-0 justify-center items-center lg:px-[40px] px-[30px] lg:py-[15px] py-[10px] hover:cursor-pointer">
                      <Delete
                      // onClick={() => {
                      //   let newArray = [...fields]
                      //   newArray.splice(index, 1)
                      //   setValue('fields', newArray, { shouldValidate: true })
                      // }}
                      />
                    </div>
                  </div>
                  {/* ))}
                </>
              )} */}
                  <GradientHR />

                  <div className="flex flex-row">
                    <div className="bg-gradient-rate-card w-[50%] rounded-lg p-4 my-5 mr-5 border border-[#4f5684] shadow-md">
                      <div className="flex flex-row">
                        <h3 className="text-white font-poppins text-[16px] font-semibold leading-6 mb-4">Sender</h3>
                        <div className="ml-auto">
                          <Tab
                            target="tab-ship-origin"
                            onClick={() => {
                              setDisplayRate(false)
                            }}
                          >
                            <Button size="sm">
                              <Pencil />
                            </Button>
                          </Tab>
                        </div>
                      </div>
                      <h4 className="text-white font-poppins text-[16px] font-semibold leading-6 mb-2">
                        {(rates as any).shipFrom?.name}
                      </h4>
                      <p className="text-whit font-poppins text-[14px] font-normal leading-6 mb-4">
                        {(rates as any).shipFrom?.addressLine1}, {(rates as any).shipFrom?.cityLocality},{' '}
                        {(rates as any).shipFrom?.stateProvince} {(rates as any).shipFrom?.postalCode},{' '}
                        {(rates as any).shipFrom?.countryCode}
                      </p>
                      <div className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 mr-2" />
                        <span className="text-white font-poppins text-[16px] leading-6">Use as return Address</span>
                      </div>
                    </div>

                    <div className="bg-gradient-rate-card w-[50%] rounded-lg p-4 my-5 border border-[#4f5684] shadow-md">
                      <div className="flex flex-row">
                        <h3 className="text-white font-poppins text-[16px] font-semibold leading-6 mb-4">Receiver</h3>
                        <div className="ml-auto">
                          <Tab
                            target="tab-ship-destination"
                            onClick={() => {
                              setDisplayRate(false)
                            }}
                          >
                            <Button size="sm">
                              <Pencil />
                            </Button>
                          </Tab>
                        </div>
                      </div>
                      <h4 className="text-white font-poppins text-[16px] font-semibold leading-6 mb-2">
                        {(rates as any).shipTo?.name}
                      </h4>
                      <p className="text-whit font-poppins text-[14px] font-normal leading-6 mb-4">
                        {(rates as any).shipTo?.addressLine1}, {(rates as any).shipTo?.cityLocality},{' '}
                        {(rates as any).shipTo?.stateProvince} {(rates as any).shipTo?.postalCode},{' '}
                        {(rates as any).shipTo?.countryCode}
                      </p>
                      <div className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 mr-2" />
                        <span className="text-white font-poppins text-[16px] leading-6">Use as return Address</span>
                      </div>
                    </div>
                  </div>

                  <GradientHR />

                  <div className="flex border border-white rounded-d-6 my-5 p-1 justify-content-center">
                    <div className="flex w-[100%]">
                      {/* Best Value */}
                      <div
                        className={`p-4 w-[33%] flex flex-row justify-center items-center cursor-pointer rounded-md ${getBgColor(
                          0
                        )}`}
                        onClick={() => handleClick(0)}
                      >
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

                      <div className="p-1 pt-2">
                        <Line />
                      </div>

                      {/* Quickest */}
                      <div
                        className={`p-4 w-[33%] flex flex-row justify-center items-center cursor-pointer rounded-md ${getBgColor(
                          1
                        )}`}
                        onClick={() => handleClick(1)}
                      >
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
                      <div className="p-1 pt-2">
                        <Line />
                      </div>

                      {/* Cheapest */}
                      <div
                        className={`p-4 w-[33%] flex flex-row justify-center items-center cursor-pointer rounded-md ${getBgColor(
                          2
                        )}`}
                        onClick={() => handleClick(2)}
                      >
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

                  {(rates as any).rateResponse?.rates.map((rate: any, index: number) => (
                    <div key={index} className="bg-gradient-rate-card rounded-lg p-4 my-4 pr-0 border border-[#4f5684]">
                      <div className="flex mx-auto">
                        <div className="w-[25%]">
                          <div className="border border-[#4f5684] rounded-md w-[70px] text-[10px] leading-4 pl-2 py-1 bg-gradient-rate-card">
                            Best Value
                          </div>
                          <div className="flex flex-row mt-4">
                            <div className="bg-white w-[200px] rounded-sm">
                              <div className="p-3 flex justify-center items-center">
                                {
                                  carrierProviderIcons[
                                    (rates as any).rateResponse?.rates[index].serviceType?.trim().split(' ')[0]
                                  ]
                                }
                              </div>
                            </div>

                            <div className="mt-3 ml-2">
                              <Star />
                            </div>
                            <div className="mt-4 ml-1 mr-2">(4.5)</div>
                          </div>
                          <div className="w-[200px] pt-1 flex justify-center items-center">
                            {(rates as any).rateResponse?.rates[index].serviceType}{' '}
                          </div>
                        </div>
                        <div className="p-2">
                          <LineRate />
                        </div>
                        <div className="p-4 mt-3 w-[47%]">
                          <div className="pb-6 flex flex-row">
                            <div className="text-white font-poppins text-sm font-normal leading-4 pr-2">Est. </div>
                            <div className="text-white font-poppins text-sm font-semibold leading-4">
                              {(rates as any).rateResponse?.rates[index].carrierDeliveryDays} business days
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <Location />
                            <div className="ml-2 mr-6">
                              {(rates as any).shipFrom?.postalCode?.trim().split('-')[0]},{' '}
                              {(rates as any).shipFrom?.cityLocality}
                            </div>
                            <Plane />
                            <div className="mx-2 mr-5 "></div>
                            <Location />
                            <div className="ml-2">
                              {(rates as any).shipTo?.postalCode?.trim().split('-')[0]},{' '}
                              {(rates as any).shipTo?.cityLocality}
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <LineRate />
                        </div>
                        <div className="py-4 pt-6 flex flex-row">
                          <div className="ml-2">
                            <div className="flex flex-row">
                              <div className="text-white text-right font-poppins text-[30px] font-semibold leading-9 pb-5 pr-6">
                                $
                                {Number((rates as any).rateResponse?.rates[index].shippingAmount?.amount || 0).toFixed(
                                  2
                                )}
                              </div>

                              <Button size="md" className="lg:w-auto w-full h-10">
                                Select
                              </Button>
                            </div>
                            <div className="flex flex-row">
                              <div className="text-white font-poppins text-[12px] font-normal leading-4 pr-2 pt-[2px]">
                                Rate expires:{' '}
                              </div>
                              <div className="text-white font-poppins text-[14px] font-medium leading-5">
                                Sep 16, 2023 05:58 (UTC)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {(rates as any).rateResponse?.invalidRates.map((rate: any, index: number) => (
                    <div key={index} className="bg-gradient-rate-card rounded-lg p-4 my-4 pr-0 border border-[#4f5684]">
                      <div className="flex mx-auto">
                        <div className="w-[25%]">
                          <div className="border border-[#4f5684] rounded-md w-[70px] text-[10px] leading-4 pl-2 py-1 bg-gradient-rate-card">
                            Best Value
                          </div>
                          <div className="flex flex-row mt-8">
                            <div className="bg-white w-[200px] rounded-sm">
                              <div className="p-3 pl-14">
                                {
                                  carrierProviderIcons[
                                    (rates as any).rateResponse?.invalidRates[index].serviceType?.trim().split(' ')[0]
                                  ]
                                }
                              </div>
                            </div>

                            <div className="mt-3 ml-2">
                              <Star />
                            </div>
                            <div className="mt-4 ml-1 mr-2">(4.5)</div>
                          </div>
                          <div>{(rates as any).rateResponse?.rates[index].serviceType} </div>
                        </div>
                        <div className="p-2">
                          <LineRate />
                        </div>
                        <div className="p-4 mt-3 w-[47%]">
                          <div className="pb-6 flex flex-row">
                            <div className="text-white font-poppins text-sm font-normal leading-4 pr-2">Est. </div>
                            <div className="text-white font-poppins text-sm font-semibold leading-4">
                              {(rates as any).rateResponse?.invalidRates[index].carrierDeliveryDays} business days
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <Location />
                            <div className="ml-2 mr-6">
                              {(rates as any).shipFrom?.postalCode}, {(rates as any).shipFrom?.cityLocality}
                            </div>
                            <Plane />
                            <div className="mx-2 mr-5 "></div>
                            <Location />
                            <div className="ml-2">
                              {(rates as any).shipTo?.postalCode}, {(rates as any).shipTo?.cityLocality}
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <LineRate />
                        </div>
                        <div className="py-4 pt-6 flex flex-row">
                          <div className="ml-2">
                            <div className="flex flex-row">
                              <div className="text-white text-right font-poppins text-[30px] font-semibold leading-9 pb-5 pr-6 ">
                                ${(rates as any).rateResponse?.rates[index].shippingAmount?.amount}
                              </div>
                              <Button size="md" className="lg:w-auto w-full h-10">
                                Select
                              </Button>
                            </div>
                            <div className="flex flex-row">
                              <div className="text-white font-poppins text-[12px] font-normal leading-4 pr-2 pt-[2px]">
                                Rate expires:{' '}
                              </div>
                              <div className="text-white font-poppins text-[14px] font-medium leading-5">
                                Sep 16, 2023 05:58 (UTC)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      Invalid Rate
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
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
