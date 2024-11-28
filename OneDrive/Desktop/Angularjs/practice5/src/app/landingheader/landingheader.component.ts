import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landingheader',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './landingheader.component.html',
  styleUrl: './landingheader.component.css'
})
export class LandingheaderComponent {

  router = inject(Router);
}
