import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
import { filter } from 'rxjs';


@Component({
  selector: 'lib-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  providers: [RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs!: Array<{ label: string; url: string }>;
  constructor(private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)).subscribe(event => {
          this.breadcrumbs = [];
          let currentRoute = this.route.root, url = "";
          do {
            const childrenRoutes = currentRoute.children;
            // currentRoute = null;
            childrenRoutes.forEach(route => {

              if (route.outlet === "primary") {
                const routeSnapshot = route.snapshot;
                url += "/" + routeSnapshot.url.map(segment => segment.path).join("/");
                this.breadcrumbs.push({
                  label: route.snapshot.data['breadCrum'],
                  url: url
                });
                currentRoute = route;
              }
            });
          } while (currentRoute);
        });
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      console.log(event);
    });
  }
}
