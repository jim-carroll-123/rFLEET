import React from 'react'

import { cn } from '@lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  full?: boolean
  color?: 'primary' | 'light' | 'red'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  glossy?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, glossy = false, color = 'primary', size = 'md', full = false, ...props }, ref) => {
    const colorConfig = {
      primary: {
        bgColor: 'before:bg-primary',
        textColor: 'text-white',
      },
      light: {
        bgColor: 'before:bg-primary/10',
        textColor: 'text-primary',
      },
      red: {
        bgColor: 'before:bg-red-400',
        textColor: 'text-white',
      },
      green: {
        bgColor: 'before:bg-green-400',
        textColor: 'text-white',
      },
      blue: {
        bgColor: 'before:bg-blue-400',
        textColor: 'text-white',
      },
      yellow: {
        bgColor: 'before:bg-yellow-400',
        textColor: 'text-white',
      },
    }

    const sizeConfig = {
      sm: { padding: 'px-3 h-7', font: 'text-xs' },
      md: { padding: 'px-5 h-9', font: 'text-sm' },
      lg: { padding: 'px-[32px] py-[18px]', font: 'text-[15px]' },
      xl: { padding: 'px-[50px] h-[62px]', font: 'text-lg' },
    }

    const { bgColor, textColor } = colorConfig[color]
    const { padding, font } = sizeConfig[size]

    const width = full ? '' : 'sm:w-max'
    const hoverActive = disabled
      ? ''
      : 'hover:before:scale-[1.03] active:before:scale-[0.97] hover:after:blur-md active:after:blur-none active:after:bg-transparent'

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'w-full relative flex items-center justify-center before:absolute before:inset-0 before:rounded-md before:transition before:duration-300 active:duration-75 font-semibold',
          className,
          width,
          bgColor,
          padding,
          hoverActive,
          glossy
            ? 'before:z-[1] before:border-2 before:border-solid before:border-[#4AED52] after:z-0 after:bg-[#4AED52] after:blur-sm after:absolute after:inset-0 after:rounded-md after:transition after:duration-300'
            : '',
          disabled ? 'opacity-50' : '',
        )}
        {...props}
      >
        <span className={cn('relative z-[2]', textColor, font)}>{children}</span>
      </button>
    )
  },
)
