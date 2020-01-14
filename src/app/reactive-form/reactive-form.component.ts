import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm = this.fb.group({
    email: this.fb.control(null, [Validators.required, Validators.email]),
    name: this.fb.control(null, [Validators.pattern('[a-zA-Z]+'), Validators.required]),
    skills: this.fb.array([])
  });

  user: User;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addSkill() {
    (this.get('skills') as FormArray).push(new FormControl());
  }
  removeSkill(i) {
    (this.get('skills') as FormArray).removeAt(i);
  }
  submitForm() {
    this.user = this.reactiveForm.value;
    console.log(this.reactiveForm);
    console.log(this.user);
    this.reactiveForm.reset();
  }
  get(type: string) {
    return this.reactiveForm.get(type);
  }
}

interface User {
  email: string;
  name: string;
  skills: string[];
}
