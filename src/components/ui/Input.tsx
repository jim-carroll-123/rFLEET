import * as React from 'react'

import { cn } from '@lib/utils'

const INPUT_GROUP = 'INPUT_GROUP'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label?: string
  transparent?: boolean
  index?: number
  siblings?: number
  onChange?: (v: string) => void | Promise<void>
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, index, transparent, siblings, onChange, ...props }, ref) => {
    const parent = React.useContext(InputGroupContext)

    return (
      <div className={cn('w-full', className)}>
        {props.label!! && (
          <label htmlFor="email" className={`block mb-1 text-sm font-medium text-gray-700`}>
            {props.label}
          </label>
        )}
        <input
          ref={ref}
          onChange={(e) => (onChange ? onChange(e.target.value) : false)}
          className={cn(
            'block w-full lg:px-[16px] px-[12px] lg:py-[20px] py-[15px] border-2 border-solid  sm:text-sm shadow-sm rounded-md bg-transparent',
            transparent
              ? 'text-white border-gray-100 hover:border-gray-300 focus:ring-primary focus:border-primary placeholder:text-white'
              : 'text-black border-primary focus:ring-blue-800 focus:border-blue-800',
          )}
          {...props}
        />
      </div>
    )
  },
)

interface InputGroupProps {
  children: React.ReactNode
  rounded?: boolean
}

const InputGroupContext = React.createContext<string | null>(null)

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(({ children, rounded }, ref) => {
  const childrenComponents = React.Children.map(children, (child: React.ReactNode, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<InputProps>, {
        index,
        siblings: React.Children.count(children),
      })
    }
  })

  return (
    <InputGroupContext.Provider value={INPUT_GROUP}>
      <div className="flex" ref={ref}>
        {childrenComponents}
      </div>
    </InputGroupContext.Provider>
  )
})
