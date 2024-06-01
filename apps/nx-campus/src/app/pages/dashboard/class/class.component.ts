import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumDto, CourseDto, CurriculumService } from '../../../services/curriculum.service';
import { CourseComponent, BreadcrumbComponent } from '@nx-campus/ui-lib';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [CommonModule, CourseComponent, BreadcrumbComponent],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css',
})
export class ClassComponent {
  curriclumService = inject(CurriculumService);
  curriculumData = signal<CurriculumDto[]>([]);
  courses = signal<CourseDto[]>([]);

  curriculumDataEffect = effect(() => {
    this.curriclumService.getCurriculum().subscribe
      ((data) => {
        console.log("CurriculumData", data);
        this.curriculumData.set(data)
        this.courses.set(data[0].courses);
      });
  })

  constructor() {
    console.log("Courses", this.courses);
  }
}
