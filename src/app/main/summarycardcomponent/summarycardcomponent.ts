import { Component, computed, input } from '@angular/core';
import { Transaction } from '../transaction.interface';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { getCategoryAppearance } from '../../shared/category-appearance';

@Component({
  selector: 'app-summarycard',
  imports: [CurrencyPipe, DecimalPipe, IconComponent],
  templateUrl: './summarycardcomponent.html',
  styleUrl: './summarycardcomponent.css',
})
export class SummaryCardComponent {
  typeOfSummaryCard = input.required<Transaction['type']>();

  transactions = input.required<Transaction[]>();

  total = input.required<number>();

  protected readonly categoryAppearance = getCategoryAppearance;

  categoryBreakdown = computed(() => {
    const categoryTotals: Record<string, number> = {};

    for (const transaction of this.transactions()) {
      categoryTotals[transaction.category] =
        (categoryTotals[transaction.category] ?? 0) + transaction.amount;
    }

    const total = this.total();

    return Object.entries(categoryTotals)
      .map(([category, amount]) => ({
        category,
        amount,
        percentage: total === 0 ? 0 : (amount / total) * 100,
      }))
      .sort((a, b) => b.amount - a.amount);
  });
}
