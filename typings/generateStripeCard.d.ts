export interface Card {
    brand: string;
    number: string;
    cvv: string;
    expirationDate: string;
}
/**
 * Generates a random Stripe card object.
 * @returns {Card} The generated Stripe card object.
 */
export declare function generateStripeCard(): Card;
