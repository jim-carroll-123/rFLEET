'use client'

import { useState } from 'react'

import ArrowRight from '@assets/icons/arrow-right.svg'
import User from '@assets/icons/user.svg'
import { Button } from '@components/ui/Button'
import { ButtonSelect } from '@components/ui/ButtonSelect'
import { Check } from '@components/ui/Check'
import { Input } from '@components/ui/Input'
import { Select } from '@components/ui/Select'
import { Pane, Tab, TabPane } from '@components/ui/TabPane'
import { cn } from '@lib/utils'

const types = [
  { label: 'Parcel', value: 'Parcel' },
  { label: 'LTL & Partials', value: 'LTL & Partials' },
  { label: 'Ocean Shipping', value: 'Ocean Shipping' },
  { label: 'Air Cargo', value: 'Air Cargo' },
  {
    label: 'FTL, Power Only, Drayage,\nor Oversize & Overweight',
    value: 'FTL, Power Only, Drayage, or Oversize & Overweight'
  }
]

const fromTypes = [
  {
    label: 'Port/Airport',
    value: 'Port/Airport'
  },
  {
    label: 'Factory/Wearhouse',
    value: 'Factory/Wearhouse'
  },
  {
    label: 'Business Address',
    value: 'Business Address'
  },
  {
    label: 'Residential Address',
    value: 'Residential Address'
  }
]

const countries = [
  {
    label: 'Abkhazia',
    value: 'Abkhazia'
  }
]

export const Panel = () => {
  const [type, setType] = useState(types[0])
  const [category, setCategory] = useState('')

  return (
    <div className="relative bg-gradient-blur-dialog border border-solid border-[#ffffff30] p-[26px] lg:p-[36px] rounded-[20px]">
      <ButtonSelect options={types} value={type} onChange={setType} className="mb-[28px]" />
      <TabPane className="relative" autoDismiss onTabChanged={(id) => setCategory(id)}>
        <div className="lg:grid lg:grid-cols-4 lg:gap-[16px] flex flex-col gap-[30px] lg:mb-[34px] mb-[26px]">
          <div>
            <CategoryTab target="1" label="Origin" className="mb-6" category={category}>
              Where are you shipping from?
            </CategoryTab>
            <Check label="Add Extra Pickups" />
          </div>
          <div>
            <CategoryTab target="2" label="Destination" className="mb-6" category={category}>
              Where are you shipping to?
            </CategoryTab>
            <Check label="Add Extra Drops" />
          </div>
          <div>
            <CategoryTab target="3" label="Load Details" className="mb-6" category={category}>
              What are you shipping?
            </CategoryTab>
          </div>
          <div>
            <CategoryTab target="4" label="Goods/Commodity" className="mb-6" category={category}>
              Goods/Commodity
            </CategoryTab>
            <Check label="Add More Goods/Commodities" />
          </div>
        </div>
        <div>
          <CategoryPane id="1">
            <h4 className="font-semibold">Where are you shipping from?</h4>
            <div className="flex lg:flex-row flex-col flex-1 lg:gap-[24px] gap-[18px]">
              <div className="flex-1 lg:grid lg:grid-cols-3 flex flex-col lg:gap-[16px] gap-[12px]">
                <div>
                  <div className="font-semibold text-gray-200 lg:mb-[12px] mb-[8px]">Type</div>
                  <Select options={fromTypes} placeholder="Tell us about your goods" />
                </div>
                <div>
                  <div className="font-semibold text-gray-200 lg:mb-[12px] mb-[8px]">Country</div>
                  <Select options={countries} placeholder="Select a country" />
                </div>
                <div>
                  <div className="font-semibold text-gray-200 lg:mb-[12px] mb-[8px]">Address</div>
                  <Input placeholder="Enter Address or Zip/Postal Code" />
                </div>
              </div>
              <div className="flex items-end">
                <Button className="lg:!px-[24px] !px-[18px]">
                  <ArrowRight />
                </Button>
              </div>
            </div>
            <div className="w-full h-[2px] opacity-70 bg-gradient-to-r-from-green-to-violet" />
            <div className="flex flex-col lg:gap-[4px] gap-[3px]">
              <div className="text-caption-sm">My recent searches</div>
              <div className="flex items-center lg:gap-[8px] gap-[6px]">
                <User />
                <h6>Login / Sign Up</h6>
              </div>
              <div className="text-caption-sm">Access your searches on any devices</div>
            </div>
          </CategoryPane>
          <Pane id="2" className="absolute">
            Pane 2
          </Pane>
          <Pane id="3" className="absolute">
            Pane 2
          </Pane>
          <Pane id="4" className="absolute">
            Pane 2
          </Pane>
        </div>
      </TabPane>
      <div className="flex justify-center">
        <Button glossy>SEARCH</Button>
      </div>
    </div>
  )
}

interface CategoryTabProps extends React.HTMLAttributes<HTMLDivElement> {
  target: string
  label: string
  category: string
  children: React.ReactNode
}

const CategoryTab = ({ target, label, className, children, category }: CategoryTabProps) => {
  return (
    <>
      <div className={cn('font-semibold mb-4', target === category ? 'text-white' : 'text-gray')}>{label}</div>
      <Tab
        target={target}
        className={cn(
          'block w-full lg:py-[20px] py-[15px] border-2 border-solid sm:text-sm shadow-sm lg:rounded-lg rounded-md bg-transparent   lg:pl-[16px] pl-[12px] lg:pr-[16px] pr-[12px]',
          className,
          target === category
            ? 'text-white border-white hover:text-white'
            : 'text-gray border-gray hover:text-primary hover:border-primary'
        )}
      >
        {children}
      </Tab>
    </>
  )
}

interface CategoryPane {
  id: string
  children: React.ReactNode
}

const CategoryPane = ({ id, children }: CategoryPane) => {
  return (
    <Pane
      id={id}
      className="absolute lg:mt-[-76px] flex flex-col lg:gap-[32px] gap-[24px] z-10 lg:p-[38px] p-[28px] lg:rounded-[8px] rounded-[6px] border border-[#FFFFFF30] bg-gradient-blur-dialog backdrop-blur-[12px] w-full"
    >
      {children}
    </Pane>
  )
}
