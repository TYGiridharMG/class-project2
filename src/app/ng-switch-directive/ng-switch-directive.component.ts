import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent implements OnInit {

  gender: string;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
