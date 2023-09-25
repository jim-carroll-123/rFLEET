import { SubmitHandler, UseFormReturn } from 'react-hook-form'

import Link from 'next/link'

import Delete from '@assets/icons/delete.svg'
import IconDHL from '@assets/icons/dhl.svg'
import IconFedEx from '@assets/icons/fedex.svg'
import Plus from '@assets/icons/plus.svg'
import IconPostalService from '@assets/icons/postal-service.svg'
import X from '@assets/icons/x.svg'
import uPsLogo from '@assets/images/UPS-logo.png'
import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { Check } from '@components/ui/Check'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Radio } from '@components/ui/Radio'
import { Option, Select, findOption } from '@components/ui/Select'
import { cn } from '@lib/utils'

import { Field, LoadTypeInputs, dimensionUnits, initialField, parcelShapes, weightUnits } from '..'

interface Props {
  methods: UseFormReturn<LoadTypeInputs>
  onSubmit: SubmitHandler<LoadTypeInputs>
}

export const LoadType = ({ methods, onSubmit }: Props) => {
  const {
    watch,
    setValue,
    handleSubmit,
    trigger,
    formState: { errors }
  } = methods

  const fieldErrors: any = errors.fields?.message

  const isCustomDimensions = watch('parcelType') === 'Enter Custom Dimensions'
  const isBoxOrTube = watch('parcelShape') === 'Box or Tube'

  const fields: Field[] = watch('fields')
  const field = fields[fields.length - 1]

  const carrierProviderIcons: any = {
    'Postal Service': (
      <div className="flex justify-center items-center lg:w-[72px] lg:h-[46px]">
        <IconPostalService />
      </div>
    ),
    FedEx: (
      <div className="flex justify-center items-center lg:w-[72px] lg:h-[46px]">
        <IconFedEx />
      </div>
    ),
    DHL: (
      <div className="flex justify-center items-center lg:w-[72px] lg:h-[46px]">
        <IconDHL />
      </div>
    ),
    UPS: (
      <div className="flex justify-center items-center lg:w-[72px] lg:h-[46px]">
        <img src={uPsLogo.src} />
      </div>
    )
  }

  const carrierSizes: Option[] = [
    {
      label: `${field.carrierProvider}®️ Extra Large Box (X1)`,
      value: 'x1'
    },
    {
      label: `${field.carrierProvider}®️ Extra Large Box (X2)`,
      value: 'x2'
    },
    {
      label: `${field.carrierProvider}®️ Large Box (L1)`,
      value: 'l1'
    },
    {
      label: `${field.carrierProvider}®️ Medium Box (M1)`,
      value: 'm1'
    }
  ]

  const setFieldItem = (key: keyof Field, value: any) => {
    const newField = { ...field, [key]: value }
    const newFields = [...fields.slice(0, fields.length - 1), newField]
    setValue('fields', newFields)
  }

  const onAdd = async () => {
    const validated = await trigger()
    if (validated) {
      setValue('fields', [...fields, { ...initialField }])
    }
    return
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:gap-[32px] gap-[24px]">
      <h4 className="font-semibold">What are you shipping?</h4>
      <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[40px] gap-[10px]">
        <Radio
          value="Enter Custom Dimensions"
          checked={isCustomDimensions}
          onCheck={() => setValue('parcelType', 'Enter Custom Dimensions')}
          label="Enter Custom Dimensions"
          labelClassName="lg:text-[20px] text-[15px] font-semibold"
        />
        <Radio
          value="Carrier Provided Parcel"
          checked={!isCustomDimensions}
          onCheck={() => setValue('parcelType', 'Carrier Provided Parcel')}
          label="Carrier Provided Parcel"
          labelClassName="lg:text-[20px] text-[15px] font-semibold"
        />
      </div>
      <GradientHR />
      {isCustomDimensions && (
        <ButtonSelect
          full
          value={findOption(parcelShapes, watch('parcelShape'))}
          options={parcelShapes}
          onChange={({ value }) => setValue('parcelShape', value)}
          containerClassName="gap-d-16"
        />
      )}
      {fields.length > 1 && (
        <>
          {fields.slice(0, fields.length - 1).map((el, index) => (
            <div key={index} className="flex border border-white rounded-d-6">
              <div className="shrink-0 text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">
                Load {index + 1}
              </div>
              <div className="grow text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">
                {el.identicalUnitsCount} Boxes/Crates
              </div>
              <div className="grow text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">
                {el.length}X{el.width}X{el.height} {el.dimensionUnit} {el.weight}
                {el.weightUnit}
              </div>
              <div className="flex shrink-0 justify-center items-center lg:px-[40px] px-[30px] lg:py-[20px] py-[15px] hover:cursor-pointer">
                <Delete
                  onClick={() => {
                    let newArray = [...fields]
                    newArray.splice(index, 1)
                    setValue('fields', newArray)
                  }}
                />
              </div>
            </div>
          ))}
        </>
      )}
      {isCustomDimensions && <GradientHR />}
      {!isCustomDimensions && (
        <div className="flex flex-col gap-d-16">
          <div className="font-bold">Select Carrier</div>
          <div className="flex lg:flex-row flex-col gap-d-16">
            <button
              type="button"
              onClick={() => setFieldItem('carrierProvider', 'Postal Service')}
              className={cn(
                'flex justify-center lg:p-[20px] p-[15px] rounded-d-6 border lg:w-[200px]',
                field.carrierProvider === 'Postal Service' ? 'bg-white' : 'bg-white-40 hover:bg-white-30',
                fieldErrors?.carrierProvider ? 'border-red-600' : 'border-white'
              )}
            >
              <IconPostalService />
            </button>
            <button
              type="button"
              onClick={() => setFieldItem('carrierProvider', 'FedEx')}
              className={cn(
                'flex justify-center lg:p-[20px] p-[15px] rounded-d-6 border lg:w-[200px]',
                field.carrierProvider === 'FedEx' ? 'bg-white' : 'bg-white-40 hover:bg-white-30',
                fieldErrors?.carrierProvider ? 'border-red-600' : 'border-white'
              )}
            >
              <IconFedEx />
            </button>
            <button
              type="button"
              onClick={() => setFieldItem('carrierProvider', 'DHL')}
              className={cn(
                'flex justify-center lg:p-[20px] p-[15px] rounded-d-6 border lg:w-[200px]',
                field.carrierProvider === 'DHL' ? 'bg-white' : 'bg-white-40 hover:bg-white-30',
                fieldErrors?.carrierProvider ? 'border-red-600' : 'border-white'
              )}
            >
              <IconDHL />
            </button>
            <button
              type="button"
              onClick={() => setFieldItem('carrierProvider', 'UPS')}
              className={cn(
                'flex justify-center lg:p-[20px] p-[15px] rounded-d-6 border lg:w-[200px]',
                field.carrierProvider === 'UPS' ? 'bg-white' : 'bg-white-40 hover:bg-white-30',
                fieldErrors?.carrierProvider ? 'border-red-600' : 'border-white'
              )}
            >
              <img src={uPsLogo.src} className="h-[27px]" />
            </button>
          </div>
        </div>
      )}
      {field.carrierProvider && (
        <Select
          label="Select Carrier Size"
          options={carrierSizes}
          value={findOption(carrierSizes, field.carrierSize)}
          error={fieldErrors?.carrierSize}
          onChange={({ value }) => setFieldItem('carrierSize', value)}
        />
      )}
      <div className="flex lg:flex-row lg:justify-between flex-col">
        <div className="flex flex-col gap-d-12">
          {isCustomDimensions && (
            <>
              {isBoxOrTube && (
                <>
                  <div className="font-bold">Dimensions</div>
                  <div className="flex lg:flex-row flex-col gap-d-16">
                    <div className="flex gap-d-16">
                      <Input
                        type="number"
                        placeholder="Length"
                        value={field.length}
                        error={fieldErrors?.length}
                        onChange={(value) => setFieldItem('length', value)}
                        containerClassName="lg:w-[135px]"
                      />
                      <div className="flex items-center flex-1">
                        <X />
                      </div>
                      <Input
                        type="number"
                        placeholder="Width"
                        value={field.width}
                        error={fieldErrors?.width}
                        onChange={(value) => setFieldItem('width', value)}
                        containerClassName="lg:w-[135px]"
                      />
                    </div>
                    <div className="flex gap-d-16">
                      <div className="flex items-center flex-1">
                        <X />
                      </div>
                      <Input
                        type="number"
                        placeholder="Height"
                        value={field.height}
                        error={fieldErrors?.height}
                        onChange={(value) => setFieldItem('height', value)}
                        containerClassName="lg:w-[135px]"
                      />
                      <Select
                        placeholder="Select Unit"
                        options={dimensionUnits}
                        error={fieldErrors?.dimensionUnit}
                        value={findOption(dimensionUnits, field.dimensionUnit)}
                        onChange={({ value }) => setFieldItem('dimensionUnit', value)}
                        containerClassName="lg:w-[135px]"
                      />
                    </div>
                  </div>
                  <div className="text-caption-xs">Enter dimensions of package</div>
                </>
              )}
              {!isBoxOrTube && (
                <>
                  <div className="flex flex-col gap-d-16">
                    <div className="flex gap-d-16">
                      <Input
                        type="number"
                        label="Length*"
                        placeholder="Length"
                        value={field.length}
                        error={fieldErrors?.length}
                        onChange={(value) => setFieldItem('length', value)}
                        containerClassName="lg:w-[326px]"
                        labelClassName="font-bold"
                      />
                      <Input
                        type="number"
                        label="Width*"
                        placeholder="Width"
                        value={field.width}
                        error={fieldErrors?.width}
                        onChange={(value) => setFieldItem('width', value)}
                        containerClassName="lg:w-[326px]"
                        labelClassName="font-bold"
                      />
                    </div>
                    <Select
                      label="Units"
                      placeholder="Select Unit"
                      options={dimensionUnits}
                      value={findOption(dimensionUnits, field.dimensionUnit)}
                      error={fieldErrors?.dimensionUnit}
                      onChange={({ value }) => setFieldItem('dimensionUnit', value)}
                      containerClassName="lg:w-[326px]"
                      labelClassName="font-bold"
                    />
                  </div>
                  <div className="text-caption-xs">Enter dimensions of package</div>
                </>
              )}
            </>
          )}
          <div className="flex flex-col gap-d-12">
            <div className="font-bold">
              {isCustomDimensions ? (isBoxOrTube ? 'Package' : 'Total') : 'Package'}
              &nbsp;Weight
            </div>
            <div className="flex gap-d-16">
              <Input
                type="number"
                placeholder="Weight"
                value={field.weight}
                error={fieldErrors?.weight}
                onChange={(value) => setFieldItem('weight', value)}
                containerClassName="lg:w-[180px]"
              />
              <Select
                placeholder=" "
                options={weightUnits}
                value={findOption(weightUnits, field.weightUnit)}
                error={fieldErrors?.weightUnit}
                onChange={({ value }) => setFieldItem('weightUnit', value)}
                containerClassName="lg:w-[100px]"
              />
            </div>
            <div className="text-caption-xs">Includes packaging</div>
          </div>
        </div>
        <div className="flex flex-col gap-d-12">
          <div className="font-bold"># of Identical Units</div>
          <Input
            type="number"
            value={field.identicalUnitsCount}
            error={fieldErrors?.identicalUnitsCount}
            onChange={(value) => setFieldItem('identicalUnitsCount', value)}
          />
        </div>
      </div>
      <GradientHR />
      <div className="flex flex-col gap-d-16">
        <Check
          label="Shipment contains alcohol"
          checked={field.containsAlcohol}
          onChange={(checked) => setFieldItem('containsAlcohol', checked)}
        />
        {field.containsAlcohol && (
          <div className="flex flex-col gap-d-16 lg:pl-[28px] pl-[21px]">
            <div>Alcohol recipient type</div>
            <div className="flex gap-d-24">
              <Radio
                label="License"
                value="License"
                checked={field.alcoholRecipientType === 'License'}
                onCheck={() => setFieldItem('alcoholRecipientType', 'License')}
                error={fieldErrors?.alcoholRecipientType}
              />
              <Radio
                label="Consumer"
                value="Consumer"
                checked={field.alcoholRecipientType === 'Consumer'}
                onCheck={() => setFieldItem('alcoholRecipientType', 'Consumer')}
                error={fieldErrors?.alcoholRecipientType}
              />
            </div>
            <div className="text-caption-xs lg:flex">
              <div className="text-gray">Complaint account with UPS and FedEx is required. For more info,&nbsp;</div>
              <Link href="#">visit our FAQ.</Link>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-d-16">
        <Check
          label="Shipment contains dry ice"
          checked={field.containsDryIce}
          onChange={(checked) => setFieldItem('containsDryIce', checked)}
        />
        {field.containsDryIce && (
          <Input
            placeholder="e.g.0.1"
            label="Dry ice weight (lb)*"
            value={field.dryIceWeight}
            error={fieldErrors?.dryIceWeight}
            onChange={(value) => setFieldItem('dryIceWeight', value)}
            containerClassName="lg:w-[180px]"
          />
        )}
      </div>
      <Check
        label="Create a return label"
        checked={field.isCreateReturnLabel}
        onChange={(checked) => setFieldItem('isCreateReturnLabel', checked)}
      />
      <Check
        checked={field.containsLithium}
        onChange={(checked) => setFieldItem('containsLithium', checked)}
        label="Shipment contains lithium batteries (hazardous material) only available for select services. Learn More"
        containerClassName="lg:max-w-[500px]"
      />
      <GradientHR />
      <div className="flex lg:flex-row flex-col gap-d-16 justify-end">
        <Button type="button" color="transparent" onClick={onAdd}>
          <div className="flex gap-d-10">
            <Plus />
            Add Another Field
          </div>
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  )
}
