'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import Parcel from '@assets/icons/parcel.svg'
import PolyMailer from '@assets/icons/polymailer.svg'
import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { TabPane } from '@components/ui/TabPane'

import { From } from './Panes/From'
import { GoodsCommodity } from './Panes/GoodsCommodity'
import { LoadType } from './Panes/LoadType'
import { To } from './Panes/To'
import { ShippingPane } from './ShippingPane'
import { ShippingSteps } from './ShippingSteps'

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

const loadTypeSchema: any & { fields: Field[] } = yup.object({
  parcelType: yup.string().required(),
  parcelShape: yup.string().required(),
  fields: yup.array().test({
    message: '',
    test: (fields: Field[] | undefined, context) => {
      const errors: any = {}
      const { fields: _, ...others } = context.parent

      if (fields && fields.length > 0) {
        const field = fields[fields.length - 1]

        if (others.parcelType === 'Enter Custom Dimensions') {
          if (others.parcelShape === 'Box or Tube') {
            if (isNaN(Number(field.length)) || Number(field.length) <= 0) {
              errors.length = 'Length must be a positive number'
            }

            if (isNaN(Number(field.width)) || Number(field.width) <= 0) {
              errors.width = 'Width must be a positive number'
            }

            if (isNaN(Number(field.height)) || Number(field.height) <= 0) {
              errors.height = 'Height must be a positive number'
            }

            if (isNaN(Number(field.weight)) || Number(field.weight) <= 0) {
              errors.weight = 'Weight must be a positive number'
            }

            if (isNaN(Number(field.identicalUnitsCount)) || Number(field.identicalUnitsCount) <= 0) {
              errors.identicalUnitsCount = 'Identical units must be a positive number'
            }

            if (!field.dimensionUnit) {
              errors.dimensionUnit = 'Dimension unit must be chosen'
            }

            if (!field.weightUnit) {
              errors.weightUnit = 'Weight unit must be chosen'
            }
          }

          if (others.parcelShape === 'Poly Mailer/Satchel') {
            if (isNaN(Number(field.length)) || Number(field.length) <= 0) {
              errors.length = 'Length must be a positive number'
            }

            if (isNaN(Number(field.width)) || Number(field.width) <= 0) {
              errors.width = 'Width must be a positive number'
            }

            if (isNaN(Number(field.identicalUnitsCount)) || Number(field.identicalUnitsCount) <= 0) {
              errors.identicalUnitsCount = 'Identical units must be a positive number'
            }

            if (isNaN(Number(field.weight)) || Number(field.weight) <= 0) {
              errors.weight = 'Weight must be a positive number'
            }

            if (!field.dimensionUnit) {
              errors.dimensionUnit = 'Dimension unit must be chosen'
            }

            if (!field.weightUnit) {
              errors.weightUnit = 'Weight unit must be chosen'
            }
          }
        }

        if (others.parcelType === 'Carrier Provided Parcel') {
          if (!field.carrierProvider) {
            errors.carrierProvider = 'Carrier provider must be chosen'
          }

          if (!field.carrierSize) {
            errors.carrierSize = 'Carrier size must be chosen'
          }

          if (isNaN(Number(field.weight)) || Number(field.weight) <= 0) {
            errors.weight = 'Weight must be a positive number'
          }

          if (!field.weightUnit) {
            errors.weightUnit = 'Weight unit must be chosen'
          }

          if (isNaN(Number(field.identicalUnitsCount)) || Number(field.identicalUnitsCount) <= 0) {
            errors.identicalUnitsCount = 'Identical units must be a positive number'
          }
        }

        if (field.containsAlcohol) {
          if (!field.alcoholRecipientType) {
            errors.alcoholRecipientType = 'Alcohol recipient type must be chosen'
          }
        }

        if (field.containsDryIce) {
          if (isNaN(Number(field.dryIceWeight)) || Number(field.dryIceWeight) <= 0) {
            errors.dryIceWeight = 'Dry ice weight must be a positive number'
          }
        }

        // Collect and apply errors
        if (Object.keys(errors).length > 0) {
          return new yup.ValidationError(errors, null, 'fields')
        }

        return true
      }

      return false
    }
  })
})

export type FromInputs = yup.InferType<typeof fromSchema>
export type ToInputs = yup.InferType<typeof toSchema>
export type LoadTypeInputs = yup.InferType<typeof loadTypeSchema>

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
