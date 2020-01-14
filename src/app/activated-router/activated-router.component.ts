import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-activated-router',
  templateUrl: './activated-router.component.html',
  styleUrls: ['./activated-router.component.css']
})
export class ActivatedRouterComponent implements OnInit {
  id;
  user;
  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(data => {
      console.log(data);
      this.id = data.id;
    });
    this.activatedRouter.queryParams.subscribe(data => {
     this.user = data;
     console.log(data);
    });
  }

  ngOnInit() { }

}
