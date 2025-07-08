import { generateStripeCard } from "../data-validation/generateStripeCard";

describe("generateStripeCard", () => {
  it("should generate a random Stripe card object", () => {
    const card = generateStripeCard();

    expect(card).toHaveProperty("brand");
    expect(card).toHaveProperty("number");
    expect(card).toHaveProperty("cvv");
    expect(card).toHaveProperty("expirationDate");
  });

  it("should generate a valid CVV", () => {
    const card = generateStripeCard();

    // Regular expression to validate CVV format
    const cvvRegex = /^\d{3,4}$/;

    expect(card.cvv).toMatch(cvvRegex);
  });

  it("should generate a valid expiration date", () => {
    const card = generateStripeCard();

    // Regular expression to validate expiration date format (MM/YYYY)
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/(20\d{2}|2[1-9]\d{1})$/;

    expect(card.expirationDate).toMatch(expirationDateRegex);
  });
});
