import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Authenticate } from '../../models/authenticate.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html'
})


export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }
  errorMessage: string | undefined;


  login(authenticate: Authenticate) {
    this.authService
      .login(authenticate)
      .subscribe({
        next: (res) => {
          console.log("LoginComponent.login() called", res);
          const role = this.authService.getUserRole();
          if (role === "admin") {
            console.log("Du bist admin")
            this.router.navigate(["/admin"]);
          }
          else {
            this.router.navigate(["/dashboard/"]);
            console.log("Du bist kein admin")
          }
        },
        error: (err: any) => {
          this.errorMessage = "Invalid email or password";
        }
      });
  }
}
