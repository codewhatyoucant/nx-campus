import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@nx-campus/ui-lib';

@Component({
  selector: 'app-curriculums',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './curriculums.component.html',
  styleUrl: './curriculums.component.css',
})
export class CurriculumsComponent { }
