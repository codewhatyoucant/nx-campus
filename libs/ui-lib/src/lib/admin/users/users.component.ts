import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDto, UserService } from '../../../../../../apps/nx-campus/src/app/services/user.service' // Importiere den UserService

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class AdminUsersComponent {
  @Input() users: any;
  @Input() userDetails: any;
  @Output() userDetailId = new EventEmitter<string>();
  isEditingEmail: boolean = false;
  isEditingRole: boolean = false;
  isEditingName: boolean = false;
  @Output() userAdded = new EventEmitter<UserDto>();

  newUser: UserDto = {
    username: '',
    email: '',
    role: 'User',
    password: ''
  };

  constructor(private userService: UserService) { }  

  userClicked(id: string) {
    this.userDetailId.emit(id);
  }

  editRole() {
    this.isEditingRole = true;
  }

  saveRole() {
    this.isEditingRole = false;
    this.userService.updateUserDetails(this.userDetails().id, { role: this.userDetails().role }).subscribe(response => {
      console.log('Rolle aktualisiert', response);
    });
  }

  editEmail() {
    this.isEditingEmail = true;
  }

  saveEmail() {
    this.isEditingEmail = false;
    this.userService.updateUserDetails(this.userDetails().id, { email: this.userDetails().email }).subscribe(response => {
      console.log('E-Mail aktualisiert', response);
    });
  }

  editUsername() {
    this.isEditingName = true;
  }

  saveUsername() {
    this.isEditingName = false;
    this.userService.updateUserDetails(this.userDetails().id, { username: this.userDetails().username }).subscribe(response => {
      console.log('Benutzername aktualisiert', response);
    });
  }
  onSubmit(){
    console.log('Form submitted')
  }
}
