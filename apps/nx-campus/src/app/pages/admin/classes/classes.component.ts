import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@nx-campus/ui-lib';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent { }
