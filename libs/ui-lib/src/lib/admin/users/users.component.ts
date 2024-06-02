import { Component, EventEmitter, Input, Output, output } from '@angular/core';
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
  @Input() userDetails: any;
  userDetailId = output<string>();

  userClicked(id: string) {
    this.userDetailId.emit(id);
  }

}
