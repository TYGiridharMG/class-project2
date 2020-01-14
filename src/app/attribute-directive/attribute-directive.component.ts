import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  flag = true;

  constructor(private data: DataService) {
    setInterval(() => {
      this.flag = !this.flag;
    }, 1000);
  }

  ngOnInit() {
  }

}
