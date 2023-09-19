import { useEffect, useState } from 'react'

import { cn } from '@lib/utils'

interface Props {
  label?: string
  checked?: boolean
  placeholder?: string
  searchable?: boolean
  containerClassName?: string
  labelClassName?: string
  onChange?: (newValue: boolean) => void | Promise<void>
}

export const Radio = (props: Props) => {
  const [id, setId] = useState('')

  useEffect(() => {
    setId(`radio-${Math.random().toString(36).substring(2, 20)}`)
  }, [])

  return (
    <div className={cn('inline-flex items-center', props.containerClassName)}>
      <label
        className="relative flex cursor-pointer items-center rounded-full mr-[8px]"
        htmlFor={id}
        data-ripple-dark="true"
      >
        <input
          id={id}
          name="type"
          type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-blue-gray-200 text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-10"
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[10px] w-[10px]" viewBox="0 0 12 12" fill="currentColor">
            <circle data-name="ellipse" cx={6} cy={6} r={6} />
          </svg>
        </div>
      </label>
      {props.label && (
        <label className={cn('mt-px cursor-pointer select-none', props.labelClassName)} htmlFor={id}>
          {props.label}
        </label>
      )}
    </div>
  )
}
