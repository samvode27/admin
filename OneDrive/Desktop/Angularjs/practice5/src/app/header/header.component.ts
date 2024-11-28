import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  router = inject(Router);

  isDropdownOpen = true;

  updateProfile(): void {
    this.router.navigateByUrl("profile");
  }

  logout(): void {
    this.router.navigateByUrl("login");
  }
}
