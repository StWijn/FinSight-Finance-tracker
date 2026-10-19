import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../transaction.interface';
import { TransactionListComponent } from './transactionlistcomponent';

describe('TransactionListComponent', () => {
  let fixture: ComponentFixture<TransactionListComponent>;
  let service: TransactionService;

  const transactions: Transaction[] = [
    { id: 'groceries', type: 'expense', category: 'Groceries', amount: 80, date: '2026-06-05' },
    { id: 'salary', type: 'income', category: 'Salary', amount: 3000, date: '2026-06-28' },
    { id: 'rent', type: 'expense', category: 'Housing', amount: 1200, date: '2026-06-27' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionListComponent],
    }).compileComponents();

    service = TestBed.inject(TransactionService);
    service.transactions.set(transactions);
    fixture = TestBed.createComponent(TransactionListComponent);
    await fixture.whenStable();
  });

  function element<T extends HTMLElement>(selector: string): T | null {
    return fixture.nativeElement.querySelector(selector) as T | null;
  }

  function visibleTransactions(): string[] {
    const buttons = fixture.nativeElement.querySelectorAll(
      '.delete-button',
    ) as NodeListOf<HTMLButtonElement>;
    return Array.from(buttons, (button) => button.getAttribute('aria-label') ?? '');
  }

  it('lists the transactions newest first', () => {
    expect(visibleTransactions()).toEqual([
      'Delete Salary transaction on 2026-06-28',
      'Delete Housing transaction on 2026-06-27',
      'Delete Groceries transaction on 2026-06-05',
    ]);
  });

  it('filters the list by transaction type through the filter form', async () => {
    element('.filter-button')!.click();
    await fixture.whenStable();

    const typeSelect = element<HTMLSelectElement>('.filter-form select')!;
    typeSelect.value = 'expense';
    typeSelect.dispatchEvent(new Event('change'));
    await fixture.whenStable();

    expect(visibleTransactions()).toEqual([
      'Delete Housing transaction on 2026-06-27',
      'Delete Groceries transaction on 2026-06-05',
    ]);
  });

  it('shows an empty state when no transaction matches the filter', async () => {
    fixture.componentInstance.filterForm.setValue({ type: 'income', category: 'Gifts' });
    await fixture.whenStable();

    expect(visibleTransactions()).toEqual([]);
    expect(element('.empty-state')?.textContent?.trim()).toBe(
      'No transactions match your filters.',
    );
  });

  it('deletes a transaction with its delete button', async () => {
    element('[aria-label="Delete Housing transaction on 2026-06-27"]')!.click();
    await fixture.whenStable();

    expect(service.transactions().map((transaction) => transaction.id)).toEqual([
      'groceries',
      'salary',
    ]);
    expect(visibleTransactions()).toHaveLength(2);
  });

  it('replaces the table with the form when "Add transaction" is clicked', async () => {
    element('.add-button')!.click();
    await fixture.whenStable();

    expect(element('app-transactionform')).not.toBeNull();
    expect(element('.transaction-table')).toBeNull();
  });
});
