'use client'

import * as React from 'react'

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
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const dropdownNode = React.useRef<any>()

  useOnClickOutside(dropdownNode, () => {
    setDropdownOpen(false)
  })

  const handleOptionClick = (option: Option) => {
    if (onChange) {
      onChange(option)
    }
    setDropdownOpen(false)
  }

  const currentLabel = value?.label || placeholder || 'Select...'

  return (
    <div className={`relative w-full ${className}`} ref={dropdownNode}>
      {props.label && <label className={`block lg:mb-[12px] mb-[8px] font-medium`}>{props.label}</label>}
      <div
        onClick={() => setDropdownOpen(true)}
        className="block w-full lg:px-[16px] px-[12px] lg:py-[20px] py-[15px] border-2 border-solid  sm:text-sm shadow-sm lg:rounded-lg rounded-md border-gray-100 hover:border-gray-300 focus:ring-primary focus:border-primary placeholder:text-white"
      >
        {currentLabel}
      </div>
      {dropdownOpen && (
        <div className="absolute w-full z-10 bg-gradient-dialog backdrop-blur-md backdrop-opacity-100 flex flex-col lg:gap-[4px] gap-[3px] lg:mt-[8px] mt-[6px] lg:p-[8px] p-[6px] border-2 border-solid sm:text-sm lg:rounded-lg rounded-md">
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
