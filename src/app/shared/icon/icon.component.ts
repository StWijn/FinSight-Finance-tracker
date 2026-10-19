import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  template: `<span [style.mask-image]="iconUrl()" [style.-webkit-mask-image]="iconUrl()"></span>`,
  styles: `
    :host {
      display: inline-flex;
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
      vertical-align: middle;
    }

    span {
      display: block;
      width: 100%;
      height: 100%;
      background-color: currentColor;
      mask-position: center;
      mask-repeat: no-repeat;
      mask-size: contain;
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: contain;
    }
  `,
})
export class IconComponent {
  readonly name = input.required<string>();

  protected readonly iconUrl = computed(() => `url("icons/lucide/${this.name()}.svg")`);
}
