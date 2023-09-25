'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { TabPane } from '@components/ui/TabPane'

import { From } from './Panes/From'
import { GoodsCommodity } from './Panes/GoodsCommodity'
import { LoadType } from './Panes/LoadType'
import { To } from './Panes/To'
import { ShippingPane } from './ShippingPane'
import { ShippingSteps } from './ShippingSteps'
import { parcelShapes, shippingMethods } from './options'
import {
  FromInputs,
  GoodsCommodityInputs,
  LoadTypeInputs,
  ToInputs,
  fromSchema,
  goodsCommoditySchema,
  initialField,
  loadTypeSchema,
  toSchema
} from './types-schemas-constants'

export const Panel = () => {
  const [shippingMethod, setShippingMethod] = useState(shippingMethods[0])
  const [shippingStepId, setShippingStepId] = useState('')
  const [data, setData] = useState({})

  const fromFormMethods = useForm<FromInputs>({
    mode: 'onChange',
    resolver: yupResolver(fromSchema),
    defaultValues: {
      fromType: '',
      fromCountry: '',
      fromAddress: ''
    }
  })

  const toFormMethods = useForm<ToInputs>({
    mode: 'onChange',
    resolver: yupResolver(toSchema),
    defaultValues: {
      toType: '',
      toCountry: '',
      toAddress: ''
    }
  })

  const loadTypeFormMethods = useForm<LoadTypeInputs>({
    mode: 'onChange',
    resolver: yupResolver(loadTypeSchema),
    defaultValues: {
      parcelType: 'Enter Custom Dimensions',
      parcelShape: parcelShapes[0].value,
      fields: [initialField]
    }
  })

  const goodsCommodityFormMethods = useForm<GoodsCommodityInputs>({
    mode: 'onChange',
    resolver: yupResolver(goodsCommoditySchema),
    defaultValues: {
      quantity: '',
      sku: '',
      packageUnit: '',
      value: '',
      currency: '',
      weight: '',
      madeWhere: '',
      scheduleB: ''
    }
  })

  const onFromFormSubmit: SubmitHandler<FromInputs> = (data) => {
    setData((prev) => ({ ...prev, ...data }))
    setShippingStepId('tab-ship-destination')
  }

  const onToFormSubmit: SubmitHandler<ToInputs> = (data) => {
    setData((prev) => ({ ...prev, ...data }))
    setShippingStepId('tab-ship-load-type')
  }

  const onLoadTypeFormSubmit: SubmitHandler<LoadTypeInputs> = (data) => {
    setData((prev) => ({ ...prev, ...data }))
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
        <ShippingSteps shippingStepId={shippingStepId} data={data} />
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
