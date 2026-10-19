import { Component } from '@angular/core';
import { ExpenseTrackerComponent } from './main/expensetrackercomponent/expensetrackercomponent';

@Component({
  selector: 'app-root',
  imports: [ExpenseTrackerComponent],
  templateUrl: './app.html',
})
export class App {}
