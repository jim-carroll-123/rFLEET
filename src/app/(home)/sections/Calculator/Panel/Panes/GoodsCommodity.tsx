import { SubmitHandler, UseFormReturn } from 'react-hook-form'

import IconInfo from '@assets/icons/info.svg'
import QuoteRequest from '@assets/icons/quote-request.svg'
import { Button } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Select, findOption } from '@components/ui/Select'

import { currencies, packageUnits } from '../options'
import { GoodsCommodityInputs } from '../types-schemas-constants'

interface Props {
  methods: UseFormReturn<GoodsCommodityInputs>
  onSubmit: SubmitHandler<GoodsCommodityInputs>
}

export const GoodsCommodity = ({ methods, onSubmit }: Props) => {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = methods

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:gap-[24px] gap-[18px]">
      <div className="text-body-lg font-semibold">Provide Product Details</div>
      <div>
        <div className="flex justify-between lg:mb-[16px] mb-[12px]">
          <div className="font-semibold">What is the item?*</div>
          <div className="text-caption">Quick Guide for Describing items</div>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center gap-d-16">
          <div className="grow flex items-center gap-d-16">
            <Button type="button" size="sm" className="grow">
              <div className="flex items-center gap-d-10">
                Create Description
                <QuoteRequest />
              </div>
            </Button>
          </div>
          <div className="font-semibold shrink-0">OR</div>
          <Input containerClassName="grow" placeholder="Enter your item descriptions (170 Character Maximum)" />
        </div>
      </div>
      <GradientHR />
      <div className="flex lg:flex-row flex-col gap-d-16">
        <Input
          value={watch('quantity')}
          onChange={(value) => setValue('quantity', value, { shouldValidate: true })}
          error={errors.quantity?.message}
          label="Quantity*"
          containerClassName="lg:w-[80px] w-full"
          type="number"
        />
        <Input
          label="SKU*"
          value={watch('sku')}
          onChange={(value) => setValue('sku', value, { shouldValidate: true })}
          error={errors.sku?.message}
          containerClassName="lg:w-[194px] w-full"
          type="number"
        />
        <Select
          containerClassName="lg:w-[300px] w-full"
          label={
            <div className="flex items-center">
              Unit*&nbsp;<div className="text-caption text-gray">(How the item is packaged)</div>
            </div>
          }
          options={packageUnits}
          value={findOption(packageUnits, watch('packageUnit'))}
          onChange={({ value }) => setValue('packageUnit', value, { shouldValidate: true })}
          error={errors.packageUnit?.message}
        />
        <Select
          containerClassName="lg:w-[160px] w-full"
          label={
            <div className="flex items-center">
              Value*&nbsp;<div className="text-caption text-gray">(Per Item)</div>
            </div>
          }
          options={[]}
          onChange={({ value }) => setValue('value', value, { shouldValidate: true })}
          error={errors.value?.message}
        />
        <Select
          containerClassName="lg:w-[94px] w-full"
          label="Currency"
          placeholder=" "
          options={currencies}
          value={findOption(currencies, watch('currency') || '')}
          onChange={({ value }) => setValue('currency', value, { shouldValidate: true })}
        />
        <Input
          type="number"
          label={
            <div className="relative flex items-center">
              Weight*&nbsp;<div className="text-caption text-gray">(Per Item)</div>
              <IconInfo className="absolute lg:w-[24px] w-[18px] lg:h-[24px] h-[18px] lg:left-[120px] left-[90px]" />
            </div>
          }
          value={watch('weight')}
          onChange={(value) => setValue('weight', value, { shouldValidate: true })}
          error={errors.weight?.message}
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-d-16">
        <Input
          containerClassName="grow"
          label={
            <div className="relative flex items-center">
              Where was the item made?**
              <IconInfo className="absolute lg:w-[24px] w-[18px] lg:h-[24px] h-[18px] lg:left-[180px] left-[140px]" />
            </div>
          }
          value={watch('madeWhere')}
          onChange={(value) => setValue('madeWhere', value, { shouldValidate: true })}
          error={errors.madeWhere?.message}
        />
        <Input
          value={watch('scheduleB')}
          onChange={(value) => setValue('scheduleB', value, { shouldValidate: true })}
          error={errors.scheduleB?.message}
          containerClassName="grow"
          label="Schedule B"
        />
      </div>
      <Check label="Add on insurance for goods valued over $100" />
      <GradientHR />
      <div className="flex justify-end">
        <Button type="submit" className="lg:!px-[24px] !px-[18px]">
          Save
        </Button>
      </div>
    </form>
  )
}
