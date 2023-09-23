'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import Parcel from '@assets/icons/parcel.svg'
import PolyMailer from '@assets/icons/polymailer.svg'
import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { Check } from '@components/ui/Check'
import { TabPane } from '@components/ui/TabPane'

import { From } from './Panes/From'
import { GoodsCommodity } from './Panes/GoodsCommodity'
import { LoadType } from './Panes/LoadType'
import { To } from './Panes/To'
import { ShippingPane } from './ShippingPane'
import { ShippingStep } from './ShippingStep'

export type FromInputs = {
  fromType: string
  fromCountry: string
  fromAddress: string
}

export type ToInputs = {
  toType: string
  toCountry: string
  toAddress: string
}

export type Field = {
  carrierProvider: string
  carrierSize: string
  length: string
  width: string
  height: string
  dimensionUnit: string
  weight: string
  weightUnit: string
  identicalUnitsCount: string
  containsAlcohol: boolean
  alcoholRecipientType: 'License' | 'Consumer' | ''
  containsDryIce: boolean
  dryIceWeight: string
  isCreateReturnLabel: boolean
  containsLithium: boolean
}

export type LoadTypeInputs = {
  parcelType: string
  parcelShape: string
  fields: Field[]
}

export type GoodsCommodityInputs = {}

export const parcelShapes = [
  {
    label: (
      <div className="flex items-center gap-d-10">
        <Parcel />
        Box or Tube
      </div>
    ),
    value: 'Box or Tube'
  },
  {
    label: (
      <div className="flex items-center gap-d-10">
        <PolyMailer />
        Poly Mailer/Satchel
      </div>
    ),
    value: 'Poly Mailer/Satchel'
  }
]

export const dimensionUnits = [
  {
    label: 'in',
    value: 'in'
  },
  {
    label: 'cm',
    value: 'cm'
  }
]

export const weightUnits = [
  {
    label: 'lb',
    value: 'lb'
  },
  {
    label: 'kg',
    value: 'kg'
  }
]

export const initialField: Field = {
  carrierProvider: '',
  carrierSize: '',
  length: '',
  width: '',
  height: '',
  dimensionUnit: '',
  weight: '',
  weightUnit: '',
  identicalUnitsCount: '',
  containsAlcohol: false,
  alcoholRecipientType: '',
  containsDryIce: false,
  dryIceWeight: '',
  isCreateReturnLabel: false,
  containsLithium: false
}

const fromSchema = yup.object({
  fromType: yup.string().required(),
  fromCountry: yup.string().required(),
  fromAddress: yup.string().required()
})

const toSchema = yup.object({
  toType: yup.string().required(),
  toCountry: yup.string().required(),
  toAddress: yup.string().required()
})

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
    resolver: yupResolver(fromSchema),
    defaultValues: {
      fromType: '',
      fromCountry: '',
      fromAddress: ''
    }
  })

  const toFormMethods = useForm<ToInputs>({
    resolver: yupResolver(toSchema),
    defaultValues: {
      toType: '',
      toCountry: '',
      toAddress: ''
    }
  })

  const loadTypeFormMethods = useForm<LoadTypeInputs>({
    defaultValues: {
      parcelType: 'Enter Custom Dimensions',
      parcelShape: parcelShapes[0].value,
      fields: [initialField]
    }
  })

  const goodsCommodityFormMethods = useForm<GoodsCommodityInputs>({
    defaultValues: {}
  })

  const onFromFormSubmit: SubmitHandler<FromInputs> = (data) => {
    console.debug(data)
    setShippingStepId('tab-ship-destination')
  }

  const onToFormSubmit: SubmitHandler<ToInputs> = (data) => {
    console.debug(data)
    setShippingStepId('tab-ship-load-type')
  }

  const onLoadTypeFormSubmit: SubmitHandler<LoadTypeInputs> = (data) => {
    console.debug(data)
    setShippingStepId('tab-ship-goods-commodity')
  }

  const onGoodsCommodityFormSubmit: SubmitHandler<GoodsCommodityInputs> = (data) => {
    console.debug(data)
    setShippingStepId('')
  }

  return (
    <div className="relative bg-gradient-blur-dialog border border-solid border-[#ffffff30] p-[26px] lg:p-[36px] rounded-[20px]">
      <ButtonSelect
        options={shippingMethods}
        value={shippingMethod}
        onChange={setShippingMethod}
        containerClassName="mb-[28px]"
      />
      <TabPane className="relative" activeTab={shippingStepId} onTabChange={(id) => setShippingStepId(id)}>
        <ShippingSteps shippingStepId={shippingStepId} />
        <div>
          <ShippingPane id="tab-ship-origin">
            <From methods={fromFormMethods} onSubmit={onFromFormSubmit} />
          </ShippingPane>
          <ShippingPane id="tab-ship-destination">
            <To methods={toFormMethods} onSubmit={onToFormSubmit} />
          </ShippingPane>
          <ShippingPane id="tab-ship-load-type">
            <LoadType methods={loadTypeFormMethods} onSubmit={onLoadTypeFormSubmit} />
          </ShippingPane>
          <ShippingPane id="tab-ship-goods-commodity">
            <GoodsCommodity methods={goodsCommodityFormMethods} onSubmit={onGoodsCommodityFormSubmit} />
          </ShippingPane>
        </div>
      </TabPane>
      <div className="flex justify-center">
        <Button glossy>SEARCH</Button>
      </div>
    </div>
  )
}

interface ShippingStepsProps {
  shippingStepId: string
}

const ShippingSteps = ({ shippingStepId }: ShippingStepsProps) => (
  <div className="lg:grid lg:grid-cols-4 lg:gap-[16px] flex flex-col gap-[30px] lg:mb-[34px] mb-[26px]">
    <div>
      <ShippingStep target="tab-ship-origin" label="Origin" className="mb-6" shippingStepId={shippingStepId}>
        Where are you shipping from?
      </ShippingStep>
      <Check label="Add Extra Pickups" labelClassName="lg:text-[12px] text-[8px]" />
    </div>
    <div>
      <ShippingStep target="tab-ship-destination" label="Destination" className="mb-6" shippingStepId={shippingStepId}>
        Where are you shipping to?
      </ShippingStep>
      <Check label="Add Extra Drops" labelClassName="lg:text-[12px] text-[8px]" />
    </div>
    <div>
      <ShippingStep target="tab-ship-load-type" label="Load Type" className="mb-6" shippingStepId={shippingStepId}>
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
)
