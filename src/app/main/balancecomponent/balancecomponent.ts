import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-balance',
  imports: [CurrencyPipe, IconComponent],
  templateUrl: './balancecomponent.html',
  styleUrl: './balancecomponent.css',
})
export class BalanceComponent {
  balance = input.required<number>();
}
