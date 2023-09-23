'use client'

import { Tab } from '@components/ui/TabPane'
import { cn } from '@lib/utils'

interface ShippingStepProps extends React.HTMLAttributes<HTMLDivElement> {
  target: string
  label: string
  shippingStepId: string
  children: React.ReactNode
}

export const ShippingStep = ({ target, label, className, children, shippingStepId }: ShippingStepProps) => {
  return (
    <>
      <div className={cn('font-semibold mb-4', target === shippingStepId ? 'text-white' : 'text-gray')}>{label}</div>
      <Tab
        target={target}
        className={cn(
          'block w-full lg:py-[20px] py-[15px] border-2 border-solid sm:text-sm shadow-sm lg:rounded-lg rounded-md bg-transparent lg:pl-[16px] pl-[12px] lg:pr-[16px] pr-[12px]',
          className,
          target === shippingStepId
            ? 'text-white border-white hover:text-white cursor-default'
            : 'text-gray border-gray hover:text-primary hover:border-primary'
        )}
      >
        {children}
      </Tab>
    </>
  )
}
