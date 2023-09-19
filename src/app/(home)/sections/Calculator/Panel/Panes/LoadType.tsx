import Link from 'next/link'

import Delete from '@assets/icons/delete.svg'
import Parcel from '@assets/icons/parcel.svg'
import Plus from '@assets/icons/plus.svg'
import PolyMailer from '@assets/icons/polymailer.svg'
import X from '@assets/icons/x.svg'
import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { Check } from '@components/ui/Check'
import { Input } from '@components/ui/Input'
import { Radio } from '@components/ui/Radio'
import { Select } from '@components/ui/Select'

const boxTypes = [
  {
    label: (
      <div className="flex items-center gap-d-10">
        <Parcel />
        Box or Tube
      </div>
    ),
    value: 'box_tube'
  },
  {
    label: (
      <div className="flex items-center gap-d-10">
        <PolyMailer />
        Poly Mailer/Satchel
      </div>
    ),
    value: 'poly-mailer_satchel'
  }
]

const dimensionUnits = [
  {
    label: 'in',
    value: 'in'
  },
  {
    label: 'cm',
    value: 'cm'
  }
]

const weightUnits = [
  {
    label: 'lb',
    value: 'lb'
  },
  {
    label: 'kg',
    value: 'kg'
  }
]

interface Props {
  next: () => void
}

export const LoadType = ({ next }: Props) => {
  return (
    <div className="flex flex-col lg:gap-[32px] gap-[24px]">
      <h4 className="font-semibold">What are you shipping?</h4>
      <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[40px] gap-[10px]">
        <Radio label="Enter Custom Dimensions" labelClassName="lg:text-[20px] text-[15px] font-semibold" />
        <Radio label="Carrier Provided Parcel" labelClassName="lg:text-[20px] text-[15px] font-semibold" />
      </div>
      <div className="w-full h-[2px] opacity-70 bg-gradient-to-r-from-green-to-violet" />
      <ButtonSelect full value={boxTypes[0]} options={boxTypes} containerClassName="gap-d-16" />
      <div className="flex border border-white lg:rounded-[6px] rounded-[5px]">
        <div className="shrink-0 text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">Load 1</div>
        <div className="grow text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">2 Boxes/Crates</div>
        <div className="grow text-body-lg lg:px-[30px] px-[23px] lg:py-[20px] py-[15px]">80X80X80 CM 10KG</div>
        <div className="flex shrink-0 justify-center items-center lg:px-[40px] px-[30px] lg:py-[20px] py-[15px]">
          <Delete />
        </div>
      </div>
      <div className="w-full h-[2px] opacity-70 bg-gradient-to-r-from-green-to-violet" />
      <div className="flex lg:flex-row lg:justify-between flex-col">
        <div className="flex flex-col gap-d-12">
          <div className="font-bold">Dimensions</div>
          <div className="flex lg:flex-row flex-col gap-d-16">
            <div className="flex gap-d-16">
              <Input placeholder="Length" containerClassName="lg:w-[135px]" />
              <div className="flex items-center flex-1">
                <X />
              </div>
              <Input placeholder="Width" containerClassName="lg:w-[135px]" />
            </div>
            <div className="flex gap-d-16">
              <div className="flex items-center flex-1">
                <X />
              </div>
              <Input placeholder="Height" containerClassName="lg:w-[135px]" />
              <Select placeholder="Unit" options={dimensionUnits} containerClassName="lg:w-[135px]" />
            </div>
          </div>
          <div className="text-caption-xs">Enter dimensions of package</div>
          <div className="flex flex-col gap-d-12">
            <div className="font-bold">Package Weight</div>
            <div className="flex gap-d-16">
              <Input placeholder="Weight" containerClassName="lg:w-[180px]" />
              <Select placeholder=" " options={weightUnits} containerClassName="lg:w-[100px]" />
            </div>
            <div className="text-caption-xs">Includes packaging</div>
          </div>
        </div>
        <div className="flex flex-col gap-d-12">
          <div className="font-bold"># of Identical Units</div>
          <Input type="number" min={1} />
        </div>
      </div>
      <div className="w-full h-[2px] opacity-70 bg-gradient-to-r-from-green-to-violet" />
      <div className="flex flex-col gap-d-16">
        <Check label="Shipment contains alcohol" />
        <div className="flex flex-col gap-d-16 lg:pl-[28px] pl-[21px]">
          <div>Alcohol recipient type</div>
          <div className="flex gap-d-24">
            <Radio label="License" />
            <Radio label="Consumer" />
          </div>
          <div className="text-caption-xs lg:flex">
            <div className="text-gray">Complaint account with UPS and FedEx is required. For more info,&nbsp;</div>
            <Link href="#">visit our FAQ.</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-d-16">
        <Check label="Shipment contains dry ice" />
        <Input placeholder="e.g.0.1" label="Dry ice weight (lb)*" containerClassName="lg:w-[180px]" />
      </div>
      <Check label="Create a return label" />
      <Check
        label="Shipment contains lithium batteries (hazardous material) only available for select services. Learn More"
        containerClassName="lg:max-w-[500px]"
      />
      <div className="w-full h-[2px] opacity-70 bg-gradient-to-r-from-green-to-violet" />
      <div className="flex lg:flex-row flex-col gap-d-16 justify-end">
        <Button color="transparent">
          <div className="flex gap-d-10">
            <Plus />
            Add Another Field
          </div>
        </Button>
        <Button onClick={next}>Confirm</Button>
      </div>
    </div>
  )
}
