import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, LayoutComponent, FooterComponent, ContentComponent } from '@nx-campus/ui-lib';


@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, LayoutComponent, FooterComponent, ContentComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nx-campus';
}
