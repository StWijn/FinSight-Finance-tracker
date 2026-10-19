import { Component, inject } from '@angular/core';
import { BalanceComponent } from '../balancecomponent/balancecomponent';
import { SummaryCardComponent } from '../summarycardcomponent/summarycardcomponent';
import { TransactionListComponent } from '../transactionlistcomponent/transactionlistcomponent';
import { TransactionService } from '../service/transaction.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-expense-tracker',
  imports: [BalanceComponent, SummaryCardComponent, TransactionListComponent, IconComponent],
  templateUrl: './expensetrackercomponent.html',
  styleUrl: './expensetrackercomponent.css',
})
export class ExpenseTrackerComponent {
  transactionService = inject(TransactionService);
}
