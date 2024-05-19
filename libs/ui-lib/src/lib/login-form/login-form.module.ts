import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from "./login-form.component";

@NgModule({
    declarations: [LoginFormComponent],
    imports: [ReactiveFormsModule],
    exports: [LoginFormComponent]
})

export class LoginFormModule { }
