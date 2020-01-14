import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective {

  @HostBinding('style.background') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private ref: ElementRef) { }

  @HostListener('mouseenter')
  mouseEnterTableListener() {
    this.backgroundColor = 'gray';
    this.color = 'white';
  }

  @HostListener('mouseleave')
  mouseLeaveTableListener() {
    this.backgroundColor = 'white';
    this.color = 'black';
  }

}
