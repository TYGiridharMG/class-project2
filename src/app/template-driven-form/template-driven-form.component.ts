import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user: User;
  passwordType = 'password';
  todaysDate = Date.now();
  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.user = form.value;
    form.reset();
  }

  showPassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}

interface User {
  name: string;
  gender: string;
  email: string;
  password: string;
  dob: Date;
}
