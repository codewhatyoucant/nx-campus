import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent, LayoutComponent, FooterComponent, ContentComponent } from '@nx-campus/ui-lib';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, LayoutComponent, FooterComponent, ContentComponent, HttpClientModule],
  providers: [AuthService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLoggedIn = signal<boolean>(false);
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn.set(this.authService.isAuthenticated());
      }
    });
  }

  title = 'nx-campus';
}
