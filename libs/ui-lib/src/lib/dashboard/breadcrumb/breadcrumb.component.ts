import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
import { distinctUntilChanged, filter } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

export interface IBreadCrumb {
  label: string;
  url: string;
}[]

@Component({
  selector: 'lib-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})

export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.breadCrumpBuilder(this.activatedRoute.root, '', []);
  }


  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), distinctUntilChanged()
    ).subscribe(() => {
      this.breadcrumbs = this.breadCrumpBuilder(this.activatedRoute.root, '', []);
    })
  }

  breadCrumpBuilder(route: ActivatedRoute, url: string, breadcrumbs: Array<{ label: string, url: string }> = []): IBreadCrumb[] {
    const children: ActivatedRoute[] = route.children;
    console.log("Children: ", children)
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      return this.breadCrumpBuilder(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
