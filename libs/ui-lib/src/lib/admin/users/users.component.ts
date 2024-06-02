import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class AdminUsersComponent {
  @Input() users: any;

  getUserDetails(id: string) {
    console.log("User Details", id);
  }
}
