'use client'

import * as React from 'react'

import gradientBox from '@assets/images/gradient-box.png'

interface Props {
  children: React.ReactNode
}
export const GradientCard = ({ children }: Props) => (
  <div
    className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[22px] bg-contain lg:mb-[54px] mb-[48px]"
    style={{ background: `url(${gradientBox.src})`, backgroundSize: '100% 100%' }}
  >
    {children}
  </div>
)
