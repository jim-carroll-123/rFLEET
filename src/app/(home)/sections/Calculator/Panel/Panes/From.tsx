'use client'

import { SubmitHandler, UseFormReturn } from 'react-hook-form'

import ArrowRight from '@assets/icons/arrow-right.svg'
import BusinessAddress from '@assets/icons/business-address.svg'
import FactoryWarehouse from '@assets/icons/factory_warehouse.svg'
import PortAirport from '@assets/icons/port_airport.svg'
import ResidentialAddress from '@assets/icons/residential-address.svg'
import User from '@assets/icons/user.svg'
import { Button } from '@components/ui/Button'
import { CountrySelect } from '@components/ui/CountrySelect'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Select } from '@components/ui/Select'

import { FromInputs } from '..'

const fromTypes = [
  {
    label: 'Port/Airport',
    value: 'Port/Airport',
    icon: <PortAirport />
  },
  {
    label: 'Factory/Warehouse',
    value: 'Factory/Warehouse',
    icon: <FactoryWarehouse />
  },
  {
    label: 'Business Address',
    value: 'Business Address',
    icon: <BusinessAddress />
  },
  {
    label: 'Residential Address',
    value: 'Residential Address',
    icon: <ResidentialAddress />
  }
]

interface Props {
  methods: UseFormReturn<FromInputs>
  onSubmit: SubmitHandler<FromInputs>
}

export const From = ({ methods, onSubmit }: Props) => {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = methods

  return (
    <>
      <h4 className="font-semibold">Where are you shipping from?</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex lg:flex-row flex-col flex-1 gap-d-24">
        <div className="flex-1 lg:grid lg:grid-cols-3 flex flex-col gap-d-16">
          <div>
            <div className="font-semibold text-gray-200 lg:mb-[12px] mb-[8px]">Type</div>
            <Select
              options={fromTypes}
              value={watch('fromType')}
              onChange={(value) => setValue('fromType', value)}
              placeholder="Tell us about your goods"
            />
          </div>
          <div>
            <div className="font-semibold text-gray-200 lg:mb-[12px] mb-[8px]">Country</div>
            <CountrySelect
              searchable
              value={watch('fromCountry')}
              placeholder="Select a country"
              onChange={(value) => setValue('fromCountry', value)}
            />
          </div>
          <div>
            <div className="font-semibold text-gray-200 lg:mb-[12px] mb-[8px]">Address</div>
            <Input
              value={watch('fromAddress')}
              onChange={(value) => setValue('fromAddress', value)}
              placeholder="Enter Address or Zip/Postal Code"
            />
          </div>
        </div>
        <div className="flex items-end">
          <Button type="submit" className="lg:!px-[24px] !px-[18px]">
            <ArrowRight />
          </Button>
        </div>
      </form>
      <GradientHR />
      <div className="flex flex-col lg:gap-[4px] gap-[3px]">
        <div className="text-caption-sm">My recent searches</div>
        <div className="flex items-center lg:gap-[8px] gap-[6px]">
          <User />
          <h6>Login / Sign Up</h6>
        </div>
        <div className="text-caption-sm">Access your searches on any devices</div>
      </div>
    </>
  )
}
