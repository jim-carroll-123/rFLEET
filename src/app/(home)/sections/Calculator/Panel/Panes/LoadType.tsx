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

import { dimensionUnits, parcelShapes, returnLabels, weightUnits } from '../options'
import { Dimensions, Field, LoadTypeInputs, initialField } from '../types-schemas-constants'

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

  var carrierSizes: Option[] = []
  if(field.carrierProvider === 'Postal Service') {
     carrierSizes = [
      {
        label: `USPS®️ Lightweight Letter`,
        value: 'USPS®️ Lightweight Letter'
      },
      {
        label: `USPS®️ Small Flat Rate Box`,
        value: 'USPS®️ Small Flat Rate Box'
      },
      {
        label: `USPS®️ Large Video Box`,
        value: 'USPS®️ Large Video Box'
      },
      {
        label: `USPS®️ Lightweight Large Envelope`,
        value: 'USPS®️ Lightweight Large Envelope'
      },
      {
        label: `USPS®️ Small Flat Rate Envelope`,
        value: 'USPS®️ Small Flat Rate Envelope'
      },
      {
        label: `USPS®️ Gift Card Flat Rate Envelope`,
        value: 'USPS®️ Gift Card Flat Rate Envelope'
      },
      {
        label: `USPS®️ Flat Rate Envelope`,
        value: 'USPS®️ Flat Rate Envelope'
      },
      {
        label: `USPS®️ Padded Flate Rate Envelope`,
        value: 'USPS®️ Padded Flate Rate Envelope'
      },
      {
        label: `USPS®️ Window Flat Rate Envelope`,
        value: 'USPS®️ Window Flat Rate Envelope'
      },
      {
        label: `USPS®️ Legal Flat Rate Envelope`,
        value: 'USPS®️ Legal Flat Rate Envelope'
      },
      {
        label: `USPS®️ Medium Flat Rate Box 2`,
        value: 'USPS®️ Medium Flat Rate Box 2'
      },
      {
        label: `USPS®️ Medium Flat Rate Box 1`,
        value: 'USPS®️ Medium Flat Rate Box 1'
      },
      {
        label: `USPS®️ Large Flat Rate Board Game Box`,
        value: 'USPS®️ Large Flat Rate Board Game Box'
      },
      {
        label: `USPS®️ Large Flat Rate Box`,
        value: 'USPS®️ Large Flat Rate Box'
      }
    ]
  }else if(field.carrierProvider === 'FedEx') {
    carrierSizes = [
      {
        label: `FedEx®️ Small Box 1`,
        value: 'FedEx®️ Small Box 1'
      },
      {
        label: `FedEx®️ Small Box 2`,
        value: 'FedEx®️ Small Box 2'
      },
      {
        label: `FedEx®️ Medium Box 1`,
        value: 'FedEx®️ Medium Box 1'
      },
      {
        label: `FedEx®️ Medium Box 2`,
        value: 'FedEx®️ Medium Box 2'
      }
    ]
  }else if(field.carrierProvider === 'UPS'){
    carrierSizes = [
      {
        label: `UPS®️ Letter`,
        value: 'UPS®️ Letter'
      },
      {
        label: `UPS®️ Pak Medium`,
        value: 'UPS®️ Pak Medium'
      },
      {
        label: `UPS®️ Pak Large`,
        value: 'UPS®️ Pak Large'
      },
      {
        label: `UPS®️ 10KG Box`,
        value: 'UPS®️ 10KG Box'
      },
      {
        label: `UPS®️ 25KG Box`,
        value: 'UPS®️ 25KG Box'
      }
    ]
  }


  const setFieldItem = (key: keyof Field, value: any) => {
    const newField = { ...field, [key]: value }
    const newFields = [...fields.slice(0, fields.length - 1), newField]
    setValue('fields', newFields, { shouldValidate: true })
  }

  const onAdd = async () => {
    const validated = await trigger()
    if (validated) {
      setValue('fields', [...fields, { ...initialField }])
    }
    return
  }

  enum CarrierSize {
    USPSLL = 'USPS®️ Lightweight Letter',
    USPSSFRB = 'USPS®️ Small Flat Rate Box',
    USPSLVB = 'USPS®️ Large Video Box',
    USPSLLE = 'USPS®️ Lightweight Large Envelope',
    USPSSFRE = 'USPS®️ Small Flat Rate Envelope',
    USPSGCFRE = 'USPS®️ Gift Card Flat Rate Envelope',
    USPSFRE = 'USPS®️ Flat Rate Envelope',
    USPSPFRE = 'USPS®️ Padded Flate Rate Envelope',
    USPSWFRE = 'USPS®️ Window Flat Rate Envelope',
    USPSLFRE = 'USPS®️ Legal Flat Rate Envelope',
    USPSMFRB2 = 'USPS®️ Medium Flat Rate Box 2',
    USPSMFRB1 = 'USPS®️ Medium Flat Rate Box 1',
    USPSLFRBGB = 'USPS®️ Large Flat Rate Board Game Box',
    USPSLFRB = 'USPS®️ Large Flat Rate Box',

    FEDSB1 = 'FedEx®️ Small Box 1',
    FEDSB2 = 'FedEx®️ Small Box 2',
    FEDMB1 = 'FedEx®️ Medium Box 1',
    FEDMB2 = 'FedEx®️ Medium Box 2',

    UPSL = 'UPS®️ Letter',
    UPSPM = 'UPS®️ Pak Medium',
    UPSPL = 'UPS®️ Pak Large',
    UPS10B = 'UPS®️ 10KG Box',
    UPS25B = 'UPS®️ 25KG Box',
  }

  const sizeDimensions: { [key in CarrierSize]: Dimensions } = {
    [CarrierSize.USPSLL]: { length: '11.5', width: '6.125', height: '0.25', unit: 'in' }, 
    [CarrierSize.USPSSFRB]: { length: '8.6875', width: '5.4375', height: '1.75', unit: 'in'},
    [CarrierSize.USPSLVB]: { length: '9.25', width: '6.25', height: '2', unit: 'in'},
    [CarrierSize.USPSLLE]: { length: '15', width: '12', height: '0.75', unit: 'in'},
    [CarrierSize.USPSSFRE]: { length: '10', width: '6', height: '3', unit: 'in'},
    [CarrierSize.USPSGCFRE]: { length: '10', width: '7', height: '3', unit: 'in'},
    [CarrierSize.USPSFRE]: { length: '12.5', width: '9.5', height: '3', unit: 'in'},
    [CarrierSize.USPSPFRE]: { length: '12.5', width: '9.5', height: '3', unit: 'in'},
    [CarrierSize.USPSWFRE]: { length: '12.5', width: '9.5', height: '3', unit: 'in'},
    [CarrierSize.USPSLFRE]: { length: '15', width: '9.5', height: '3', unit: 'in'},
    [CarrierSize.USPSMFRB2]: { length: '14', width: '12', height: '3.5', unit: 'in'},
    [CarrierSize.USPSMFRB1]: { length: '11.25', width: '8.75', height: '6', unit: 'in'},
    [CarrierSize.USPSLFRBGB]: { length: '24.0625', width: '11.875', height: '3.125', unit: 'in'},
    [CarrierSize.USPSLFRB]: { length: '12.25', width: '12.25', height: '6', unit: 'in'},

    [CarrierSize.FEDSB1]: { length: '10.875', width: '1.5', height: '12.375', unit: 'in'},
    [CarrierSize.FEDSB2]: { length: '8.75', width: '2.625', height: '11.25', unit: 'in'},
    [CarrierSize.FEDMB1]: { length: '11.5', width: '2.375', height: '13.25', unit: 'in'},
    [CarrierSize.FEDMB2]: { length: '8.75', width: '4.375', height: '11.25', unit: 'in'},

    [CarrierSize.UPSL]: { length: '14.9375', width: '9.4375', height: '3', unit: 'in'},
    [CarrierSize.UPSPM]: { length: '16.0625', width: '12.8125', height: '3', unit: 'in'},
    [CarrierSize.UPSPL]: { length: '17.6875', width: '16.125', height: '3', unit: 'in'},
    [CarrierSize.UPS10B]: { length: '16.5625', width: '13.375', height: '10.625', unit: 'in'},
    [CarrierSize.UPS25B]: { length: '19.6875', width: '17.6875', height: '13.375', unit: 'in'},
  }


  const handleCarrierSizeChange = (selectedSizeValue: string) => {
    // Cast the value to CarrierSize if it is one of its keys, otherwise null
    const selectedSize = Object.values(CarrierSize).includes(selectedSizeValue as CarrierSize)
      ? (selectedSizeValue as CarrierSize)
      : null;
  
    if (!selectedSize) {
      console.error('Invalid carrier size selected.');
      return;
    }
  
    const dimensions = sizeDimensions[selectedSize];
    if (!dimensions) {
      console.error('Selected carrier size does not have defined dimensions.');
      return;
    }
  
    // Use the correct field index and property names to set the values
    const fieldIndex = fields.length - 1;
    setValue(`fields.${fieldIndex}.carrierSize`, selectedSize, {
      shouldValidate: true,
    });
    setValue(`fields.${fieldIndex}.length`, dimensions.length, {
      shouldValidate: true,
    });
    setValue(`fields.${fieldIndex}.width`, dimensions.width, {
      shouldValidate: true,
    });
    setValue(`fields.${fieldIndex}.height`, dimensions.height, {
      shouldValidate: true,
    });
    setValue(`fields.${fieldIndex}.dimensionUnit`, dimensions.unit, {
      shouldValidate: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:gap-[24px] gap-[18px]">
      <div className="text-body-lg font-semibold">What are you shipping?</div>
      <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[40px] gap-[10px]">
        <Radio
          value="Enter Custom Dimensions"
          checked={isCustomDimensions}
          onCheck={() => setValue('parcelType', 'Enter Custom Dimensions', { shouldValidate: true })}
          label="Enter Custom Dimensions"
          labelClassName="text-heading"
        />
        <Radio
          value="Carrier Provided Parcel"
          checked={!isCustomDimensions}
          onCheck={() => setValue('parcelType', 'Carrier Provided Parcel', { shouldValidate: true })}
          label="Carrier Provided Parcel"
          labelClassName="text-heading"
        />
      </div>
      <GradientHR />
      {isCustomDimensions && (
        <ButtonSelect
          full
          value={findOption(parcelShapes, watch('parcelShape'))}
          options={parcelShapes}
          onChange={({ value }) => setValue('parcelShape', value, { shouldValidate: true })}
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
                    setValue('fields', newArray, { shouldValidate: true })
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
        value={field.carrierSize}
        error={fieldErrors?.carrierSize}
        onChange={({ value }) => handleCarrierSizeChange(value)}
      />
      
      )}
      <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-[48px] gap-[12px]">
        {isCustomDimensions && (
          <div className="flex flex-col gap-d-12">
            {isBoxOrTube && (
              <>
                <div className="text-caption font-bold">Dimensions</div>
                <div className="flex lg:flex-row flex-col gap-d-16">
                  <div className="flex gap-d-16">
                    <Input
                      type="number"
                      placeholder="L"
                      value={field.length}
                      error={fieldErrors?.length}
                      onChange={(value) => setFieldItem('length', value)}
                      containerClassName="lg:w-[99px]"
                    />
                    <div className="flex items-center flex-1">
                      <X />
                    </div>
                    <Input
                      type="number"
                      placeholder="W"
                      value={field.width}
                      error={fieldErrors?.width}
                      onChange={(value) => setFieldItem('width', value)}
                      containerClassName="lg:w-[99px]"
                    />
                  </div>
                  <div className="flex gap-d-16">
                    <div className="flex items-center flex-1">
                      <X />
                    </div>
                    <Input
                      type="number"
                      placeholder="H"
                      value={field.height}
                      error={fieldErrors?.height}
                      onChange={(value) => setFieldItem('height', value)}
                      containerClassName="lg:w-[99px]"
                    />
                    <Select
                      placeholder="Unit"
                      options={dimensionUnits}
                      error={fieldErrors?.dimensionUnit}
                      value={findOption(dimensionUnits, field.dimensionUnit)}
                      onChange={({ value }) => setFieldItem('dimensionUnit', value)}
                      containerClassName="lg:w-[99px]"
                    />
                  </div>
                </div>
                <div className="text-caption">Enter dimensions of package</div>
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
                <div className="text-caption">Enter dimensions of package</div>
              </>
            )}
          </div>
        )}
        <div className="flex lg:flex-row flex-col lg:gap-[48px] gap-[12px]">
          <div className="flex flex-col gap-d-12">
            <div className="text-caption font-bold"># of Identical Units</div>
                <Input
                  type="text"
                  value={field.identicalUnitsCount.toString()}
                  error={fieldErrors?.identicalUnitsCount}
                  onChange={(value: string) => {
                    if (value === '') {
                      setFieldItem('identicalUnitsCount', '');
                      return;
                    }

                    const isPositiveInteger = /^[1-9]\d*$/.test(value);

                    if (isPositiveInteger) {
                      setFieldItem('identicalUnitsCount', parseInt(value, 10));
                    }
                  }}
                />
          </div>
          <div className="flex flex-col gap-d-12">
            <div className="text-caption font-bold">
              {isCustomDimensions ? (isBoxOrTube ? 'Package' : 'Total') : 'Package'}
              &nbsp;Weight
            </div>
            <div className="flex gap-d-16">
              <Input
                  type="text"
                  value={field.weight}
                  error={fieldErrors?.weight}
                  onChange={(value: string) => {
                    if (value === '') {
                      setFieldItem('weight', '');
                      return;
                    }

                    const isPositiveInteger = /^[1-9]\d*$/.test(value);

                    if (isPositiveInteger) {
                      setFieldItem('weight', parseInt(value, 10));
                    }
                  }}
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
            <Check label="Includes packaging" labelClassName="text-caption" />
          </div>
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
            <div className="text-caption lg:flex">
              <div className="text-gray">Complaint account with UPS and FedEx is required. For more info,&nbsp;</div>
              <Link href="#">visit our FAQ.</Link>
            </div>
          </div>
        )}
        <Check
          label="Shipment contains dry ice"
          checked={field.containsDryIce}
          onChange={(checked) => setFieldItem('containsDryIce', checked)}
        />
        {field.containsDryIce && (
          <Input
            type="number"
            placeholder="e.g.0.1"
            label="Dry ice weight (lb)*"
            value={field.dryIceWeight}
            error={fieldErrors?.dryIceWeight}
            onChange={(value) => setFieldItem('dryIceWeight', value)}
            containerClassName="lg:w-[180px]"
          />
        )}
        <Check
          label="Create a return label"
          checked={field.createsReturnLabel}
          onChange={(checked) => setFieldItem('createsReturnLabel', checked)}
        />
        {field.createsReturnLabel && (
          <Select
            options={returnLabels}
            value={findOption(returnLabels, field.returnLabel)}
            error={fieldErrors?.returnLabel}
            onChange={({ value }) => setFieldItem('returnLabel', value)}
            containerClassName="lg:w-[594px]"
          />
        )}
        <Check
          checked={field.containsLithium}
          onChange={(checked) => setFieldItem('containsLithium', checked)}
          label="Shipment contains lithium batteries (hazardous material) only available for select services. Learn More"
          containerClassName="lg:max-w-[500px]"
        />
      </div>
      <GradientHR />
      <div className="flex lg:flex-row flex-col gap-d-16 justify-end">
        <Button type="button" color="transparent" onClick={onAdd}>
          <div className="flex gap-d-10">
            <Plus className="lg:w-[20px] w-[15px] lg:h-[20px] h-[15px]" />
            Add Another Field
          </div>
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  )
}
