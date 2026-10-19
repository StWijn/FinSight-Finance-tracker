export type CategoryTone = 'green' | 'rose' | 'blue' | 'purple' | 'slate';

export interface CategoryAppearance {
  readonly icon: string;
  readonly tone: CategoryTone;
}

const CATEGORY_APPEARANCES: Readonly<Record<string, CategoryAppearance>> = {
  Salary: { icon: 'briefcase-business', tone: 'green' },
  'Government Benefits': { icon: 'landmark', tone: 'blue' },
  Bonuses: { icon: 'gift', tone: 'green' },
  'Interest & Dividends': { icon: 'chart-no-axes-combined', tone: 'blue' },
  Refunds: { icon: 'rotate-ccw', tone: 'green' },
  Gifts: { icon: 'gift', tone: 'green' },
  Housing: { icon: 'house', tone: 'rose' },
  Utilities: { icon: 'zap', tone: 'rose' },
  Groceries: { icon: 'shopping-cart', tone: 'rose' },
  Transportation: { icon: 'car', tone: 'rose' },
  Healthcare: { icon: 'heart-pulse', tone: 'rose' },
  Insurance: { icon: 'shield-check', tone: 'rose' },
  'Dining Out': { icon: 'utensils', tone: 'rose' },
  Shopping: { icon: 'shopping-bag', tone: 'rose' },
  Entertainment: { icon: 'ticket', tone: 'rose' },
  Subscriptions: { icon: 'receipt', tone: 'rose' },
  Travel: { icon: 'plane', tone: 'purple' },
  Taxes: { icon: 'landmark', tone: 'rose' },
  'Other Expenses': { icon: 'ellipsis', tone: 'slate' },
};

const DEFAULT_APPEARANCE: CategoryAppearance = { icon: 'wallet', tone: 'slate' };

export function getCategoryAppearance(category: string): CategoryAppearance {
  return CATEGORY_APPEARANCES[category] ?? DEFAULT_APPEARANCE;
}
