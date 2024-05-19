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

export class SignupFormModule { }
