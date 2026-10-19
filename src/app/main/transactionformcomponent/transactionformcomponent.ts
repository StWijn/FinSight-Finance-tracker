import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Transaction } from '../transaction.interface';
import { TransactionService } from '../service/transaction.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-transactionform',
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './transactionformcomponent.html',
  styleUrl: './transactionformcomponent.css',
})
export class TransactionFormComponent {
  transactionService = inject(TransactionService);

  readonly transactionAdded = output<void>();

  createTransactionFormGroup = new FormGroup({
    type: new FormControl<'income' | 'expense'>('income', { nonNullable: true }),
    category: new FormControl('', { nonNullable: true, validators: Validators.required }),
    amount: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0.01)],
    }),
    date: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  addTransaction() {
    if (this.createTransactionFormGroup.invalid) {
      this.createTransactionFormGroup.markAllAsTouched();
      return;
    }

    const formValue = this.createTransactionFormGroup.getRawValue();

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      ...formValue,
    };

    this.transactionService.addTransaction(newTransaction);
    this.transactionAdded.emit();
  }

  onTypeChange() {
    this.createTransactionFormGroup.controls.category.reset('');
  }

  get isIncome(): boolean {
    return this.createTransactionFormGroup.controls.type.value === 'income';
  }
}
