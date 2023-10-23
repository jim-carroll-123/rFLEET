import Parcel from '@assets/icons/parcel.svg'
import PolyMailer from '@assets/icons/polymailer.svg'
import currunciesData from '@json/currencies.json'

export const shippingMethods = [
  { label: 'Parcel', value: 'Parcel' },
  { label: 'LTL & Partials', value: 'LTL & Partials' },
  { label: 'Ocean Shipping', value: 'Ocean Shipping' },
  { label: 'Air Cargo', value: 'Air Cargo' },
  {
    label: 'FTL, Drayage, etc',
    value: 'FTL'
  }
]

export const parcelShapes = [
  {
    label: (
      <div className="flex items-center gap-d-10">
        <Parcel />
        Box or Tube
      </div>
    ),
    value: 'Box or Tube'
  },
  {
    label: (
      <div className="flex items-center gap-d-10">
        <PolyMailer />
        Poly Mailer/Satchel
      </div>
    ),
    value: 'Poly Mailer/Satchel'
  }
]

export const dimensionUnits = [
  {
    label: 'in',
    value: 'in'
  },
  {
    label: 'cm',
    value: 'cm'
  }
]

export const weightUnits = [
  {
    label: 'lb',
    value: 'lb'
  },
  {
    label: 'kg',
    value: 'kg'
  }
]

export const packageUnits = [
  {
    label: 'Pieces',
    value: 'Pieces'
  }
]

export const currencies = Object.entries(currunciesData).map(([key, currency]) => ({
  label: currency.code,
  value: currency.code
}))

export const returnLabels = [
  {
    label: 'General hazmat',
    value: 'General hazmat'
  }
]

export const handlingUnits = [
  {
    label: 'Pallet',
    value: 'Pallet'
  }
]

export const incotermOptions = [
  {
    value: 'Pallet',
    label: 'Pallet'
  },
  {
    value: 'EXE - Ex Works',
    label: 'EXE - Ex Works'
  }
]

export const weightTypes = [
  {
    label: 'Overweight',
    value: 'Overweight'
  }
]

export const containerTypes = [
  {
    value: '',
    label: 'Dry Cargo',
    groupLabel: true
  },
  {
    label: "20' Dry Standard",
    value: "20' Dry Standard"
  },
  {
    label: "20' Dry High Cube",
    value: "20' Dry High Cube"
  },
  {
    label: "40' Dry Standard",
    value: "40' Dry Standard"
  },
  {
    label: "40' Dry High Cube",
    value: "40' Dry High Cube"
  },
  {
    value: '',
    label: 'Refrigerated Cargo',
    groupLabel: true
  },
  {
    label: "20' Reefer Standard",
    value: "20' Reefer Standard"
  },
  {
    label: "20' Reefer High Cube",
    value: "20' Reefer High Cube"
  },
  {
    label: "40' Reefer Standard",
    value: "40' Reefer Standard"
  },
  {
    label: "40' Reefer High Cube",
    value: "40' Reefer High Cube"
  }
]

export const truckTypes = [
  {
    label: 'Dry Van',
    value: 'Dry Van'
  }
]

export const truckSizes = [
  {
    label: '48',
    value: '48'
  }
]

export const loadTypes = [
  {
    label: '4850 lbs (2000kg) Outof Gauge',
    value: 'Dry Van'
  }
]

export const loadSizes = [
  {
    label: '40',
    value: '40'
  }
]
