'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { Check } from '@components/ui/Check'
import { Option } from '@components/ui/Select'
import { TabPane } from '@components/ui/TabPane'

import { From } from './Panes/From'
import { GoodsCommodity } from './Panes/GoodsCommodity'
import { LoadType } from './Panes/LoadType'
import { To } from './Panes/To'
import { ShippingPane } from './ShippingPane'
import { ShippingStep } from './ShippingStep'

export type FromInputs = {
  fromType: Option
  fromCountry: Option
  fromAddress: string
}

export type ToInputs = {
  toType: Option
  toCountry: Option
  toAddress: string
}

export const Panel = () => {
  const shippingMethods = [
    { label: 'Parcel', value: 'Parcel' },
    { label: 'LTL & Partials', value: 'LTL & Partials' },
    { label: 'Ocean Shipping', value: 'Ocean Shipping' },
    { label: 'Air Cargo', value: 'Air Cargo' },
    {
      label: 'FTL, Power Only, Drayage,\nor Oversize & Overweight',
      value: 'FTL, Power Only, Drayage, or Oversize & Overweight'
    }
  ]

  const [shippingMethod, setShippingMethod] = useState(shippingMethods[0])
  const [shippingStepId, setShippingStepId] = useState('')

  const fromFormMethods = useForm<FromInputs>({
    defaultValues: {
      fromAddress: ''
    }
  })

  const toFormMethods = useForm<ToInputs>({
    defaultValues: {
      toAddress: ''
    }
  })

  const onFromFormSubmit: SubmitHandler<FromInputs> = (data) => console.debug(data)
  const onToFormSubmit: SubmitHandler<ToInputs> = (data) => console.debug(data)

  return (
    <div className="relative bg-gradient-blur-dialog border border-solid border-[#ffffff30] p-[26px] lg:p-[36px] rounded-[20px]">
      <ButtonSelect
        options={shippingMethods}
        value={shippingMethod}
        onChange={setShippingMethod}
        containerClassName="mb-[28px]"
      />
      <TabPane className="relative" activeTab={shippingStepId} onTabChange={(id) => setShippingStepId(id)}>
        <div className="lg:grid lg:grid-cols-4 lg:gap-[16px] flex flex-col gap-[30px] lg:mb-[34px] mb-[26px]">
          <div>
            <ShippingStep target="tab-ship-origin" label="Origin" className="mb-6" shippingStepId={shippingStepId}>
              Where are you shipping from?
            </ShippingStep>
            <Check label="Add Extra Pickups" labelClassName="lg:text-[12px] text-[8px]" />
          </div>
          <div>
            <ShippingStep
              target="tab-ship-destination"
              label="Destination"
              className="mb-6"
              shippingStepId={shippingStepId}
            >
              Where are you shipping to?
            </ShippingStep>
            <Check label="Add Extra Drops" labelClassName="lg:text-[12px] text-[8px]" />
          </div>
          <div>
            <ShippingStep
              target="tab-ship-load-type"
              label="Load Type"
              className="mb-6"
              shippingStepId={shippingStepId}
            >
              What are you shipping?
            </ShippingStep>
          </div>
          <div>
            <ShippingStep
              target="tab-ship-goods-commodity"
              label="Goods/Commodity"
              className="mb-6"
              shippingStepId={shippingStepId}
            >
              Goods/Commodity
            </ShippingStep>
            <Check label="Add More Goods/Commodities" labelClassName="lg:text-[12px] text-[8px]" />
          </div>
        </div>
        <div>
          <ShippingPane id="tab-ship-origin">
            <From methods={fromFormMethods} onSubmit={onFromFormSubmit} />
          </ShippingPane>
          <ShippingPane id="tab-ship-destination">
            <To methods={toFormMethods} onSubmit={onToFormSubmit} />
          </ShippingPane>
          <ShippingPane id="tab-ship-load-type">
            <LoadType next={() => setShippingStepId('tab-ship-goods-commodity')} />
          </ShippingPane>
          <ShippingPane id="tab-ship-goods-commodity">
            <GoodsCommodity />
          </ShippingPane>
        </div>
      </TabPane>
      <div className="flex justify-center">
        <Button glossy>SEARCH</Button>
      </div>
    </div>
  )
}
