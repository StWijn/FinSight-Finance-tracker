import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transaction } from '../transaction.interface';
import { SummaryCardComponent } from './summarycardcomponent';

registerLocaleData(localeNl);

describe('SummaryCardComponent', () => {
  let fixture: ComponentFixture<SummaryCardComponent>;

  const expenses: Transaction[] = [
    { id: '1', type: 'expense', category: 'Groceries', amount: 100, date: '2026-06-05' },
    { id: '2', type: 'expense', category: 'Housing', amount: 200, date: '2026-06-27' },
    { id: '3', type: 'expense', category: 'Groceries', amount: 50, date: '2026-06-17' },
    { id: '4', type: 'expense', category: 'Utilities', amount: 50, date: '2026-06-03' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryCardComponent);
  });

  async function render(type: Transaction['type'], transactions: Transaction[], total: number) {
    fixture.componentRef.setInput('typeOfSummaryCard', type);
    fixture.componentRef.setInput('transactions', transactions);
    fixture.componentRef.setInput('total', total);
    await fixture.whenStable();
  }

  function text(selector: string): string | undefined {
    const element = fixture.nativeElement.querySelector(selector) as HTMLElement | null;
    return element?.textContent?.replace(/\s+/g, ' ').trim();
  }

  it('groups the transactions per category, largest amount first', async () => {
    await render('expense', expenses, 400);

    expect(fixture.componentInstance.categoryBreakdown()).toEqual([
      { category: 'Housing', amount: 200, percentage: 50 },
      { category: 'Groceries', amount: 150, percentage: 37.5 },
      { category: 'Utilities', amount: 50, percentage: 12.5 },
    ]);
  });

  it('shows the total and the largest category', async () => {
    await render('expense', expenses, 400);

    expect(text('h2')).toBe('Total Expenses');
    expect(text('.summary-total')).toBe('€ 400,00');
    expect(text('.largest-category-label')).toBe('Largest category: Housing');
  });

  it('uses 0% instead of dividing by zero when the total is 0', async () => {
    await render(
      'income',
      [{ id: '5', type: 'income', category: 'Gifts', amount: 0, date: '2026-06-23' }],
      0,
    );

    expect(fixture.componentInstance.categoryBreakdown()[0].percentage).toBe(0);
  });

  it('shows an empty state when there are no transactions', async () => {
    await render('income', [], 0);

    expect(text('h2')).toBe('Total Income');
    expect(text('.empty-summary')).toBe('No income transactions yet.');
    expect(fixture.nativeElement.querySelector('.category-list')).toBeNull();
  });
});
