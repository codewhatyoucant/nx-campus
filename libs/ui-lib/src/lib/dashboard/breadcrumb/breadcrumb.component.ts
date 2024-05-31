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
  }
}
