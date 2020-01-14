import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ref: ElementRef, private renderer: Renderer2) {
    this.ref.nativeElement.style.background = 'green';
    this.ref.nativeElement.style.color = 'blue';
    this.ref.nativeElement.style.fontSize = '30px';
    this.ref.nativeElement.style.textAlign = 'left';
    const h3 = this.renderer.createElement('h3');
    const text = this.renderer.createText('This is created by using Color Custom Directive');
    this.renderer.appendChild(h3, text);
    this.renderer.appendChild(this.ref.nativeElement, h3);
  }

  @HostListener('mouseenter')
  mouseEnterHostListener() {
    this.ref.nativeElement.style.background = 'yellow';
    this.ref.nativeElement.style.color = 'green';
    this.ref.nativeElement.style.fontSize = '30px';
    this.ref.nativeElement.style.textAlign = 'right';
    this.ref.nativeElement.test = 'This is created by using Color Custom Directive';
  }

  @HostListener('mouseleave')
  mouseLeavesHostListener() {
    this.ref.nativeElement.style.background = 'green';
    this.ref.nativeElement.style.color = 'blue';
    this.ref.nativeElement.style.fontSize = '30px';
    this.ref.nativeElement.style.textAlign = 'left';
    this.ref.nativeElement.test = 'This is created by using Color Custom Directive';
  }
}
