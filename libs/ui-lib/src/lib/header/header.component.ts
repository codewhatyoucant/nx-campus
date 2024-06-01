import { Component, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private elmRef: ElementRef
  ) {

    document.addEventListener('click', (e) => {
      if (!this.elmRef.nativeElement.contains(e.target)) {
        const menu = this.elmRef.nativeElement.querySelector('#menu');
        if (menu) {
          menu.classList.add('hidden');
        }
      }
    });
  }
  @Input() isLoggedIn: boolean = false;
  toogleMenu() {
    this.elmRef.nativeElement.querySelector('#menu').classList.toggle('hidden');
  }
}
