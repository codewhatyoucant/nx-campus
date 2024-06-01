import { Component, effect, inject, signal } from '@angular/core';
import { DashboardService, ClassDto } from '../../services/dashboard.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  dashboardService = inject(DashboardService);
  authService = inject(AuthService);
  classData = signal<ClassDto[]>([]);


  dashboardDataEffect = effect(() => {
    this.dashboardService.getClass().subscribe
      ((data) => {
        this.classData.set(data)
        console.log("ClassData", data);
      });
  })
};
