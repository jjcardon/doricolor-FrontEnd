import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private router: Router) {
  }

  redirectToHome():void {
    this.router.navigate(['/home'])
  }

  redirectToShipmentReport(): void {
    this.router.navigate(['/shipment-report'])
  }

}
