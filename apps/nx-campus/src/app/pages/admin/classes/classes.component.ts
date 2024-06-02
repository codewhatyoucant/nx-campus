import { Component, effect, inject, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminClassesComponent, AdminLibComponent, BreadcrumbComponent } from '@nx-campus/ui-lib';
import { ClassService } from '../../../services/class.service'; // Import the ClassService class
import { Class } from '../../../models/class.model'; // Import the Class interface


@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, AdminClassesComponent, AdminLibComponent],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent { 
  classService = inject(ClassService);
  classList = signal<any[]>([]);
  classDetails = model<Class>(<Class>{});

  getAllClassesEffect = effect(() => {
    this.classService.getAllClasses().subscribe
      ((data) => {
        this.classList.set(data)
      });
  })

  getClassDetails(id: string) {
    this.classService.getClassDetails(id).subscribe
      ((data) => {
        this.classDetails.set(data)
      });
  }

}
