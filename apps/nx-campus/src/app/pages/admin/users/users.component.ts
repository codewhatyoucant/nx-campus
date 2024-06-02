import { Component, effect, inject, model, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, AdminUsersComponent, AdminLibComponent } from '@nx-campus/ui-lib';
import { UserService } from '../../../services/user.service';

export interface IUser {
  username: string;
  role: string;
}

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
  userDetails = model<IUser>(<IUser>{});


  getAllUsersEffect = effect(() => {
    this.userService.getAllUsers().subscribe
      ((data) => {
        this.usersList.set(data)
      });
  })

  getUserDetails(id: string) {
    this.userService.getUserDetails(id).subscribe
      ((data) => {
        this.userDetails.set(data)
      });
  }

}
