import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(id: number, username: string, userImageUrl: string) {
    console.log(id);
    console.log(username);
    console.log(userImageUrl);
    this.router.navigate([`activated-router/${id}`], {
      queryParams: { name: username, imageUrl: userImageUrl }
    });
  }
}
