import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Authenticate } from '../../models/authenticate.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html'
})


export class LogoutComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.clearAuthToken();
    this.router.navigate(['/login']);
  }

}
