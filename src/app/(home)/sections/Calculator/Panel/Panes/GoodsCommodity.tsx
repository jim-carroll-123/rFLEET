import { SubmitHandler, UseFormReturn } from 'react-hook-form'

import IconInfo from '@assets/icons/info.svg'
import QuoteRequest from '@assets/icons/quote-request.svg'
import { Button } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Select, findOption } from '@components/ui/Select'

import { GoodsCommodityInputs, currencies, packageUnits } from '..'

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:gap-[32px] gap-[24px]">
      <h4 className="font-semibold">Provide Product Details</h4>
      <div>
        <div className="flex justify-between lg:mb-[16px] mb-[12px]">
          <div className="font-bold">What is the item?*</div>
          <div className="text-caption-xs">Quick Guide for Describing items</div>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center gap-d-16">
          <div className="grow flex items-center gap-d-16">
            <Button type="button" size="lg" className="grow">
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
          onChange={(v) => setValue('quantity', v)}
          error={errors.quantity?.message}
          label="Quantity*"
          containerClassName="lg:w-[80px] w-full"
          type="number"
        />
        <Input
          label="SKU*"
          value={watch('sku')}
          onChange={(v) => setValue('sku', v)}
          error={errors.sku?.message}
          containerClassName="lg:w-[194px] w-full"
          type="number"
        />
        <Select
          containerClassName="lg:w-[300px] w-full"
          label={
            <div className="flex items-center">
              Unit*&nbsp;<div className="text-caption-xs text-gray">(How the item is packaged)</div>
            </div>
          }
          options={packageUnits}
          value={findOption(packageUnits, watch('packageUnit'))}
          onChange={({ value }) => setValue('packageUnit', value)}
          error={errors.packageUnit?.message}
        />
        <Select
          containerClassName="lg:w-[160px] w-full"
          label={
            <div className="flex items-center">
              Value*&nbsp;<div className="text-caption-xs text-gray">(Per Item)</div>
            </div>
          }
          options={[]}
          onChange={({ value }) => setValue('value', value)}
          error={errors.value?.message}
        />
        <Select
          containerClassName="lg:w-[94px] w-full"
          label="Currency"
          placeholder=" "
          options={currencies}
          value={findOption(currencies, watch('currency') || '')}
          onChange={({ value }) => setValue('currency', value)}
        />
        <Input
          type="number"
          label={
            <div className="flex items-center">
              Weight*&nbsp;<div className="text-caption-xs text-gray">(Per Item)</div>
              <IconInfo className="ml-[4px]" />
            </div>
          }
          value={watch('weight')}
          onChange={(v) => setValue('weight', v)}
          error={errors.weight?.message}
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-d-16">
        <Input
          containerClassName="grow"
          label={
            <div className="flex items-center">
              Where was the item made?**
              <IconInfo className="ml-[4px]" />
            </div>
          }
          value={watch('madeWhere')}
          onChange={(v) => setValue('madeWhere', v)}
          error={errors.madeWhere?.message}
        />
        <Input
          value={watch('scheduleB')}
          onChange={(v) => setValue('scheduleB', v)}
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
