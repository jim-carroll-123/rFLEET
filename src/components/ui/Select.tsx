'use client'

import * as React from 'react'

import ArrowDown from '@assets/icons/arrow-down.svg'
import { useOnClickOutside } from '@hooks/utils/useClickOutside'
import { cn } from '@lib/utils'

export interface Option {
  label: string
  value: string
}

interface Props {
  className?: string
  label?: string
  placeholder?: string
  value?: Option
  options: Option[]
  onChange?: (newValue: Option) => void | Promise<void>
}

export const Select = React.forwardRef(({ className, options, value, onChange, placeholder, ...props }: Props, _) => {
  const [selectOpen, setSelectOpen] = React.useState(false)
  const selectNode = React.useRef<any>()

  useOnClickOutside(selectNode, () => {
    setSelectOpen(false)
  })

  const handleOptionClick = (option: Option) => {
    if (onChange) {
      onChange(option)
    }
    setSelectOpen(false)
  }

  const currentLabel = value?.label || placeholder || 'Select...'

  return (
    <div className={`relative w-full ${className}`} ref={selectNode}>
      {props.label && <label className={`block lg:mb-[12px] mb-[8px] font-medium`}>{props.label}</label>}
      <div
        onClick={() => setSelectOpen(!selectOpen)}
        className={cn(
          'flex justify-between items-center w-full lg:px-[16px] px-[12px] lg:py-[18px] py-[14px] border border-solid  sm:text-sm shadow-sm lg:rounded-lg rounded-md placeholder:text-white cursor-default',
          selectOpen ? 'border-primary' : 'border-gray-100 hover:border-gray-300'
        )}
      >
        <div className="flex-1 lg:py-[2px] py-[1px]">{currentLabel}</div>
        <ArrowDown />
      </div>
      {selectOpen && (
        <div className="absolute w-full z-10 bg-gradient-blur-dialog backdrop-blur-md backdrop-opacity-100 flex flex-col lg:gap-[4px] gap-[3px] lg:mt-[8px] mt-[6px] lg:p-[8px] p-[6px] border border-solid sm:text-sm lg:rounded-lg rounded-md">
          {options.map((option, key) => (
            <div
              key={key}
              className={cn(
                'lg:px-[16px] px-[12px] lg:py-[20px] py-[15px] rounded hover:bg-primary',
                value?.value === option.value ? 'bg-primary' : 'cursor-pointer '
              )}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
})
