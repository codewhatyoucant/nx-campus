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

  motivationQuotes = ["Jede Zeile Code, die du schreibst, ist ein Schritt näher an deiner neuen Karriere. Trau dich, Träume zu programmieren!", "In der Welt der Technologie bringt jede Neugierde Neues. Stelle Fragen, breche die Norm, und forme die Zukunft!", "Die Welt wartet auf deine Ideen. Lass uns zusammen die Zukunft gestalten!", "Die Welt der Technologie ist voller Möglichkeiten. Lass uns gemeinsam deine Träume verwirklichen!"];
  motviationQuote = this.motivationQuotes[Math.floor(Math.random() * this.motivationQuotes.length)];

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
