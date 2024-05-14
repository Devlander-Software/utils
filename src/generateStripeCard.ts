export interface Card {
  brand: string
  number: string
  cvv: string
  expirationDate: string
}

/**
 * Generates a random Stripe card object.
 * @returns {Card} The generated Stripe card object.
 */
export function generateStripeCard(): Card {
  const cards = [
    { brand: 'Visa', number: '4242 4242 4242 4242', cvcLength: 3 },
    { brand: 'Visa (debit)', number: '4000 0566 5566 5556', cvcLength: 3 },
    { brand: 'Mastercard', number: '5555 5555 5555 4444', cvcLength: 3 },
    {
      brand: 'Mastercard (2-series)',
      number: '2223 0031 2200 3222',
      cvcLength: 3,
    },
    {
      brand: 'Mastercard (debit)',
      number: '5200 8282 8282 8210',
      cvcLength: 3,
    },
    {
      brand: 'Mastercard (prepaid)',
      number: '5105 1051 0510 5100',
      cvcLength: 3,
    },
    { brand: 'American Express', number: '3782 822463 10005', cvcLength: 4 },
    { brand: 'American Express', number: '3714 496353 98431', cvcLength: 4 },
    { brand: 'Discover', number: '6011 1111 1111 1117', cvcLength: 3 },
    { brand: 'Discover', number: '6011 0009 9013 9424', cvcLength: 3 },
    { brand: 'Discover (debit)', number: '6011 9811 1111 1113', cvcLength: 3 },
    { brand: 'Diners Club', number: '3056 9300 0902 0004', cvcLength: 3 },
    {
      brand: 'Diners Club (14-digit card)',
      number: '3622 720627 1667',
      cvcLength: 3,
    },
    {
      brand: 'BCcard and DinaCard',
      number: '6555 9000 0060 4105',
      cvcLength: 3,
    },
    { brand: 'JCB', number: '3566 0020 2036 0505', cvcLength: 3 },
    { brand: 'UnionPay', number: '6200 0000 0000 0005', cvcLength: 3 },
    { brand: 'UnionPay (debit)', number: '6200 0000 0000 0047', cvcLength: 3 },
    {
      brand: 'UnionPay (19-digit card)',
      number: '6205 5000 0000 0000 004',
      cvcLength: 3,
    },
  ]

  // Select a random card
  const card = cards[Math.floor(Math.random() * cards.length)]

  // Generate a random CVV
  const cvv = Array.from({ length: card.cvcLength }, () =>
    Math.floor(Math.random() * 10),
  ).join('')

  // Generate a future expiration date
  const today = new Date()
  const futureYear = today.getFullYear() + Math.floor(Math.random() * 5) + 1 // 1-5 years in the future
  const month = Math.floor(Math.random() * 12) + 1 // Random month
  const expirationDate = `${month.toString().padStart(2, '0')}/${futureYear}`

  return {
    brand: card.brand,
    number: card.number,
    cvv: cvv,
    expirationDate: expirationDate,
  }
}
