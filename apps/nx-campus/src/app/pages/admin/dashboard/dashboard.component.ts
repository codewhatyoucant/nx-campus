import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLibComponent, BreadcrumbComponent } from '@nx-campus/ui-lib';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, AdminLibComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent { }
