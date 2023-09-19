'use client'

import { Pane } from '@components/ui/TabPane'

interface ShippingPane {
  id: string
  children: React.ReactNode
}

export const ShippingPane = ({ id, children }: ShippingPane) => {
  return (
    <Pane
      id={id}
      className="absolute lg:mt-[-76px] flex flex-col lg:gap-[32px] gap-[24px] z-10 lg:p-[38px] p-[28px] lg:rounded-[8px] rounded-[6px] border border-[#FFFFFF30] bg-gradient-blur-dialog backdrop-blur-[12px] w-full"
    >
      {children}
    </Pane>
  )
}
