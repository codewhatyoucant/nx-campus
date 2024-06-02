import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassService } from '../../../../../../apps/nx-campus/src/app/services/class.service' // Importiere den UserService

@Component({
  selector: 'lib-classes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class AdminClassesComponent {
  @Input() classes: any;
  @Input() classDetails: any;
  @Output() classDetailId = new EventEmitter<string>();
  isEditingName: boolean = false;
  isEditingStartDate: boolean = false;
  isEditingEndDate: boolean = false;
  isEditingUsers: boolean = false;
  isEditingActive: boolean = false;
  isEditingCurriculum: boolean = false;


  constructor(private classService: ClassService) { }  

  classClicked(id: string) {
    this.classDetailId.emit(id);
  }

  saveStartDate() {
    this.isEditingStartDate = false;
    this.classService.updateUserDetails(this.classDetails().id, { startDate: this.classDetails().startDate }).subscribe(response => {
      console.log('Startdatum aktualisiert', response);
    });
  }

  editStartDate() {
    this.isEditingStartDate = true;
  }

  saveName() {
    this.isEditingName = false;
    this.classService.updateUserDetails(this.classDetails().id, { name: this.classDetails().name }).subscribe(response => {
      console.log('Klassennamen aktualisiert', response);
    });
  }

  editName() {
    this.isEditingName = true;
  }

  saveEndDate() {
    this.isEditingEndDate = false;
    this.classService.updateUserDetails(this.classDetails().id, { endDate: this.classDetails().endDate }).subscribe(response => {
      console.log('Enddatum aktualisiert', response);
    });
  }

  editEndDate() {
    this.isEditingEndDate = true;
  }
}
