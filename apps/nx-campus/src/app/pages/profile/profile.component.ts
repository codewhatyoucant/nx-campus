import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: User | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        console.error(err);
      },
    });

  }
}
