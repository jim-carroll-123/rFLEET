'use client'

import { SubmitHandler, UseFormReturn } from 'react-hook-form'

import ArrowRight from '@assets/icons/arrow-right.svg'
import BusinessAddress from '@assets/icons/business-address.svg'
import FactoryWarehouse from '@assets/icons/factory_warehouse.svg'
import PortAirport from '@assets/icons/port_airport.svg'
import ResidentialAddress from '@assets/icons/residential-address.svg'
import User from '@assets/icons/user.svg'
import { Button } from '@components/ui/Button'
import { CountrySelect, countryOptions } from '@components/ui/CountrySelect'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Select, findOption } from '@components/ui/Select'

import { FromInputs } from '../types-schemas-constants'

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
      <div className="text-body-lg font-semibold">Where are you shipping from?</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex lg:flex-row flex-col flex-1 gap-d-16">
        <div className="flex-1 lg:grid lg:grid-cols-3 flex flex-col gap-d-16">
          <div>
            <div className="text-input font-semibold text-gray-200 lg:mb-[8px] mb-[6px]">Type</div>
            <Select
              options={fromTypes}
              value={findOption(fromTypes, watch('fromType'))}
              onChange={({ value }) => setValue('fromType', value, { shouldValidate: true })}
              placeholder="Tell us about your goods"
              error={errors.fromType?.message}
            />
          </div>
          <div>
            <div className="text-input font-semibold text-gray-200 lg:mb-[8px] mb-[6px]">Country</div>
            <CountrySelect
              searchable
              value={findOption(countryOptions, watch('fromCountry'))}
              placeholder="Select a country"
              onChange={({ value }) => setValue('fromCountry', value, { shouldValidate: true })}
              error={errors.fromCountry?.message}
            />
          </div>
          <div>
            <div className="text-input font-semibold text-gray-200 lg:mb-[8px] mb-[6px]">Address</div>
            <Input
              value={watch('fromAddress')}
              onChange={(value) => setValue('fromAddress', value, { shouldValidate: true })}
              placeholder="Enter Address or Zip/Postal Code"
              error={errors.fromAddress?.message}
            />
          </div>
        </div>
        <div className="flex items-end lg:mt-0 mt-[20px]">
          <Button type="submit" size="sm" className="lg:py-[7px] py-[6px] lg:w-auto w-full">
            <ArrowRight />
          </Button>
        </div>
      </form>
      <GradientHR />
      <div className="flex flex-col lg:gap-[4px] gap-[3px]">
        <div className="text-input">My recent searches</div>
        <div className="flex items-center lg:gap-[8px] gap-[6px]">
          <User />
          <div className="text-body-lg">Login / Sign Up</div>
        </div>
        <div className="text-input">Access your searches on any devices</div>
      </div>
    </>
  )
}
