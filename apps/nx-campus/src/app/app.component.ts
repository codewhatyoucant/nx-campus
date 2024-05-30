import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
export class AppComponent {
  constructor(private authService: AuthService) {
    console.log('isAuthenticated', this.authService.isAuthenticated());
  }
  title = 'nx-campus';
}
