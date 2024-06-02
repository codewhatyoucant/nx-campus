import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, AdminUsersComponent, AdminLibComponent } from '@nx-campus/ui-lib';
import { UserService } from '../../../services/user.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, AdminUsersComponent, AdminLibComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  userService = inject(UserService);
  usersList = signal<any[]>([]);

  usersEffect = effect(() => {
    this.userService.getAllUsers().subscribe
      ((data) => {
        console.log("Users", data);
        this.usersList.set(data)
      });
  })

}
