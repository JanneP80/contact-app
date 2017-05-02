import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appVibrate]'
})
export class VibrateDirective {

  constructor() {

  }

  @Input('appVibrate') appVibration: HostListener;

  @HostListener('click') Click() {
    this.vibrateElement();
  }

  private vibrateElement() {
    console.log('Vibrating...');
    navigator.vibrate([500, 1000]);
  }
}
