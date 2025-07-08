interface Card {
    brand: string;
    number: string;
    cvv: string;
    expirationDate: string;
}
/**
 * Generates a random Stripe card object for testing purposes.
 * @returns A card object with brand, number, cvv, and expirationDate
 */
export declare function generateStripeCard(): Card;
export {};
