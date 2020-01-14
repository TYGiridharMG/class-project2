import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  twowaydata;
  name = 'Rashmika Mandana';
  imageUrl = 'https://www.filmibeat.com/img/popcorn/profile_photos/rashmika-mandanna-20190705125340-37195.jpg';
  flag = true;
  h = 600;
  w = 480;
  value = '';
  constructor() {
    setInterval(() => {
      this.flag = !this.flag;
    }, 1000);
  }

  ngOnInit() {
  }
  clickMe() {
    console.log('Hey You Clicked The Button\nThis function is called using Event Binding');
    alert('Hey You Clicked The Button\nThis function is called using Event Binding');
  }
  changeMe(input) {
    this.value = input.value;
  }
}
