import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceComponent } from './balancecomponent';

registerLocaleData(localeNl);

describe('BalanceComponent', () => {
  let fixture: ComponentFixture<BalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BalanceComponent);
  });

  async function renderBalance(balance: number) {
    fixture.componentRef.setInput('balance', balance);
    await fixture.whenStable();
  }

  function element(selector: string): HTMLElement {
    return fixture.nativeElement.querySelector(selector) as HTMLElement;
  }

  function amountText(): string | undefined {
    return element('.balance-amount').textContent?.replace(/\s+/g, ' ').trim();
  }

  it('shows a positive balance as a Dutch euro amount', async () => {
    await renderBalance(1234.5);

    expect(amountText()).toBe('€ 1.234,50');
    expect(element('.balance-card').classList).not.toContain('negative');
  });

  it('does not mark a zero balance as negative', async () => {
    await renderBalance(0);

    expect(amountText()).toBe('€ 0,00');
    expect(element('.balance-card').classList).not.toContain('negative');
  });

  it('marks a negative balance', async () => {
    await renderBalance(-250);

    expect(amountText()).toBe('€ -250,00');
    expect(element('.balance-card').classList).toContain('negative');
  });
});
