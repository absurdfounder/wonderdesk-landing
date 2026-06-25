export const PRICING_USD = {
  personalMonthly: 18,
  personalYearly: 108,
  businessMonthly: 86,
  businessYearly: 516,
} as const;

export function formatUsd(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}
