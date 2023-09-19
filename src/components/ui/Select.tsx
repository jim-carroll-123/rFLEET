'use client'

import * as React from 'react'

import ArrowDown from '@assets/icons/arrow-down.svg'
import { useOnClickOutside } from '@hooks/utils/useClickOutside'
import { cn } from '@lib/utils'

export interface Option {
  label: string
  value: string
  icon?: any
}

interface Props {
  label?: string
  value?: Option
  options: Option[]
  placeholder?: string
  searchable?: boolean
  containerClassName?: string
  labelClassName?: string
  onChange?: (newValue: Option) => void | Promise<void>
}

export const Select = React.forwardRef(
  (
    { containerClassName, labelClassName, options, value, onChange, placeholder, searchable = false, ...props }: Props,
    _
  ) => {
    const [selectOpen, setSelectOpen] = React.useState(false)
    const [keyword, setKeyword] = React.useState('')

    const _placeholder = 'Select...'
    const currentLabel = value?.label || placeholder || _placeholder

    const selectNode = React.useRef<any>(null)
    const inputRef = React.useRef<any>(null)

    const filteredOptions = React.useMemo(
      () => options.filter((option) => option.label.toLowerCase().includes(keyword.toLowerCase())),
      [options, keyword]
    )

    useOnClickOutside(selectNode, () => {
      setSelectOpen(false)
    })

    const handleOptionClick = (option: Option) => {
      if (onChange) {
        onChange(option)
      }
      setSelectOpen(false)
    }

    React.useEffect(() => {
      if (selectOpen) {
        inputRef.current.focus()
      } else {
        setKeyword('')
        if (inputRef.current) {
          inputRef.current.blur()
        }
      }
    }, [selectOpen])

    return (
      <div className={cn(`relative w-full`, containerClassName)} ref={selectNode}>
        {props.label && (
          <label className={cn(`block lg:mb-[12px] mb-[8px] font-medium`, labelClassName)}>{props.label}</label>
        )}
        <div
          onClick={() => setSelectOpen(!selectOpen)}
          className={cn(
            'flex justify-between items-center lg:gap-[10px] gap-[7px] w-full lg:px-[16px] px-[12px] lg:py-[18px] py-[14px] border border-solid shadow-sm lg:rounded-lg rounded-md placeholder:text-white cursor-default',
            selectOpen ? 'border-primary' : 'border-gray-100 hover:border-gray-300'
          )}
        >
          {value?.icon && value.icon}
          <input
            type="text"
            autoComplete="off"
            placeholder={currentLabel}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            readOnly={!searchable}
            ref={inputRef}
            className={cn(
              'flex flex-1 w-inherit placeholder:text-white lg:text-[14px] text-[12px] bg-transparent cursor-default'
            )}
          />
          <ArrowDown className="shrink-0 lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" />
        </div>
        {selectOpen && (
          <div className="absolute w-full z-10 max-h-[354px] overflow-y-auto slick-scroll bg-gradient-blur-dialog backdrop-blur-md backdrop-opacity-100 flex flex-col lg:gap-[4px] gap-[3px] lg:mt-[8px] mt-[6px] lg:p-[8px] p-[6px] border border-solid sm:text-sm lg:rounded-lg rounded-md">
            {filteredOptions.length > 0 &&
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-center lg:gap-[10px] gap-[7px] lg:px-[16px] px-[12px] lg:py-[20px] py-[15px] rounded hover:bg-primary',
                    value?.value === option.value ? 'bg-primary' : 'cursor-pointer '
                  )}
                  onClick={() => handleOptionClick(option)}
                >
                  {option?.icon && option.icon}
                  {option.label}
                </div>
              ))}
            {filteredOptions.length === 0 && (
              <div
                className={cn(
                  'flex justify-center items-center lg:gap-[10px] gap-[7px] lg:px-[16px] px-[12px] lg:py-[20px] py-[15px]'
                )}
              >
                No options
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
)
