import { TestBed } from '@angular/core/testing';
import { Transaction } from '../transaction.interface';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  const salary: Transaction = {
    id: 'salary',
    type: 'income',
    category: 'Salary',
    amount: 3000,
    date: '2026-06-28',
  };
  const refund: Transaction = {
    id: 'refund',
    type: 'income',
    category: 'Refunds',
    amount: 150,
    date: '2026-06-19',
  };
  const rent: Transaction = {
    id: 'rent',
    type: 'expense',
    category: 'Housing',
    amount: 1200,
    date: '2026-06-27',
  };
  const groceries: Transaction = {
    id: 'groceries',
    type: 'expense',
    category: 'Groceries',
    amount: 45.5,
    date: '2026-06-05',
  };

  beforeEach(() => {
    service = TestBed.inject(TransactionService);
    service.transactions.set([salary, refund, rent, groceries]);
  });

  it('calculates income, expenses and balance from the transactions', () => {
    expect(service.income()).toBe(3150);
    expect(service.expenses()).toBe(1245.5);
    expect(service.balance()).toBe(1904.5);
  });

  it('splits the transactions into income and expense lists', () => {
    expect(service.incomeTransactions()).toEqual([salary, refund]);
    expect(service.expenseTransactions()).toEqual([rent, groceries]);
  });

  it('recalculates the totals after a transaction is added', () => {
    service.addTransaction({
      id: 'bonus',
      type: 'income',
      category: 'Bonuses',
      amount: 500,
      date: '2026-06-25',
    });

    expect(service.transactions()).toHaveLength(5);
    expect(service.income()).toBe(3650);
    expect(service.balance()).toBe(2404.5);
  });

  it('recalculates the totals after a transaction is deleted', () => {
    service.deleteTransaction('rent');

    expect(service.transactions().map((transaction) => transaction.id)).toEqual([
      'salary',
      'refund',
      'groceries',
    ]);
    expect(service.expenses()).toBe(45.5);
    expect(service.balance()).toBe(3104.5);
  });

  it('offers all income and expense categories in alphabetical order', () => {
    expect(service.allCategories).toEqual([
      'Bonuses',
      'Dining Out',
      'Entertainment',
      'Gifts',
      'Government Benefits',
      'Groceries',
      'Healthcare',
      'Housing',
      'Insurance',
      'Interest & Dividends',
      'Other Expenses',
      'Refunds',
      'Salary',
      'Shopping',
      'Subscriptions',
      'Taxes',
      'Transportation',
      'Travel',
      'Utilities',
    ]);
  });
});
