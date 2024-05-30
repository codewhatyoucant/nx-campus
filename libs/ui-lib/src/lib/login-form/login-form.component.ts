import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Authenticate } from '../../../../../apps/nx-campus/src/app/models/authenticate.model';
import { EmailRegx } from '../validators/email-regex.constant';

@Component({
  selector: 'lib-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Output() submitForm = new EventEmitter<Authenticate>();
  @Input() errorMessage: string | undefined;

  motivationQuotes = ["Jede Zeile Code, die du schreibst, ist ein Schritt näher an deiner neuen Karriere. Trau dich, Träume zu programmieren!", "In der Welt der Technologie bringt jede Neugierde Neues. Stelle Fragen, breche die Norm, und forme die Zukunft!", "Die Welt wartet auf deine Ideen. Lass uns zusammen die Zukunft gestalten!", "Die Welt der Technologie ist voller Möglichkeiten. Lass uns gemeinsam deine Träume verwirklichen!"];

  motviationQuote = this.motivationQuotes[Math.floor(Math.random() * this.motivationQuotes.length)];

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(EmailRegx)]),
    password: new FormControl('', [Validators.required])
  });

  login() {
    console.log('LoginFormComponent.login() called', this.loginForm.value);
    this.submitForm.emit({
      email: this.loginForm.value.email as string,
      password: this.loginForm.value.password as string
    });
  }

  showPassword(e: MouseEvent) {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const eyeIconOpen = document.getElementById('eye-open') as HTMLElement;
    const eyeIconClosed = document.getElementById('eye-closed') as HTMLElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIconClosed.classList.add('hidden');
      eyeIconOpen.classList.remove('hidden');
    } else {
      passwordInput.type = 'password';
      eyeIconClosed.classList.remove('hidden');
      eyeIconOpen.classList.add('hidden');
    }
  }
}
