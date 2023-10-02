'use client'

import { Button } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { Tab } from '@components/ui/TabPane'
import countries from '@json/countries.json'
import { cn } from '@lib/utils'

interface ShippingStepsProps {
  shippingStepId: string
  data: any
}

export const ShippingSteps = ({ shippingStepId, data }: ShippingStepsProps) => {
  return (
    <div className="flex lg:flex-row flex-col gap-d-16">
      <div className="grow">
        <div className="lg:grid lg:grid-cols-4 gap-d-12 flex flex-col lg:mb-[8px] mb-[6px]">
          <ShippingStep
            target="tab-ship-origin"
            label="Origin"
            className="overflow-x-hidden"
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
        <Button size="sm" glossy className="lg:w-auto w-full">
          Search
        </Button>
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
    <div>
      <div className={cn('lg:mb-[8px] mb-[6px]', target === shippingStepId ? 'text-white' : 'text-gray')}>
        <span className="font-semibold text-caption">{label}</span>
      </div>
      <Tab
        target={target}
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
