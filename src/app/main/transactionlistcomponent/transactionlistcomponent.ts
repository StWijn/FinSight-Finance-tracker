import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TransactionService } from '../service/transaction.service';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TransactionFormComponent } from '../transactionformcomponent/transactionformcomponent';
import { IconComponent } from '../../shared/icon/icon.component';
import { getCategoryAppearance } from '../../shared/category-appearance';

@Component({
  selector: 'app-transactionlist',
  imports: [DatePipe, CurrencyPipe, ReactiveFormsModule, TransactionFormComponent, IconComponent],
  templateUrl: './transactionlistcomponent.html',
  styleUrl: './transactionlistcomponent.css',
})
export class TransactionListComponent {
  transactionService = inject(TransactionService);
  protected readonly categoryAppearance = getCategoryAppearance;

  protected readonly isAddingTransaction = signal(false);
  protected readonly areFiltersVisible = signal(false);

  filterForm = new FormGroup({
    type: new FormControl(''),
    category: new FormControl(''),
  });

  private readonly filterValues = toSignal(this.filterForm.valueChanges, {
    initialValue: this.filterForm.getRawValue(),
  });

  protected readonly filteredTransactions = computed(() => {
    const { type, category } = this.filterValues();

    return this.transactionService
      .transactions()
      .filter(
        (transaction) =>
          (!type || transaction.type === type) && (!category || transaction.category === category),
      )
      .sort((first, second) => second.date.localeCompare(first.date));
  });

  onTypeChange() {
    this.filterForm.controls.category.setValue('');
  }

  protected toggleTransactionForm(): void {
    this.isAddingTransaction.update((isAdding) => !isAdding);
  }

  protected toggleFilters(): void {
    this.areFiltersVisible.update((areVisible) => !areVisible);
  }
}
