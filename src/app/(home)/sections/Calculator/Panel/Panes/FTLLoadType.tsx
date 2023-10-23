import React, { useState } from 'react'
import { Controller, SubmitHandler, UseFormReturn, useFieldArray } from 'react-hook-form'
import { BiEdit, BiPencil, BiPlus } from 'react-icons/bi'
import { ImPencil } from 'react-icons/im'

import Link from 'next/link'

import X from '@assets/icons/x.svg'
import gradientCard from '@assets/images/gradient-card-cyan-indigo-to-r.png'
import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { GradientHR } from '@components/ui/GradientHR'
import { Input } from '@components/ui/Input'
import { Radio } from '@components/ui/Radio'
import { Select, findOption } from '@components/ui/Select'

import { FtlLoadTypeInputs, initialDrayage, initialHazmatTL, initialStandardTL } from '../ftl-schemas'
import {
  containerTypes,
  dimensionUnits,
  handlingUnits,
  incotermOptions,
  loadSizes,
  loadTypes,
  truckSizes,
  truckTypes,
  weightTypes,
  weightUnits
} from '../options'
import { initialOceanFclField, initialOceanField } from '../types-schemas-constants'

interface Props {
  methods: UseFormReturn<FtlLoadTypeInputs>
  onSubmit: SubmitHandler<FtlLoadTypeInputs>
}

export const FTLLoadType = ({ methods, onSubmit }: Props) => {
  const {
    watch,
    setValue,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
    control
  } = methods

  const ContainerLoadTypes = [
    {
      value: 'Standard TL',
      title: 'Standard TL'
    },
    {
      value: 'Hazmat TL',
      title: 'Hazmat TL'
    },
    {
      value: 'Drayage',
      title: 'Drayage/Power Only'
    },
    {
      value: 'Oversize TL',
      title: 'Oversize TL'
    }
  ]
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:gap-[24px] gap-[18px]">
      <div className="text-body-lg font-semibold">What are you shipping?</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {ContainerLoadTypes.map((loadType) => (
          <Radio
            key={loadType.value}
            value={loadType.value}
            checked={watch('containerLoadType') === loadType.value}
            onCheck={() => setValue('containerLoadType', loadType.value, { shouldValidate: true })}
            label={
              <div className="flex items-center">
                <div className="">{loadType.title}</div>
              </div>
            }
            error={errors.containerLoadType?.message}
            labelClassName="text-heading w-full"
            containerClassName="w-full border-2 rounded-md p-2"
          />
        ))}
      </div>

      <GradientHR />
      <div>
        {watch('containerLoadType') === 'Standard TL' && <StandardTL methods={methods} />}
        {watch('containerLoadType') === 'Hazmat TL' && <HazmatTL methods={methods} />}
        {watch('containerLoadType') === 'Drayage' && <Drayage methods={methods} />}
        {watch('containerLoadType') === 'Oversize TL' && <OversizeTL methods={methods} />}
      </div>

      <GradientHR />
      <div className="flex flex-col gap-4">
        <div className="text-body-lg font-semibold">Additional Service Options</div>
        <GradientCard>
          <div className="grid grid-cols-3 w-full">
            <div className="items-start flex flex-col gap-4">
              <div className="uppercase">Pickup</div>

              <div className="flex flex-col gap-3">
                <Radio
                  value="Liftgate-Ground Pickup"
                  label="Liftgate-Ground Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Inside Pickup"
                  label="Inside Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Liftgate-Ground Pickup"
                  label="Liftgate-Ground Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Limited Access Pickup"
                  label="Limited Access Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Residential Pickup"
                  label="Residential Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />

                <Radio
                  value="Appointment for Pickup"
                  label="Appointment for Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />

                <Radio
                  value="Airport Pickup"
                  label="Airport Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Secure Shipment Divider"
                  label="Secure Shipment Divider"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />

                <Radio
                  value="Threshold Pickup"
                  label="Threshold Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />

                <Radio
                  value="Trade Show Pickup"
                  label="Trade Show Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="uppercase">Delivery</div>

              <div className="flex flex-col gap-3">
                <Radio
                  value="Liftgate-Ground Delivery"
                  label="Liftgate-Ground Delivery"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Inside Delivery"
                  label="Inside Delivery"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Liftgate-Ground Delivery"
                  label="Liftgate-Ground Delivery"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Limited Access Delivery"
                  label="Limited Access Delivery"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Residential Delivery"
                  label="Residential Delivery"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />

                <Radio
                  value="Appointment for Pickup"
                  label="Appointment for Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />

                <Radio
                  value="Airport Pickup"
                  label="Airport Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
                <Radio
                  value="Secure Shipment Divider"
                  label="Secure Shipment Divider"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />

                <Radio
                  value="Threshold Pickup"
                  label="Threshold Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />

                <Radio
                  value="Trade Show Pickup"
                  label="Trade Show Pickup"
                  labelClassName="font-light "
                  containerClassName="w-full "
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="uppercase">Other</div>

              <div className="flex flex-col gap-3">
                <Radio
                  value="Do not Stack"
                  label="Do not Stack"
                  labelClassName="font-light"
                  containerClassName="w-full "
                />
                <Radio
                  value="Flatbed Delivery"
                  label="Flatbed Delivery"
                  labelClassName="font-light"
                  containerClassName="w-full "
                />
                <Radio
                  value="Arrival Notification"
                  label="Arrival Notification"
                  labelClassName="font-light"
                  containerClassName="w-full "
                />
                <Radio
                  value="Customs Clearance"
                  label="Customs Clearance"
                  labelClassName="font-light"
                  containerClassName="w-full "
                />
                <Radio
                  value="Freeze Protection"
                  label="Freeze Protection"
                  labelClassName="font-light"
                  containerClassName="w-full "
                />

                <Radio
                  value="Pickup/Delivery at Port"
                  label="Pickup/Delivery at Port"
                  labelClassName="font-light"
                  containerClassName="w-full "
                />
              </div>
            </div>
          </div>
        </GradientCard>
      </div>
      <div className="flex flex-col gap-d-16 mt-0">
        <Controller
          name="containsAlcohol"
          control={control}
          render={({ field }) => <Check label="Shipment contains alcohol" {...field} />}
        />

        {watch('containsAlcohol') && (
          <div className="flex flex-col gap-d-16 lg:pl-[28px] pl-[21px]">
            <div>Alcohol recipient type</div>
            <div className="flex gap-d-24">
              <Controller
                name="alcoholRecipientType"
                control={control}
                render={({ field }) => (
                  <>
                    <Radio
                      label="License"
                      {...field}
                      value="License"
                      onCheck={() => setValue('alcoholRecipientType', 'License')}
                      checked={watch('alcoholRecipientType') === 'License'}
                      error={errors.alcoholRecipientType?.message}
                    />
                  </>
                )}
              />

              <Controller
                name="alcoholRecipientType"
                control={control}
                render={({ field }) => (
                  <>
                    <Radio
                      label="Consumer"
                      {...field}
                      value="Consumer"
                      onCheck={() => setValue('alcoholRecipientType', 'Consumer')}
                      checked={watch('alcoholRecipientType') === 'Consumer'}
                      error={errors.alcoholRecipientType?.message}
                    />
                  </>
                )}
              />
            </div>
            <div className="text-caption lg:flex">
              <div className="text-gray">Complaint account with UPS and FedEx is required. For more info,&nbsp;</div>
              <Link href="#">visit our FAQ.</Link>
            </div>
          </div>
        )}
        <Check
          label="Shipment contains dry ice"
          checked={watch('containsDryIce')}
          onChange={(checked) => setValue('containsDryIce', checked)}
        />
        {watch('containsDryIce') && (
          <Input
            type="number"
            placeholder="e.g.0.1"
            label="Dry ice weight (lb)*"
            value={watch('dryIceWeight')}
            error={errors.dryIceWeight?.message}
            onChange={(value) => setValue('dryIceWeight', value)}
            containerClassName="lg:w-[180px]"
          />
        )}

        <Check
          checked={watch('containsLithium')}
          onChange={(checked) => setValue('containsLithium', checked)}
          label="Shipment contains lithium batteries (hazardous material) only available for select services. Learn More"
          containerClassName="lg:max-w-[500px]"
        />
      </div>

      <GradientHR />
      <div className="flex lg:flex-row flex-col gap-d-16 justify-end">
        <Button type="reset" color="transparent">
          <div className="flex gap-d-10">Clear</div>
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  )
}

const StandardTL = ({ methods }: { methods: UseFormReturn<FtlLoadTypeInputs> }) => {
  const {
    watch,
    setValue,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
    control
  } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'standardTL'
  })

  return (
    <div className="relative">
      {fields.map((item, index) => (
        <div key={index} className="grid lg:grid-cols-10 grid-cols-1  gap-4 my-4">
          <div className="col-span-2 flex flex-col gap-2">
            <div className="text-sm">Truck Type</div>
            <Controller
              name={`standardTL.${index}.truckType`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  placeholder=""
                  options={truckTypes}
                  error={errors.standardTL && errors.standardTL[index]?.truckType?.message}
                  containerClassName="lg:w-[180px]"
                  {...field}
                  value={findOption(truckTypes, watch(`standardTL.${index}.truckType`))}
                  onChange={({ value }) => setValue(`standardTL.${index}.truckType`, value, { shouldValidate: true })}
                />
              )}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <div className="text-sm">Truck Size</div>
            <Controller
              name={`standardTL.${index}.truckSize`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  placeholder=""
                  options={truckSizes}
                  error={errors.standardTL && errors.standardTL[index]?.truckSize?.message}
                  containerClassName="lg:w-[180px]"
                  {...field}
                  value={findOption(truckSizes, watch(`standardTL.${index}.truckSize`))}
                  onChange={({ value }) => setValue(`standardTL.${index}.truckSize`, value, { shouldValidate: true })}
                />
              )}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <div className="text-sm"># of Trucks </div>

            <Controller
              name={`standardTL.${index}.noOfTrucks`}
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  placeholder=""
                  error={errors.standardTL && errors.standardTL[index]?.noOfTrucks?.message}
                  containerClassName="lg:w-[180px]"
                  {...field}
                />
              )}
            />
          </div>

          <div className="col-span-3 flex flex-col gap-1">
            <div className="text-sm flex items-center gap-5 ">
              Weight per unit
              <Check
                label="Inclides packaging"
                labelClassName="text-xs my-auto"
                checked={watch(`standardTL.${index}.includesPackaging`)}
                onChange={(checked) => setValue(`standardTL.${index}.includesPackaging`, checked)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Controller
                name={`standardTL.${index}.weight`}
                control={control}
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder="Weight"
                    labelClassName="text-xs"
                    error={errors.standardTL && errors.standardTL[index]?.weight?.message}
                    containerClassName="lg:w-[190px]"
                    {...field}
                  />
                )}
              />
              <Controller
                name={`standardTL.${index}.weightUnit`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={weightUnits}
                    error={errors.standardTL && errors.standardTL[index]?.weightUnit?.message}
                    containerClassName="lg:w-[100px]"
                    {...field}
                    value={findOption(weightUnits, watch(`standardTL.${index}.weightUnit`))}
                    onChange={({ value }) =>
                      setValue(`standardTL.${index}.weightUnit`, value, { shouldValidate: true })
                    }
                  />
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const HazmatTL = ({ methods }: { methods: UseFormReturn<FtlLoadTypeInputs> }) => {
  const {
    watch,
    setValue,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
    control
  } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'hazmatTL'
  })

  const onAdd = async () => {
    const validated = await trigger('hazmatTL')
    if (validated) {
      append({ ...initialHazmatTL })
    }
    return
  }

  return (
    <>
      <div className="relative rounded-d-8 p-3 border border-[#FFFFFF30]   w-full ">
        {fields.map((item, index) => (
          <div key={index} className="grid lg:grid-cols-10 grid-cols-1  gap-4 my-4">
            <div className="col-span-2 flex flex-col gap-2">
              <div className="text-sm">Truck Type</div>
              <Controller
                name={`hazmatTL.${index}.truckType`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={truckTypes}
                    error={errors.hazmatTL && errors.hazmatTL[index]?.truckType?.message}
                    containerClassName="lg:w-[180px]"
                    {...field}
                    value={findOption(truckTypes, watch(`hazmatTL.${index}.truckType`))}
                    onChange={({ value }) => setValue(`hazmatTL.${index}.truckType`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <div className="text-sm">Truck Size</div>
              <Controller
                name={`hazmatTL.${index}.truckSize`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={truckSizes}
                    error={errors.hazmatTL && errors.hazmatTL[index]?.truckSize?.message}
                    containerClassName="lg:w-[180px]"
                    {...field}
                    value={findOption(truckSizes, watch(`hazmatTL.${index}.truckSize`))}
                    onChange={({ value }) => setValue(`hazmatTL.${index}.truckSize`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <div className="text-sm"># of Trucks </div>

              <Controller
                name={`hazmatTL.${index}.noOfTrucks`}
                control={control}
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder=""
                    error={errors.hazmatTL && errors.hazmatTL[index]?.noOfTrucks?.message}
                    containerClassName="lg:w-[140px]"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="col-span-3 flex flex-col gap-2">
              <div className="text-sm flex items-center gap-5 ">
                Weight per unit
                <Check
                  label="Inclides packaging"
                  labelClassName="text-xs my-auto"
                  checked={watch(`hazmatTL.${index}.includesPackaging`)}
                  onChange={(checked) => setValue(`hazmatTL.${index}.includesPackaging`, checked)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Controller
                  name={`hazmatTL.${index}.weight`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="Weight"
                      labelClassName="text-xs"
                      error={errors.hazmatTL && errors.hazmatTL[index]?.weight?.message}
                      containerClassName="lg:w-[190px]"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name={`hazmatTL.${index}.weightUnit`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      placeholder=""
                      options={weightUnits}
                      error={errors.hazmatTL && errors.hazmatTL[index]?.weightUnit?.message}
                      containerClassName="lg:w-[100px]"
                      {...field}
                      value={findOption(weightUnits, watch(`hazmatTL.${index}.weightUnit`))}
                      onChange={({ value }) =>
                        setValue(`hazmatTL.${index}.weightUnit`, value, { shouldValidate: true })
                      }
                    />
                  )}
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <div className="text-sm">Select Incoterm </div>
              <Controller
                name={`hazmatTL.${index}.incoterm`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={incotermOptions}
                    error={errors.hazmatTL && errors.hazmatTL[index]?.incoterm?.message}
                    containerClassName="lg:w-[180px]"
                    {...field}
                    value={findOption(incotermOptions, watch(`hazmatTL.${index}.incoterm`))}
                    onChange={({ value }) => setValue(`hazmatTL.${index}.incoterm`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>
          </div>
        ))}
        <div className="absolute right-4 bottom-7 flex items-center justify-end mt-6 gap-4">
          <Button type="button" onClick={onAdd} size="sm" className="lg:w-auto w-full h-fit  ">
            <BiPlus className="lg:w-[20px] w-[15px] lg:h-[20px] h-[15px]" />
            Add Another Field
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex gap-3 font-bold p-2">
          <div className="basis-2/12">Incoterm</div>
          <div className="basis-10/12">Description</div>
        </div>
        <div className="flex gap-3 font-light rounded-md p-3 bg-[rgba(249,249,249,0.1)] bg-opacity-10 backdrop-blur-[40px]  ">
          {
            <>
              <div className="basis-2/12">Class 3: Flammable Liquids:</div>
              <div className="basis-10/12 text-sm">
                Liquids that have a flashpoint below 140°F (60°C) and can easily catch fire. Examples include gasoline,
                alcohol, and some paints.
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

const Drayage = ({ methods }: { methods: UseFormReturn<FtlLoadTypeInputs> }) => {
  const {
    watch,
    setValue,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
    control
  } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'drayage'
  })

  const onAdd = async () => {
    const validated = await trigger('drayage')
    if (validated) {
      append({ ...initialDrayage })
    }
    return
  }

  return (
    <>
      <div className="relative rounded-d-8 p-3 border border-[#FFFFFF30]   w-full ">
        {fields.map((item, index) => (
          <div key={index} className="grid lg:grid-cols-10 grid-cols-1  gap-4 my-4">
            <div className="col-span-3 flex flex-col gap-2">
              <div className="text-sm">Load Type</div>
              <Controller
                name={`drayage.${index}.loadType`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={loadTypes}
                    error={errors.drayage && errors.drayage[index]?.loadType?.message}
                    containerClassName="w-full"
                    {...field}
                    value={findOption(loadTypes, watch(`drayage.${index}.loadType`))}
                    onChange={({ value }) => setValue(`drayage.${index}.loadType`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="text-sm">Size</div>
              <Controller
                name={`drayage.${index}.loadSize`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={loadSizes}
                    error={errors.drayage && errors.drayage[index]?.loadSize?.message}
                    containerClassName=""
                    {...field}
                    value={findOption(loadSizes, watch(`drayage.${index}.loadSize`))}
                    onChange={({ value }) => setValue(`drayage.${index}.loadSize`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>

            <div className="col-span-3 flex flex-col gap-1">
              <div className="text-sm flex items-center gap-5 ">
                Total Weight
                <Check
                  label="Add Extra Pickups"
                  labelClassName="text-xs my-auto"
                  checked={watch(`drayage.${index}.addExtraPickups`)}
                  onChange={(checked) => setValue(`drayage.${index}.addExtraPickups`, checked)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Controller
                  name={`drayage.${index}.weight`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="Weight"
                      labelClassName="text-xs"
                      error={errors.drayage && errors.drayage[index]?.weight?.message}
                      containerClassName="lg:w-[190px]"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name={`drayage.${index}.weightUnit`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      placeholder=""
                      options={weightUnits}
                      error={errors.drayage && errors.drayage[index]?.weightUnit?.message}
                      containerClassName="lg:w-[100px]"
                      {...field}
                      value={findOption(weightUnits, watch(`drayage.${index}.weightUnit`))}
                      onChange={({ value }) => setValue(`drayage.${index}.weightUnit`, value, { shouldValidate: true })}
                    />
                  )}
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <div className="text-sm"># of Trucks </div>

              <Controller
                name={`drayage.${index}.noOfTrucks`}
                control={control}
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder=""
                    error={errors.drayage && errors.drayage[index]?.noOfTrucks?.message}
                    containerClassName=""
                    {...field}
                  />
                )}
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <div className="text-sm">Select Incoterm </div>
              <Controller
                name={`drayage.${index}.incoterm`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={incotermOptions}
                    error={errors.drayage && errors.drayage[index]?.incoterm?.message}
                    containerClassName="lg:w-[180px]"
                    {...field}
                    value={findOption(incotermOptions, watch(`drayage.${index}.incoterm`))}
                    onChange={({ value }) => setValue(`drayage.${index}.incoterm`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>
          </div>
        ))}
        <div className="absolute right-4 bottom-7 flex items-center justify-end mt-6 gap-4">
          <Button type="button" onClick={onAdd} size="sm" className="lg:w-auto w-full h-fit  ">
            <BiPlus className="lg:w-[20px] w-[15px] lg:h-[20px] h-[15px]" />
            Add Another Field
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex gap-3 font-bold p-2">
          <div className="basis-2/12">Incoterm</div>
          <div className="basis-10/12">Description</div>
        </div>
        <div className="flex gap-3 font-light rounded-md p-3 bg-[rgba(249,249,249,0.1)] bg-opacity-10 backdrop-blur-[40px]  ">
          {
            <>
              <div className="basis-2/12">Savannah GA</div>
              <div className="basis-10/12 text-sm">
                Georgia Port Authority: Gardern City Terminal
                <br />
                <br />
                Address: 55N Lathrop Ave, Savannah, GA 31401
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

const OversizeTL = ({ methods }: { methods: UseFormReturn<FtlLoadTypeInputs> }) => {
  const {
    watch,
    setValue,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
    control
  } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'oversizeTL'
  })

  const onAdd = async () => {
    const validated = await trigger('oversizeTL')
    if (validated) {
      append({ ...initialDrayage })
    }
    return
  }

  return (
    <>
      <div className="relative rounded-d-8 p-3 border border-[#FFFFFF30]   w-full ">
        {fields.map((item, index) => (
          <div key={index} className="grid lg:grid-cols-10 grid-cols-1  gap-4 my-4">
            <div className="col-span-3 flex flex-col gap-2">
              <div className="text-sm">Load Type</div>
              <Controller
                name={`oversizeTL.${index}.loadType`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={loadTypes}
                    error={errors.oversizeTL && errors.oversizeTL[index]?.loadType?.message}
                    containerClassName="w-full"
                    {...field}
                    value={findOption(loadTypes, watch(`oversizeTL.${index}.loadType`))}
                    onChange={({ value }) => setValue(`oversizeTL.${index}.loadType`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="text-sm">Size</div>
              <Controller
                name={`oversizeTL.${index}.loadSize`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={loadSizes}
                    error={errors.oversizeTL && errors.oversizeTL[index]?.loadSize?.message}
                    containerClassName=""
                    {...field}
                    value={findOption(loadSizes, watch(`oversizeTL.${index}.loadSize`))}
                    onChange={({ value }) => setValue(`oversizeTL.${index}.loadSize`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>

            <div className="col-span-3 flex flex-col gap-1">
              <div className="text-sm flex items-center gap-5 ">
                Total Weight
                <Check
                  label="Add Extra Pickups"
                  labelClassName="text-xs my-auto"
                  checked={watch(`oversizeTL.${index}.addExtraPickups`)}
                  onChange={(checked) => setValue(`oversizeTL.${index}.addExtraPickups`, checked)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Controller
                  name={`oversizeTL.${index}.weight`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="Weight"
                      labelClassName="text-xs"
                      error={errors.oversizeTL && errors.oversizeTL[index]?.weight?.message}
                      containerClassName="lg:w-[190px]"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name={`oversizeTL.${index}.weightUnit`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      placeholder=""
                      options={weightUnits}
                      error={errors.oversizeTL && errors.oversizeTL[index]?.weightUnit?.message}
                      containerClassName="lg:w-[100px]"
                      {...field}
                      value={findOption(weightUnits, watch(`oversizeTL.${index}.weightUnit`))}
                      onChange={({ value }) =>
                        setValue(`oversizeTL.${index}.weightUnit`, value, { shouldValidate: true })
                      }
                    />
                  )}
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <div className="text-sm"># of Trucks </div>

              <Controller
                name={`oversizeTL.${index}.noOfTrucks`}
                control={control}
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder=""
                    error={errors.oversizeTL && errors.oversizeTL[index]?.noOfTrucks?.message}
                    containerClassName=""
                    {...field}
                  />
                )}
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <div className="text-sm">Select Incoterm </div>
              <Controller
                name={`oversizeTL.${index}.incoterm`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    placeholder=""
                    options={incotermOptions}
                    error={errors.oversizeTL && errors.oversizeTL[index]?.incoterm?.message}
                    containerClassName="lg:w-[180px]"
                    {...field}
                    value={findOption(incotermOptions, watch(`oversizeTL.${index}.incoterm`))}
                    onChange={({ value }) => setValue(`oversizeTL.${index}.incoterm`, value, { shouldValidate: true })}
                  />
                )}
              />
            </div>
          </div>
        ))}
        <div className="absolute right-4 bottom-7 flex items-center justify-end mt-6 gap-4">
          <Button type="button" onClick={onAdd} size="sm" className="lg:w-auto w-full h-fit  ">
            <BiPlus className="lg:w-[20px] w-[15px] lg:h-[20px] h-[15px]" />
            Add Another Field
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex gap-3 font-bold p-2">
          <div className="basis-2/12">Incoterm</div>
          <div className="basis-10/12">Description</div>
        </div>
        <div className="flex gap-3 font-light rounded-md p-3 bg-[rgba(249,249,249,0.1)] bg-opacity-10 backdrop-blur-[40px]  ">
          {
            <>
              <div className="basis-2/12">Over-weight/Over-dimensional</div>
              <div className="basis-10/12 text-sm">
                Over-weight means the exceeding of statutory weight limits for over the road trucking.
                <br />
                <br />
                Over-dimensional or “oversize” means the exceeding of statutory length, width or height limits.
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export const GradientCard = ({ children }: { children: React.ReactNode }) => (
  <div
    className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[22px] lg:mb-[12px] mb-[8px] rounded-md"
    style={{ background: `url(${gradientCard.src})`, backgroundSize: '100% 100%' }}
  >
    {children}
  </div>
)
