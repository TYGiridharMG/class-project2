import { Component, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import { OnDestroy, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core'
import { AccessGuard } from '../access.guard';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, AfterContentInit,
                    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngAfterViewChecked(): void {
    console.log('after view checked');
  }
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngAfterContentInit(): void {
    console.log('after content init');
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log('on change')
  }
  name: string;
  constructor(access: AccessGuard) { }

  ngOnInit() {
    console.log('Init');
  }

}
