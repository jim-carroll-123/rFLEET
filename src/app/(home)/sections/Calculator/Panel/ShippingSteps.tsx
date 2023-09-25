'use client'

import { Check } from '@components/ui/Check'
import { Tab } from '@components/ui/TabPane'
import countries from '@json/countries.json'
import { cn } from '@lib/utils'

interface ShippingStepsProps {
  shippingStepId: string
  data: any
}

export const ShippingSteps = ({ shippingStepId, data }: ShippingStepsProps) => {
  console.debug(`---  data:`, data)

  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-[16px] flex flex-col gap-[30px] lg:mb-[34px] mb-[26px]">
      <div>
        <ShippingStep
          target="tab-ship-origin"
          label="Origin"
          className="mb-6 overflow-x-hidden"
          shippingStepId={shippingStepId}
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
              <div className="text-input-text">{data.fromType}</div>
            </div>
          ) : (
            'Where are you shipping from?'
          )}
        </ShippingStep>
        <Check label="Add Extra Pickups" labelClassName="lg:text-[12px] text-[8px]" />
      </div>
      <div>
        <ShippingStep
          target="tab-ship-destination"
          label="Destination"
          className="mb-6 overflow-x-hidden"
          shippingStepId={shippingStepId}
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
              <div className="text-input-text">{data.toType}</div>
            </div>
          ) : (
            'Where are you shipping to?'
          )}
        </ShippingStep>
        <Check label="Add Extra Drops" labelClassName="lg:text-[12px] text-[8px]" />
      </div>
      <div>
        <ShippingStep
          target="tab-ship-load-type"
          label="Load Type"
          className="mb-6 overflow-x-hidden"
          shippingStepId={shippingStepId}
        >
          {data.parcelType ? (
            <div className="flex items-center gap-d-10 text-white font-bold">
              <div className="text-input-text">Confirmed</div>
            </div>
          ) : (
            'What are you shipping?'
          )}
        </ShippingStep>
      </div>
      <div>
        <ShippingStep
          target="tab-ship-goods-commodity"
          label="Goods/Commodity"
          className="mb-6 overflow-x-hidden"
          shippingStepId={shippingStepId}
        >
          Goods/Commodity
        </ShippingStep>
        <Check label="Add More Goods/Commodities" labelClassName="lg:text-[12px] text-[8px]" />
      </div>
    </div>
  )
}

interface ShippingStepProps extends React.HTMLAttributes<HTMLDivElement> {
  target: string
  label: string
  shippingStepId: string
  children: React.ReactNode
}

export const ShippingStep = ({ target, label, className, children, shippingStepId }: ShippingStepProps) => {
  return (
    <>
      <div className={cn('font-semibold mb-4', target === shippingStepId ? 'text-white' : 'text-gray')}>{label}</div>
      <Tab
        target={target}
        className={cn(
          'w-full lg:py-[20px] py-[15px] border-2 border-solid sm:text-sm shadow-sm lg:rounded-lg rounded-md bg-transparent lg:pl-[16px] pl-[12px] lg:pr-[16px] pr-[12px]',
          className,
          target === shippingStepId
            ? 'text-white border-white hover:text-white cursor-default'
            : 'text-gray border-gray hover:text-primary hover:border-primary'
        )}
      >
        {children}
      </Tab>
    </>
  )
}
