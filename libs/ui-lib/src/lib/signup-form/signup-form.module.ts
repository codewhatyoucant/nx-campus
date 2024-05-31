import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupFormComponent } from "./signup-form.component";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../form-elements/button/button.component";
import { InputComponent } from "../form-elements/input-text/input-text.component";
import { LabelComponent } from "../form-elements/label/label.component";
import { ErrorInputComponent } from "../form-elements/input-error/input-error.component";

@NgModule({
    declarations: [SignupFormComponent],
    imports: [ReactiveFormsModule, CommonModule, ButtonComponent, InputComponent, LabelComponent, ErrorInputComponent],
    exports: [SignupFormComponent]
})

export class SignupFormModule {

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
