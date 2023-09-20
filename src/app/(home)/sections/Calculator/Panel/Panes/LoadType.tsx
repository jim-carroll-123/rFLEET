import { SubmitHandler, UseFormReturn } from 'react-hook-form'

import Link from 'next/link'

import Delete from '@assets/icons/delete.svg'
import IconDHL from '@assets/icons/dhl.svg'
import IconFedex from '@assets/icons/fedex.svg'
import Plus from '@assets/icons/plus.svg'
import IconPostalService from '@assets/icons/postal-service.svg'
import X from '@assets/icons/x.svg'
import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { Check } from '@components/ui/Check'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Radio } from '@components/ui/Radio'
import { Select } from '@components/ui/Select'

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
    formState: { errors }
  } = methods

  const isCustomDimensions = watch('parcelType') === 'Enter Custom Dimensions'
  const isBoxOrTube = watch('parcelShape').value === 'Box or Tube'

  const fields: Field[] = watch('fields')
  const field = fields[fields.length - 1]

  const setFieldItem = (key: keyof Field, value: any) => {
    const newField = { ...field, [key]: value }
    const newFields = [...fields.slice(0, fields.length - 1), newField]
    setValue('fields', newFields)
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
          value={watch('parcelShape')}
          options={parcelShapes}
          onChange={(value) => setValue('parcelShape', value)}
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
                {el.length}X{el.width}X{el.height} {el.dimensionUnit?.value} {el.weight}
                {el.weightUnit?.value}
              </div>
              <div className="flex shrink-0 justify-center items-center lg:px-[40px] px-[30px] lg:py-[20px] py-[15px]">
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
      <GradientHR />
      {!isCustomDimensions && (
        <div className="flex flex-col gap-d-16">
          <div className="font-bold">Select Carrier</div>
          <div className="flex lg:flex-row flex-col gap-d-16">
            <button className="flex justify-center lg:p-[20px] p-[15px] rounded-d-6 border border-white bg-white-40 hover:bg-white-30 lg:w-[200px]">
              <IconPostalService />
            </button>
            <button className="flex justify-center lg:p-[20px] p-[15px] rounded-d-6 border border-white bg-white-40 hover:bg-white-30 lg:w-[200px]">
              <IconFedex />
            </button>
            <button className="flex justify-center lg:p-[20px] p-[15px] rounded-d-6 border border-white bg-white-40 hover:bg-white-30 lg:w-[200px]">
              <IconDHL />
            </button>
          </div>
        </div>
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
                        onChange={(value) => setFieldItem('height', value)}
                        containerClassName="lg:w-[135px]"
                      />
                      <Select
                        placeholder="Select Unit"
                        options={dimensionUnits}
                        value={field.dimensionUnit}
                        onChange={(value) => setFieldItem('dimensionUnit', value)}
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
                        onChange={(value) => setFieldItem('length', value)}
                        containerClassName="lg:w-[326px]"
                        labelClassName="font-bold"
                      />
                      <Input
                        type="number"
                        label="Width*"
                        placeholder="Width"
                        value={field.width}
                        onChange={(value) => setFieldItem('width', value)}
                        containerClassName="lg:w-[326px]"
                        labelClassName="font-bold"
                      />
                    </div>
                    <Select
                      label="Units"
                      placeholder="Select Unit"
                      options={dimensionUnits}
                      value={field.dimensionUnit}
                      onChange={(value) => setFieldItem('dimensionUnit', value)}
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
            <div className="font-bold">{isBoxOrTube ? 'Package' : 'Total'} Weight</div>
            <div className="flex gap-d-16">
              <Input
                type="number"
                placeholder="Weight"
                value={field.weight}
                onChange={(value) => setFieldItem('weight', value)}
                containerClassName="lg:w-[180px]"
              />
              <Select
                placeholder=" "
                options={weightUnits}
                value={field.weightUnit}
                onChange={(value) => setFieldItem('weightUnit', value)}
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
            min={1}
            value={field.identicalUnitsCount}
            onChange={(value) => setFieldItem('identicalUnitsCount', value)}
          />
        </div>
      </div>
      <GradientHR />
      <div className="flex flex-col gap-d-16">
        <Check label="Shipment contains alcohol" />
        <div className="flex flex-col gap-d-16 lg:pl-[28px] pl-[21px]">
          <div>Alcohol recipient type</div>
          <div className="flex gap-d-24">
            <Radio
              label="License"
              value="License"
              checked={field.alcoholRecipientType === 'License'}
              onCheck={() => setFieldItem('alcoholRecipientType', 'License')}
            />
            <Radio
              label="Consumer"
              value="Consumer"
              checked={field.alcoholRecipientType === 'Consumer'}
              onCheck={() => setFieldItem('alcoholRecipientType', 'Consumer')}
            />
          </div>
          <div className="text-caption-xs lg:flex">
            <div className="text-gray">Complaint account with UPS and FedEx is required. For more info,&nbsp;</div>
            <Link href="#">visit our FAQ.</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-d-16">
        <Check
          label="Shipment contains dry ice"
          checked={field.containsDryIce}
          onChange={(checked) => setFieldItem('containsDryIce', checked)}
        />
        <Input
          placeholder="e.g.0.1"
          label="Dry ice weight (lb)*"
          value={field.dryIceWeight}
          onChange={(value) => setFieldItem('dryIceWeight', value)}
          containerClassName="lg:w-[180px]"
        />
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
        <Button color="transparent" onClick={() => setValue('fields', [...fields, { ...initialField }])}>
          <div className="flex gap-d-10">
            <Plus />
            Add Another Field
          </div>
        </Button>
        <Button>Confirm</Button>
      </div>
    </form>
  )
}
