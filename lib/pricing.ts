export const PRICING_USD = {
  personalMonthly: 18,
  personalYearly: 108,
  businessMonthly: 86,
  businessYearly: 516,
  personalIncludedWebsites: 1,
  personalIncludedMembers: 1,
  businessIncludedWebsites: 10,
  businessIncludedMembers: 25,
} as const;

export function formatUsd(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

export function getPlanMonthlyPrice(plan: 'personal' | 'business', billingCycle: 'Monthly' | 'Yearly') {
  if (plan === 'personal') {
    return billingCycle === 'Yearly' ? PRICING_USD.personalYearly / 12 : PRICING_USD.personalMonthly;
  }
  return billingCycle === 'Yearly' ? PRICING_USD.businessYearly / 12 : PRICING_USD.businessMonthly;
}
