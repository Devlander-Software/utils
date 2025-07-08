interface Card {
  brand: string;
  number: string;
  cvv: string;
  expirationDate: string;
}

const cardBrands = [
  "visa",
  "mastercard",
  "amex",
  "discover",
  "jcb",
  "dinersclub",
];

/**
 * Generates a random Stripe card object for testing purposes.
 * @returns A card object with brand, number, cvv, and expirationDate
 */
export function generateStripeCard(): Card {
  const brand = cardBrands[Math.floor(Math.random() * cardBrands.length)];

  // Generate a random card number (simplified for testing)
  const number =
    Math.floor(Math.random() * 9000000000000000) + 1000000000000000;

  // Generate CVV (3-4 digits)
  const cvvLength = brand === "amex" ? 4 : 3;
  const cvv = Math.floor(Math.random() * Math.pow(10, cvvLength))
    .toString()
    .padStart(cvvLength, "0");

  // Generate expiration date (MM/YYYY format)
  const currentYear = new Date().getFullYear();
  const month = Math.floor(Math.random() * 12) + 1;
  const year = currentYear + Math.floor(Math.random() * 10) + 1;

  return {
    brand,
    number: number.toString(),
    cvv,
    expirationDate: `${month.toString().padStart(2, "0")}/${year}`,
  };
}
