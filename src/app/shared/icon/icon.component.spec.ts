import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('name', 'wallet');
    await fixture.whenStable();
  });

  function maskImage(): string {
    const span = fixture.nativeElement.querySelector('span') as HTMLSpanElement;
    return span.style.getPropertyValue('mask-image');
  }

  it('uses the Lucide SVG with the given name as mask image', () => {
    expect(maskImage()).toBe('url("icons/lucide/wallet.svg")');
  });

  it('switches to another SVG when the name input changes', async () => {
    fixture.componentRef.setInput('name', 'trash-2');
    await fixture.whenStable();

    expect(maskImage()).toBe('url("icons/lucide/trash-2.svg")');
  });

  it('is hidden from screen readers because it is decorative', () => {
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });
});
