import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StrongPasswordRegx } from '../validators/password-regex.constant';
import { EmailRegx } from '../validators/email-regex.constant';
import { confirmPasswordValidator } from '../validators/confirm-password.validator';

@Component({
  selector: 'lib-signup-form',
  templateUrl: './signup-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SignupFormComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(EmailRegx)]],
      password: ['', [Validators.required, Validators.pattern(StrongPasswordRegx)]],
      passwordconfirm: ['', [Validators.required, Validators.pattern(StrongPasswordRegx)]],
      validators: confirmPasswordValidator

    });
  }
  get passwordFormField() {
    return this.signupForm.get('password');
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
