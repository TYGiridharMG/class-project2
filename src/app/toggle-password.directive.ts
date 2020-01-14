import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]'
})
export class TogglePasswordDirective {

  constructor(private ref: ElementRef) {
    this.ref.nativeElement.type = 'password';
  }

  @HostListener('change')
  onChange() {
    if (this.ref.nativeElement.type === 'password') {
      this.ref.nativeElement.type = 'text';
    } else {
      this.ref.nativeElement.type = 'password';
    }
  }

}
