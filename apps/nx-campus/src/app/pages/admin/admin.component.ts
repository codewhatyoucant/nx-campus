import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit { 
  constructor(private router: Router, private authService: AuthService) { }
  

  ngOnInit(): void {
    this.checkAdminPermissions();
  }

  checkAdminPermissions(): void {
    const role = this.authService.getUserRole();
    if (role !== 'admin') {
      console.log("wrong permissions!")
      this.router.navigate(['/dashboard']);
    }
  }
}