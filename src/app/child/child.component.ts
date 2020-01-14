import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  student = {
    name: 'Sudhanshu',
    gender: 'Male',
    marks: 100,
    course: 'Java Full Stack'
  };
  @Input()
  dataFromParent;

  @Output() childEvent = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
    this.childEvent.emit(this.student);
  }

}
