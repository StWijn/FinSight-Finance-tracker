import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { TransactionService } from '../service/transaction.service';
import { TransactionFormComponent } from './transactionformcomponent';

describe('TransactionFormComponent', () => {
  let fixture: ComponentFixture<TransactionFormComponent>;
  let service: TransactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionFormComponent],
    }).compileComponents();

    service = TestBed.inject(TransactionService);
    service.transactions.set([]);
    fixture = TestBed.createComponent(TransactionFormComponent);
    await fixture.whenStable();
  });

  function setField(id: string, value: string, eventName: 'input' | 'change') {
    const field = fixture.nativeElement.querySelector(`#${id}`) as
      HTMLInputElement | HTMLSelectElement;
    field.value = value;
    field.dispatchEvent(new Event(eventName, { bubbles: true }));
  }

  function submitForm() {
    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  }

  it('shows validation errors without saving or emitting when submitted empty', async () => {
    const addTransaction = vi.spyOn(service, 'addTransaction');
    const transactionAdded = vi.fn();
    fixture.componentInstance.transactionAdded.subscribe(transactionAdded);

    submitForm();
    await fixture.whenStable();

    expect(addTransaction).not.toHaveBeenCalled();
    expect(transactionAdded).not.toHaveBeenCalled();
    expect(service.transactions()).toEqual([]);
    const errors = fixture.nativeElement.querySelectorAll(
      '.field-error',
    ) as NodeListOf<HTMLElement>;
    expect(Array.from(errors, (error) => error.textContent?.trim())).toEqual([
      'Choose a category.',
      'Enter an amount of at least €0.01.',
      'Choose a date.',
    ]);
  });

  it('saves a valid transaction through the DOM form and emits the completion event', async () => {
    const transactionAdded = vi.fn();
    fixture.componentInstance.transactionAdded.subscribe(transactionAdded);

    setField('transaction-type', 'expense', 'change');
    await fixture.whenStable();
    setField('transaction-category', 'Groceries', 'change');
    setField('transaction-amount', '24.50', 'input');
    setField('transaction-date', '2026-08-24', 'input');
    submitForm();
    await fixture.whenStable();

    expect(service.transactions()).toEqual([
      {
        id: expect.any(String),
        type: 'expense',
        category: 'Groceries',
        amount: 24.5,
        date: '2026-08-24',
      },
    ]);
    expect(service.balance()).toBe(-24.5);
    expect(transactionAdded).toHaveBeenCalledTimes(1);
  });

  it('clears the selected category when the transaction type changes', async () => {
    setField('transaction-category', 'Salary', 'change');
    expect(fixture.componentInstance.createTransactionFormGroup.controls.category.value).toBe(
      'Salary',
    );

    setField('transaction-type', 'expense', 'change');
    await fixture.whenStable();

    const category = fixture.nativeElement.querySelector(
      '#transaction-category',
    ) as HTMLSelectElement;
    const options = Array.from(category.options, (option) => option.value);
    expect(category.value).toBe('');
    expect(fixture.componentInstance.createTransactionFormGroup.controls.category.value).toBe('');
    expect(options).toContain('Housing');
    expect(options).not.toContain('Salary');
  });
});
