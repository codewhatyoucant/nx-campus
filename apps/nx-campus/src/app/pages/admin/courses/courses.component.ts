import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@nx-campus/ui-lib';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent { }
