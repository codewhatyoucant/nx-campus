import { Component, Input, OnInit, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDto, DashboardService, LessonDto } from '../../../services/dashboard.service';
import { CourseDetailComponent } from '@nx-campus/ui-lib';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, CourseDetailComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {
  constructor() {
    this.courseDataEffect = effect(() => {
      this.dashboardService.getCourse(this.id).subscribe
        ((data) => {
          console.log("CourseData", data);
          this.courseData.set(data)
        });
    })

  }
  @Input() id!: string;
  dashboardService = inject(DashboardService);
  courseData = signal({});
  courseDataEffect: any;

  ngOnInit(): void {


  }
}
