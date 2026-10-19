import { TestBed } from '@angular/core/testing';
import { TransactionService } from '../main/service/transaction.service';
import { getCategoryAppearance } from './category-appearance';

describe('getCategoryAppearance', () => {
  it('returns the configured icon and tone for a known category', () => {
    expect(getCategoryAppearance('Salary')).toEqual({ icon: 'briefcase-business', tone: 'green' });
    expect(getCategoryAppearance('Groceries')).toEqual({ icon: 'shopping-cart', tone: 'rose' });
  });

  it('falls back to a neutral wallet icon for an unknown category', () => {
    expect(getCategoryAppearance('Crypto')).toEqual({ icon: 'wallet', tone: 'slate' });
  });

  it('has a dedicated appearance for every category a user can choose', () => {
    const fallback = getCategoryAppearance('Unknown category');
    const { allCategories } = TestBed.inject(TransactionService);

    const categoriesWithoutAppearance = allCategories.filter(
      (category) => getCategoryAppearance(category) === fallback,
    );

    expect(categoriesWithoutAppearance).toEqual([]);
  });
});
