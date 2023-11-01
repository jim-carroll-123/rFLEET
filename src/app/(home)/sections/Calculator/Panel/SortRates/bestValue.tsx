type ShippingAmount = {
  currency: string
  amount?: number
}

type Rate = {
  carrierCode?: string
  carrierDeliveryDays?: string
  carrierFriendlyName?: string
  carrierId?: string
  carrierNickname?: string
  confirmationAmount?: ShippingAmount
  deliveryDays?: number
  errorMessages?: string[]
  estimatedDeliveryDate?: string
  guaranteedService?: boolean
  insuranceAmount?: ShippingAmount
  negotiatedRate?: boolean
  otherAmount?: ShippingAmount
  packageType?: any
  rateId?: string
  rateType?: string
  serviceCode?: string
  serviceType?: string
  shipDate?: string
  shippingAmount?: ShippingAmount
  taxAmount?: any
  trackable?: boolean
  validationStatus?: string
  warningMessages?: string[]
  zone?: any
}

export type RatesObject = {
  rateResponse?: {
    rates?: Rate[]
  }
  bestRates?: Rate[]
}

export const addBestValueRates = (rates: RatesObject) => {
  if (rates?.rateResponse?.rates) {
    // Extract delivery dates and amounts to compute medians
    const deliveryDates = rates.rateResponse.rates
      .map((rate) => rate.estimatedDeliveryDate)
      .filter((date) => date !== undefined)
      .map((date) => new Date(date).getTime())

    const amounts = rates.rateResponse.rates
      .map((rate) => rate.shippingAmount?.amount)
      .filter((amount) => amount !== undefined) as number[]

    // Sort arrays to find median values
    deliveryDates.sort((a, b) => a - b)
    amounts.sort((a, b) => a - b)

    // Compute median values
    const medianDate = deliveryDates[Math.floor(deliveryDates.length / 2)]
    const medianAmount = amounts[Math.floor(amounts.length / 2)]

    // Sort rates based on the distance from the medians
    const speedWeight = 0.1 // 60%
    const costWeight = 0.9 // 40%

    const sortedRates = [...rates.rateResponse.rates].sort((a, b) => {
      const dateA = new Date(a.estimatedDeliveryDate || '9999-12-31').getTime()
      const dateB = new Date(b.estimatedDeliveryDate || '9999-12-31').getTime()
      const amountA = a.shippingAmount?.amount || Infinity
      const amountB = b.shippingAmount?.amount || Infinity

      const distanceA = speedWeight * Math.abs(dateA - medianDate) + costWeight * Math.abs(amountA - medianAmount)
      const distanceB = speedWeight * Math.abs(dateB - medianDate) + costWeight * Math.abs(amountB - medianAmount)

      return distanceA - distanceB
    })

    rates.bestRates = sortedRates
  }
}
