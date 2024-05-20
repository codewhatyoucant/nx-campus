import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from "./login-form.component";
import { InputComponent } from "../form-elements/input-text/input-text.component";
import { LabelComponent } from "../form-elements/label/label.component";
import { ErrorInputComponent } from "../form-elements/input-error/input-error.component";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../form-elements/button/button.component";

@NgModule({
    declarations: [LoginFormComponent],
    imports: [ReactiveFormsModule, CommonModule, ButtonComponent, InputComponent, LabelComponent, ErrorInputComponent],
    exports: [LoginFormComponent]
})

export class LoginFormModule { }
