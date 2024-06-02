import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLibComponent, BreadcrumbComponent } from '@nx-campus/ui-lib';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, AdminLibComponent],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css',
})
export class LessonsComponent { }
