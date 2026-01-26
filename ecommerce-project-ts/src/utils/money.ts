export const formatMoney = (amountCents: number) => {
  if (amountCents < 0) {
    amountCents *= -1;
    return `-$${(amountCents / 100).toFixed(2)}`;
  }

  return `$${(amountCents / 100).toFixed(2)}`; // product.priceCents = amountCents
};
