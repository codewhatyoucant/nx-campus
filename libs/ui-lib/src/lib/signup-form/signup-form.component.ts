import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StrongPasswordRegx } from './password-regex.const';

@Component({
  selector: 'lib-signup-form',
  templateUrl: './signup-form.component.html'
})


export class SignupFormComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(StrongPasswordRegx)]]
    });
  }
  get passwordFormField() {
    return this.signupForm.get('password');
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
