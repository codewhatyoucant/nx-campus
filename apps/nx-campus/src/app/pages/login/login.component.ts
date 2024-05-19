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

  login(authenticate: Authenticate) {
    this.authService
      .login(authenticate)
      .subscribe((user: User) =>
        this.router.navigate([`/user-profile/${user.id}`])
      );
  }
}
