import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionService } from '../service/transaction.service';
import { ExpenseTrackerComponent } from './expensetrackercomponent';

registerLocaleData(localeNl);

describe('ExpenseTrackerComponent', () => {
  let fixture: ComponentFixture<ExpenseTrackerComponent>;
  let service: TransactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTrackerComponent],
    }).compileComponents();

    service = TestBed.inject(TransactionService);
    service.transactions.set([
      { id: 'salary', type: 'income', category: 'Salary', amount: 3000, date: '2026-06-28' },
      { id: 'rent', type: 'expense', category: 'Housing', amount: 1200, date: '2026-06-27' },
    ]);
    fixture = TestBed.createComponent(ExpenseTrackerComponent);
    await fixture.whenStable();
  });

  function text(selector: string): string | undefined {
    const element = fixture.nativeElement.querySelector(selector) as HTMLElement | null;
    return element?.textContent?.replace(/\s+/g, ' ').trim();
  }

  it('passes the totals from the service to the balance and summary cards', () => {
    expect(text('.balance-amount')).toBe('€ 1.800,00');
    expect(text('.income-panel .summary-total')).toBe('€ 3.000,00');
    expect(text('.expense-panel .summary-total')).toBe('€ 1.200,00');
  });

  it('updates the dashboard when a transaction is added to the service', async () => {
    service.addTransaction({
      id: 'groceries',
      type: 'expense',
      category: 'Groceries',
      amount: 300,
      date: '2026-06-05',
    });
    await fixture.whenStable();

    expect(text('.balance-amount')).toBe('€ 1.500,00');
    expect(text('.expense-panel .summary-total')).toBe('€ 1.500,00');
  });
});
