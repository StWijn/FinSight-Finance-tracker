import { computed, Injectable, signal } from '@angular/core';
import { Transaction } from '../transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  transactions = signal<Transaction[]>([
    ...['01', '02', '03', '04', '05'].flatMap(
      (month): Transaction[] => [
        {
          id: `2026-${month}-salary`,
          type: 'income',
          category: 'Salary',
          amount: 3900,
          date: `2026-${month}-28`,
        },
        {
          id: `2026-${month}-housing`,
          type: 'expense',
          category: 'Housing',
          amount: 1800,
          date: `2026-${month}-27`,
        },
        {
          id: `2026-${month}-benefits`,
          type: 'income',
          category: 'Government Benefits',
          amount: 150,
          date: `2026-${month}-24`,
        },
        {
          id: `2026-${month}-groceries`,
          type: 'expense',
          category: 'Groceries',
          amount: 700,
          date: `2026-${month}-23`,
        },
        {
          id: `2026-${month}-dividends`,
          type: 'income',
          category: 'Interest & Dividends',
          amount: 400,
          date: `2026-${month}-21`,
        },
        {
          id: `2026-${month}-transportation`,
          type: 'expense',
          category: 'Transportation',
          amount: 120,
          date: `2026-${month}-14`,
        },
        {
          id: `2026-${month}-subscriptions`,
          type: 'expense',
          category: 'Subscriptions',
          amount: 46.97,
          date: `2026-${month}-08`,
        },
        {
          id: `2026-${month}-insurance`,
          type: 'expense',
          category: 'Insurance',
          amount: 178.5,
          date: `2026-${month}-07`,
        },
        {
          id: `2026-${month}-utilities`,
          type: 'expense',
          category: 'Utilities',
          amount: 200,
          date: `2026-${month}-03`,
        },
      ],
    ),
    {
      id: '2026-05-annual-bonus',
      type: 'income',
      category: 'Bonuses',
      amount: 8000,
      date: '2026-05-25',
    },
    {
      id: '2026-03-tax-refund',
      type: 'income',
      category: 'Refunds',
      amount: 808.97,
      date: '2026-03-19',
    },
    {
      id: 't1',
      type: 'income',
      category: 'Salary',
      amount: 3900,
      date: '2026-06-28',
    },
    {
      id: 't2',
      type: 'expense',
      category: 'Housing',
      amount: 1800,
      date: '2026-06-27',
    },
    {
      id: 't3',
      type: 'expense',
      category: 'Utilities',
      amount: 195,
      date: '2026-06-03',
    },
    {
      id: 't4',
      type: 'income',
      category: 'Government Benefits',
      amount: 150,
      date: '2026-06-24',
    },
    {
      id: 't5',
      type: 'expense',
      category: 'Groceries',
      amount: 230.45,
      date: '2026-06-05',
    },
    {
      id: 't6',
      type: 'income',
      category: 'Bonuses',
      amount: 150,
      date: '2026-06-25',
    },
    {
      id: 't7',
      type: 'expense',
      category: 'Insurance',
      amount: 178.5,
      date: '2026-06-07',
    },
    {
      id: 't8',
      type: 'expense',
      category: 'Subscriptions',
      amount: 46.97,
      date: '2026-06-08',
    },
    {
      id: 't10',
      type: 'expense',
      category: 'Dining Out',
      amount: 68.5,
      date: '2026-06-11',
    },
    {
      id: 't11',
      type: 'expense',
      category: 'Transportation',
      amount: 79.5,
      date: '2026-06-12',
    },
    {
      id: 't12',
      type: 'income',
      category: 'Interest & Dividends',
      amount: 400,
      date: '2026-06-21',
    },
    {
      id: 't13',
      type: 'expense',
      category: 'Transportation',
      amount: 124.8,
      date: '2026-06-14',
    },
    {
      id: 't14',
      type: 'expense',
      category: 'Shopping',
      amount: 129.95,
      date: '2026-06-15',
    },
    {
      id: 't15',
      type: 'income',
      category: 'Refunds',
      amount: 39.95,
      date: '2026-06-19',
    },
    {
      id: 't16',
      type: 'expense',
      category: 'Groceries',
      amount: 218.75,
      date: '2026-06-17',
    },
    {
      id: 't17',
      type: 'expense',
      category: 'Entertainment',
      amount: 54.5,
      date: '2026-06-19',
    },
    {
      id: 't18',
      type: 'expense',
      category: 'Travel',
      amount: 145,
      date: '2026-06-21',
    },
    {
      id: 't19',
      type: 'income',
      category: 'Gifts',
      amount: 50,
      date: '2026-06-23',
    },
    {
      id: 't20',
      type: 'expense',
      category: 'Groceries',
      amount: 250.8,
      date: '2026-06-24',
    },
    {
      id: 't21',
      type: 'expense',
      category: 'Dining Out',
      amount: 87.25,
      date: '2026-06-25',
    },
    {
      id: 't22',
      type: 'expense',
      category: 'Taxes',
      amount: 89,
      date: '2026-06-27',
    },
    {
      id: 't23',
      type: 'expense',
      category: 'Other Expenses',
      amount: 32.95,
      date: '2026-06-26',
    },
    {
      id: 't24',
      type: 'income',
      category: 'Salary',
      amount: 3900,
      date: '2026-07-28',
    },
    {
      id: 't25',
      type: 'expense',
      category: 'Housing',
      amount: 1800,
      date: '2026-07-27',
    },
    {
      id: 't26',
      type: 'expense',
      category: 'Utilities',
      amount: 205,
      date: '2026-07-03',
    },
    {
      id: 't27',
      type: 'income',
      category: 'Government Benefits',
      amount: 150,
      date: '2026-07-24',
    },
    {
      id: 't28',
      type: 'expense',
      category: 'Groceries',
      amount: 245.6,
      date: '2026-07-05',
    },
    {
      id: 't29',
      type: 'income',
      category: 'Bonuses',
      amount: 300,
      date: '2026-07-25',
    },
    {
      id: 't30',
      type: 'expense',
      category: 'Insurance',
      amount: 178.5,
      date: '2026-07-07',
    },
    {
      id: 't31',
      type: 'expense',
      category: 'Subscriptions',
      amount: 46.97,
      date: '2026-07-08',
    },
    {
      id: 't33',
      type: 'expense',
      category: 'Dining Out',
      amount: 74.6,
      date: '2026-07-10',
    },
    {
      id: 't34',
      type: 'expense',
      category: 'Transportation',
      amount: 86.4,
      date: '2026-07-11',
    },
    {
      id: 't35',
      type: 'expense',
      category: 'Transportation',
      amount: 142.65,
      date: '2026-07-13',
    },
    {
      id: 't36',
      type: 'income',
      category: 'Interest & Dividends',
      amount: 400,
      date: '2026-07-21',
    },
    {
      id: 't37',
      type: 'expense',
      category: 'Groceries',
      amount: 209.95,
      date: '2026-07-15',
    },
    {
      id: 't38',
      type: 'expense',
      category: 'Shopping',
      amount: 179.5,
      date: '2026-07-17',
    },
    {
      id: 't39',
      type: 'income',
      category: 'Refunds',
      amount: 64.5,
      date: '2026-07-19',
    },
    {
      id: 't40',
      type: 'expense',
      category: 'Entertainment',
      amount: 68,
      date: '2026-07-19',
    },
    {
      id: 't41',
      type: 'expense',
      category: 'Travel',
      amount: 385,
      date: '2026-07-21',
    },
    {
      id: 't42',
      type: 'income',
      category: 'Gifts',
      amount: 125,
      date: '2026-07-23',
    },
    {
      id: 't43',
      type: 'expense',
      category: 'Dining Out',
      amount: 98.5,
      date: '2026-07-23',
    },
    {
      id: 't44',
      type: 'expense',
      category: 'Groceries',
      amount: 244.45,
      date: '2026-07-25',
    },
    {
      id: 't45',
      type: 'expense',
      category: 'Taxes',
      amount: 89,
      date: '2026-07-27',
    },
    {
      id: 't46',
      type: 'expense',
      category: 'Other Expenses',
      amount: 47.8,
      date: '2026-07-26',
    },
    {
      id: 't47',
      type: 'income',
      category: 'Salary',
      amount: 3900,
      date: '2026-08-28',
    },
    {
      id: 't48',
      type: 'expense',
      category: 'Housing',
      amount: 1800,
      date: '2026-08-27',
    },
    {
      id: 't49',
      type: 'expense',
      category: 'Utilities',
      amount: 198.75,
      date: '2026-08-03',
    },
    {
      id: 't50',
      type: 'income',
      category: 'Government Benefits',
      amount: 150,
      date: '2026-08-24',
    },
    {
      id: 't52',
      type: 'income',
      category: 'Bonuses',
      amount: 225,
      date: '2026-08-25',
    },
    {
      id: 't53',
      type: 'expense',
      category: 'Insurance',
      amount: 178.5,
      date: '2026-08-07',
    },
    {
      id: 't54',
      type: 'expense',
      category: 'Subscriptions',
      amount: 46.97,
      date: '2026-08-08',
    },
    {
      id: 't58',
      type: 'income',
      category: 'Interest & Dividends',
      amount: 400,
      date: '2026-08-21',
    },
    {
      id: 't59',
      type: 'expense',
      category: 'Transportation',
      amount: 191.25,
      date: '2026-08-14',
    },
    {
      id: 't62',
      type: 'income',
      category: 'Refunds',
      amount: 27.99,
      date: '2026-08-19',
    },
    {
      id: 't64',
      type: 'expense',
      category: 'Travel',
      amount: 210,
      date: '2026-08-20',
    },
    {
      id: 't65',
      type: 'income',
      category: 'Gifts',
      amount: 35,
      date: '2026-08-23',
    },
    {
      id: 't66',
      type: 'expense',
      category: 'Dining Out',
      amount: 147.35,
      date: '2026-08-22',
    },
    {
      id: 't67',
      type: 'expense',
      category: 'Groceries',
      amount: 700,
      date: '2026-08-24',
    },
  ]);

  readonly expenseCategories = [
    'Housing',
    'Utilities',
    'Groceries',
    'Transportation',
    'Healthcare',
    'Insurance',
    'Dining Out',
    'Shopping',
    'Entertainment',
    'Subscriptions',
    'Travel',
    'Taxes',
    'Other Expenses',
  ];

  readonly incomeCategories = [
    'Salary',
    'Government Benefits',
    'Bonuses',
    'Interest & Dividends',
    'Refunds',
    'Gifts',
  ];

  readonly allCategories = [...this.incomeCategories, ...this.expenseCategories].sort(
    (first, second) => first.localeCompare(second),
  );

  income = computed(() =>
    this.transactions()
      .filter((t) => t.type === 'income')
      .reduce((total, t) => total + t.amount, 0),
  );

  expenses = computed(() =>
    this.transactions()
      .filter((t) => t.type === 'expense')
      .reduce((total, t) => total + t.amount, 0),
  );

  expenseTransactions = computed(() =>
    this.transactions().filter((transaction) => transaction.type === 'expense'),
  );

  incomeTransactions = computed(() =>
    this.transactions().filter((transaction) => transaction.type === 'income'),
  );

  balance = computed(() => this.income() - this.expenses());

  addTransaction(transaction: Transaction) {
    this.transactions.update((transactions) => [...transactions, transaction]);
  }

  deleteTransaction(id: string) {
    this.transactions.update((transactions) =>
      transactions.filter((transaction) => transaction.id !== id),
    );
  }
}
