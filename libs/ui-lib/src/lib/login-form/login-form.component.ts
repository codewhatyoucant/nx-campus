import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Authenticate } from '../../../../../apps/nx-campus/src/app/models/authenticate.model';

@Component({
  selector: 'lib-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login() {
    this.submit.emit({
      username: this.loginForm.value.username as string,
      password: this.loginForm.value.password as string
    });
  }
}
