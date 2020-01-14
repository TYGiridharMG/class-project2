import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  employee = {
    name: 'Giridhar',
    salary: 50000,
    gender: 'Male',
    designation: 'Team Lead'
  };

  constructor() { }

  ngOnInit() {
  }

}
