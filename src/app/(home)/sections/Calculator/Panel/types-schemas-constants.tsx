import * as yup from 'yup'

export type Field = {
  carrierProvider: string
  carrierSize: string
  length: string
  width: string
  height: string
  dimensionUnit: string
  weight: string
  weightUnit: string
  identicalUnitsCount: string
  containsAlcohol: boolean
  alcoholRecipientType: 'License' | 'Consumer' | ''
  containsDryIce: boolean
  dryIceWeight: string
  createsReturnLabel: boolean
  returnLabel: ''
  containsLithium: boolean
}

export const initialField: Field = {
  carrierProvider: '',
  carrierSize: '',
  length: '',
  width: '',
  height: '',
  dimensionUnit: '',
  weight: '',
  weightUnit: '',
  identicalUnitsCount: '',
  containsAlcohol: false,
  alcoholRecipientType: '',
  containsDryIce: false,
  dryIceWeight: '',
  createsReturnLabel: false,
  returnLabel: '',
  containsLithium: false
}

export const fromSchema = yup.object({
  fromType: yup.string().required(),
  fromCountry: yup.string().required(),
  fromAddress: yup.string().required()
})

export const toSchema = yup.object({
  toType: yup.string().required(),
  toCountry: yup.string().required(),
  toAddress: yup.string().required()
})

export const loadTypeSchema: any & { fields: Field[] } = yup.object({
  parcelType: yup.string().required(),
  parcelShape: yup.string().required(),
  fields: yup.array().test({
    message: '',
    test: (fields: Field[] | undefined, context) => {
      const errors: any = {}
      const { fields: _, ...others } = context.parent

      if (fields && fields.length > 0) {
        const field = fields[fields.length - 1]

        if (others.parcelType === 'Enter Custom Dimensions') {
          if (others.parcelShape === 'Box or Tube') {
            if (isNaN(Number(field.length)) || Number(field.length) <= 0) {
              errors.length = 'Length must be a positive number'
            }

            if (isNaN(Number(field.width)) || Number(field.width) <= 0) {
              errors.width = 'Width must be a positive number'
            }

            if (isNaN(Number(field.height)) || Number(field.height) <= 0) {
              errors.height = 'Height must be a positive number'
            }

            if (isNaN(Number(field.weight)) || Number(field.weight) <= 0) {
              errors.weight = 'Weight must be a positive number'
            }

            if (isNaN(Number(field.identicalUnitsCount)) || Number(field.identicalUnitsCount) <= 0) {
              errors.identicalUnitsCount = 'Identical units must be a positive number'
            }

            if (!field.dimensionUnit) {
              errors.dimensionUnit = 'Dimension unit must be chosen'
            }

            if (!field.weightUnit) {
              errors.weightUnit = 'Weight unit must be chosen'
            }
          }

          if (others.parcelShape === 'Poly Mailer/Satchel') {
            if (isNaN(Number(field.length)) || Number(field.length) <= 0) {
              errors.length = 'Length must be a positive number'
            }

            if (isNaN(Number(field.width)) || Number(field.width) <= 0) {
              errors.width = 'Width must be a positive number'
            }

            if (isNaN(Number(field.identicalUnitsCount)) || Number(field.identicalUnitsCount) <= 0) {
              errors.identicalUnitsCount = 'Identical units must be a positive number'
            }

            if (isNaN(Number(field.weight)) || Number(field.weight) <= 0) {
              errors.weight = 'Weight must be a positive number'
            }

            if (!field.dimensionUnit) {
              errors.dimensionUnit = 'Dimension unit must be chosen'
            }

            if (!field.weightUnit) {
              errors.weightUnit = 'Weight unit must be chosen'
            }
          }
        }

        if (others.parcelType === 'Carrier Provided Parcel') {
          if (!field.carrierProvider) {
            errors.carrierProvider = 'Carrier provider must be chosen'
          }

          if (!field.carrierSize) {
            errors.carrierSize = 'Carrier size must be chosen'
          }

          if (isNaN(Number(field.weight)) || Number(field.weight) <= 0) {
            errors.weight = 'Weight must be a positive number'
          }

          if (!field.weightUnit) {
            errors.weightUnit = 'Weight unit must be chosen'
          }

          if (isNaN(Number(field.identicalUnitsCount)) || Number(field.identicalUnitsCount) <= 0) {
            errors.identicalUnitsCount = 'Identical units must be a positive number'
          }
        }

        if (field.containsAlcohol) {
          if (!field.alcoholRecipientType) {
            errors.alcoholRecipientType = 'Alcohol recipient type must be chosen'
          }
        }

        if (field.containsDryIce) {
          if (isNaN(Number(field.dryIceWeight)) || Number(field.dryIceWeight) <= 0) {
            errors.dryIceWeight = 'Dry ice weight must be a positive number'
          }
        }

        if (field.createsReturnLabel) {
          if (!field.returnLabel) {
            errors.returnLabel = 'Return label must be chosen'
          }
        }

        // Collect and apply errors
        if (Object.keys(errors).length > 0) {
          return new yup.ValidationError(errors, null, 'fields')
        }

        return true
      }

      return false
    }
  })
})

export const goodsCommoditySchema = yup.object({
  quantity: yup.string().required(),
  sku: yup.string().required(),
  packageUnit: yup.string().required(),
  value: yup.string().required(),
  currency: yup.string(),
  weight: yup.string().required(),
  madeWhere: yup.string().required(),
  scheduleB: yup.string()
})

export type FromInputs = yup.InferType<typeof fromSchema>
export type ToInputs = yup.InferType<typeof toSchema>
export type LoadTypeInputs = yup.InferType<typeof loadTypeSchema>
export type GoodsCommodityInputs = yup.InferType<typeof goodsCommoditySchema>
