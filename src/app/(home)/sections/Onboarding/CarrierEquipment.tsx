import React, { useState } from 'react'
import { BiMinus, BiPlus, BiSolidInfoCircle, BiTrash } from 'react-icons/bi'
import { ImAttachment } from 'react-icons/im'

import { Button, TransparentButton } from '@components/ui/Button'
import { Check } from '@components/ui/Check'
import { Input } from '@components/ui/Input'
import { Option, Select } from '@components/ui/Select'

type carrierEquipmentType = {
  carrierType: string
  license_plate: string
  vin_number: string
  truck_number: string
  attachment?: File
}

const carrierTypes = [
  {
    label: 'Auto Carrier',
    value: 'Auto Carrier'
  },
  {
    label: 'Conestoga FB',
    value: 'Conestoga FB'
  },
  {
    label: 'Dump Trailer',
    value: 'Dump Trailer'
  },
  {
    label: 'Flatbed or Step Deck',
    value: 'Flatbed or Step Deck'
  }
]
export const CarrierEquipment = () => {
  // variable to hold carrier equipments
  // add carrier equipment
  // edit carrier equipment
  const [carrierType, setCarrierType] = useState<Option>()
  const [carrierEquipments, setCarrierEquipments] = useState<carrierEquipmentType[]>([])

  const addNewEquipment = (newCarrier: Option) => {
    // setCarrierType(newCarrier)
    const newEquipment: carrierEquipmentType = {
      carrierType: newCarrier.value,
      license_plate: '',
      truck_number: '',
      vin_number: ''
    }
    setCarrierEquipments((prev) => [...prev, newEquipment])
  }

  const removeEquipment = (equipment: carrierEquipmentType) => {
    const filteredEquipments = carrierEquipments.filter((obj) => obj != equipment)
    setCarrierEquipments(filteredEquipments)
  }
  return (
    <div className="p-3 flex flex-col h-full">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="font-semibold text-lg">Add Carrier Truck and Trailer Equipment</div>
            <div className="font-extralight text-[10px]">Select the carrier equipment supported by this carrier</div>
          </div>
          <span>x</span>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-br from-cyan-900 to-indigo-900  my-4"></div>
      </div>
      <div className="flex flex-col gap-3">
        {carrierEquipments.map((equipment, index) => {
          return <EquipmentAccordion onDelete={removeEquipment} equipment={equipment} key={index} />
        })}

        <Select
          containerClassName="w-full"
          placeholder="Select carrier"
          options={carrierTypes}
          value={carrierType}
          onChange={addNewEquipment}
        />
      </div>
      <div>
        <div className="w-full h-[2px] bg-gradient-to-br from-cyan-900 to-indigo-900  my-6"></div>

        <div className="flex justify-between">
          <TransparentButton className="border-0">Clear</TransparentButton>
          <div className="flex gap-2">
            <TransparentButton>Cancel</TransparentButton>
            <Button>Apply</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const EquipmentAccordion = ({
  equipment,
  onDelete
}: {
  equipment: carrierEquipmentType
  onDelete: (equipment: carrierEquipmentType) => void
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-3 lg:rounded-[10px] rounded-[8px] bg-[#1a194990] border border-[#282774] shadow-[0px,4px,4px,0px,rgba(0,0,0,0.25)] backdrop-blur-[25px] z-999">
      <div className="flex items-center">
        <div className="text-sm">{equipment.carrierType}</div>
        {!open && (
          <div className="flex justify-evenly">
            <span>{equipment.license_plate}</span>
            <span>{equipment.vin_number}</span>
            <span>{equipment.truck_number}</span>
          </div>
        )}
        <div className="flex gap-2 items-center ml-auto">
          {!open && <ImAttachment />}
          <BiTrash className="cursor-pointer" onClick={() => onDelete(equipment)} />
          {open ? (
            <BiMinus className="cursor-pointer" onClick={() => setOpen(false)} />
          ) : (
            <BiPlus className="cursor-pointer" onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
      {open && (
        <div className="grid grid-cols-4 gap-2 my-4">
          <Input labelClassName="text-[15px]  mt-[8px]" placeholder="License Plate#" />
          <Input labelClassName="text-[15px]  mt-[8px]" placeholder="VIN#" />
          <Input labelClassName="text-[15px]  mt-[8px]" placeholder="Truck#" />
          <div className="flex items-center justify-center w-full">
            <label htmlFor="upload" className="flex gap-4 p-2 items-center w-full border rounded-lg cursor-pointer ">
              <BiPlus className="text-2xl" />
              <p className="font-light text-[15px]">Upload</p>

              <input id="upload" type="file" className="hidden" />
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
