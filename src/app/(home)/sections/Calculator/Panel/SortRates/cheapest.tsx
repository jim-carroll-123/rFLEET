type Rate = {
  shippingAmount?: {
    amount?: number
  }
}

export type RatesObject = {
  rateResponse?: {
    rates?: Rate[]
  }
  cheapestShippingAmounts?: number[]
}

export const addCheapestShippingAmounts = (rates: RatesObject) => {
  // Navigate through the rates object and get all shipping amounts.
  let shippingAmounts: number[] = []

  if (rates?.rateResponse?.rates) {
    shippingAmounts = rates.rateResponse.rates
      .map((rate) => rate.shippingAmount?.amount)
      .filter((amount): amount is number => typeof amount === 'number')
  }

  shippingAmounts.sort((a, b) => a - b)

  rates.cheapestShippingAmounts = shippingAmounts
}
