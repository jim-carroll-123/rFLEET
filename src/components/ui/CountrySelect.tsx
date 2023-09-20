import countries from '@json/countries.json'

import { Select } from './Select'

export interface Option {
  label: string | JSX.Element
  value: string
  icon?: any
}

interface Props {
  label?: string
  value?: Option
  placeholder?: string
  searchable?: boolean
  className?: string
  labelClassName?: string
  onChange?: (newValue: Option) => void | Promise<void>
}

export const CountrySelect = (props: Props) => {
  const options = countries.map((country) => ({
    label: country.country || '',
    value: country.code || '',
    icon: <img src={country.flag} className="w-[24px] h-[24px]" /> || <></>
  }))

  return <Select options={options} {...props} />
}
