import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupFormComponent } from "./signup-form.component";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../form-elements/button/button.component";

@NgModule({
    declarations: [SignupFormComponent],
    imports: [ReactiveFormsModule, CommonModule, ButtonComponent],
    exports: [SignupFormComponent]
})

export class SignupFormModule { }
