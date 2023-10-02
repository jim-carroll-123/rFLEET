'use client'

import React from 'react'

import { cn } from '@lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  full?: boolean
  color?: 'primary' | 'transparent'
  size?: 'md'
  glossy?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, glossy = false, color = 'primary', size = 'md', full = false, ...props }, ref) => {
    const colorConfig = {
      primary: {
        bgColor: 'bg-primary',
        textColor: 'text-white'
      },
      transparent: {
        bgColor: 'bg-transparent border-2 border-solid border-white',
        textColor: 'text-white'
      }
    }

    const sizeConfig = {
      md: {
        padding: 'lg:px-[28px] lg:py-[14px] px-[21px] py-[10px]',
        font: 'lg:text-[14px] text-[12px] leading-[20px]'
      }
    }

    const { bgColor, textColor } = colorConfig[color]
    const { padding, font } = sizeConfig[size]

    const defaultClass =
      'relative flex items-center justify-center rounded-md bg-primary transition duration-300 font-semibold'
    const width = full ? 'w-full' : ''
    const hover = disabled ? '' : 'hover:bg-transparent hover:shadow-button-lg'
    const border_shadow = glossy ? 'shadow-button border-2 border-solid border-green' : ''
    const opacity = disabled ? 'opacity-50' : ''

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(defaultClass, width, bgColor, font, textColor, padding, hover, border_shadow, opacity, className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export const TransparentButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <button
      ref={ref}
      className="hover-bg-green-glow w-full lg:px-[28px] lg:py-[14px] px-[21px] py-[10px] border border-solid border-gray-200 lg:text-[20px] text-[15px] font-semi rounded-md hover:bg-[#ffffff20] transition duration-300 font-semibold"
      {...props}
    >
      {props.children}
    </button>
  )
)
