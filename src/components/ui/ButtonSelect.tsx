'use client'

import { cn } from '@lib/utils'

interface Option {
  label: React.ReactNode
  value: string
}

interface Props {
  label?: string | JSX.Element
  value?: Option
  options: Option[]
  full?: boolean
  containerClassName?: string
  onChange?: (newValue: any) => void
}

export const ButtonSelect = ({ options, value, onChange, full = false, containerClassName }: Props) => {
  return (
    <div
      className={cn('flex lg:flex-row flex-col justify-between gap-[10px]', containerClassName, full ? 'w-full' : '')}
    >
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onChange?.(option)}
          disabled={option.value === value?.value}
          className={cn(
            'relative flex items-center justify-center before:absolute before:inset-0 before:rounded-md before:transition before:duration-300 active:duration-75 lg:h-[62px] h-[46px] lg:px-[46px] px-[34px] hover:enabled:before:bg-primary hover:enabled:before:opacity-30 active:before:scale-[0.97] hover:after:blur-md active:after:blur-none active:after:bg-transparent',
            option.value === value?.value ? 'before:bg-primary' : 'border border-solid rounded-md',
            full ? 'lg:flex-1' : 'lg:max-w-[282px]'
          )}
        >
          <span className="relative z-[2] text-white lg:text-lg text-md !leading-tight whitespace-pre">
            {option.label}
          </span>
        </button>
      ))}
    </div>
  )
}
