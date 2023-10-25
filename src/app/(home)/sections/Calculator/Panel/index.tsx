'use client';

import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';



import { yupResolver } from '@hookform/resolvers/yup';



import { ButtonSelect } from '@components/ui/ButtonSelect'
import { TabPane } from '@components/ui/TabPane'

import { From } from './Panes/From'
import { GoodsCommodity } from './Panes/GoodsCommodity'
import { LTLLoadType } from './Panes/LTLLoadType'
import { LoadType } from './Panes/LoadType'
import { To } from './Panes/To'
import { ShippingPane } from './ShippingPane'
import { ShippingSteps } from './ShippingSteps'
import { parcelShapes, shippingMethods } from './options'
import {
  FromInputs,
  GoodsCommodityInputs,
  LoadTypeInputs,
  LtlLoadTypeInputs,
  ToInputs,
  fromSchema,
  goodsCommoditySchema,
  initialField,
  initialLTLField,
  loadTypeSchema,
  ltlLoadTypeSchema,
  toSchema
} from './types-schemas-constants'

type shippingMethodType = { label: string; value: string }

export const Panel = () => {
  const [shippingMethod, setShippingMethod] = useState<shippingMethodType>(shippingMethods[0])
  const [shippingStepId, setShippingStepId] = useState('')
  const [data, setData] = useState({})

  useEffect(() => {
    console.log('Updated Data:', data)
  }, [data])

  const fromFormMethods = useForm<FromInputs>({
    mode: 'onChange',
    resolver: yupResolver(fromSchema),
    defaultValues: {
      fromType: '',
      fromCountry: '',
      fromAddress: '',
      fromCity: '',
      fromPostalCode: ''
    }
  })

  const toFormMethods = useForm<ToInputs>({
    mode: 'onChange',
    resolver: yupResolver(toSchema),
    defaultValues: {
      toType: '',
      toCountry: '',
      toAddress: '',
      toCity: '',
      toPostalCode: ''
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

  //LTL Load Type
  const ltlLoadTypeFormMethods = useForm<LtlLoadTypeInputs>({
    mode: 'onChange',
    resolver: yupResolver(ltlLoadTypeSchema),
    defaultValues: {
      ltlType: 'LTL',
      fields: [{ ...initialLTLField }]
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
    setData((prev) => {
      console.log('From Previous data:', prev)
      return { ...prev, ...data }
    })

    console.log('From Data: ', data)
    setShippingStepId('tab-ship-destination')
  }

  const onToFormSubmit: SubmitHandler<ToInputs> = (data) => {
    setData((prev) => {
      console.log('To Previous data:', prev)
      return { ...prev, ...data }
    })

    console.log('To Data: ', data)
    setShippingStepId('tab-ship-load-type')
  }

  const onLoadTypeFormSubmit: SubmitHandler<LoadTypeInputs> = (data) => {
    setData((prev) => {
      console.log('Load Previous data:', prev)
      return { ...prev, ...data }
    })

    console.log('Load Type Data: ', data)
    setShippingStepId('tab-ship-goods-commodity')
  }

  const onLtlLoadTypeFormSubmit: SubmitHandler<LtlLoadTypeInputs> = (data) => {
    setData((prev) => {
      console.log('LTL Previous data:', prev)
      return { ...prev, ...data }
    })

    console.log('LTL Load Type Data: ', data)
    setShippingStepId('tab-ship-goods-commodity')
  }

  const onGoodsCommodityFormSubmit: SubmitHandler<GoodsCommodityInputs> = (data) => {
    setData((prev) => {
      console.log('Goods Previous data:', prev)
      return { ...prev, ...data }
    })
    console.log('Goods Commodity Data: ', data)
    setShippingStepId('')
  }

  const shippingMethodLoadTypes: any = {
    Parcel: <LoadType methods={loadTypeFormMethods} onSubmit={onLoadTypeFormSubmit} />,
    'LTL & Partials': <LTLLoadType methods={ltlLoadTypeFormMethods} onSubmit={onLtlLoadTypeFormSubmit} />,
    'Ocean Shipping': <></>,
    'Air Cargo': <></>
  }

  return (
    <div className="relative bg-gradient-blur-dialog border border-solid border-[#ffffff30] p-[18px] lg:p-[24px] rounded-[20px]">
      <ButtonSelect
        options={shippingMethods}
        value={shippingMethod}
        onChange={setShippingMethod}
        containerClassName="lg:mb-[24px] mb-[18px]"
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
          <ShippingPane id="tab-ship-load-type">{shippingMethodLoadTypes[shippingMethod.value]}</ShippingPane>
          <ShippingPane id="tab-ship-goods-commodity">
            <GoodsCommodity methods={goodsCommodityFormMethods} onSubmit={onGoodsCommodityFormSubmit} />
          </ShippingPane>
        </div>
      </TabPane>
    </div>
  )
}