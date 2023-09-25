import Parcel from '@assets/icons/parcel.svg'
import PolyMailer from '@assets/icons/polymailer.svg'

export const shippingMethods = [
  { label: 'Parcel', value: 'Parcel' },
  { label: 'LTL & Partials', value: 'LTL & Partials' },
  { label: 'Ocean Shipping', value: 'Ocean Shipping' },
  { label: 'Air Cargo', value: 'Air Cargo' },
  {
    label: 'FTL, Power Only, Drayage,\nor Oversize & Overweight',
    value: 'FTL, Power Only, Drayage, or Oversize & Overweight'
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

export const currencies = [
  {
    label: 'USD',
    value: 'USD'
  }
]

export const returnLabels = [
  {
    label: 'General hazmat',
    value: 'General hazmat'
  }
]
