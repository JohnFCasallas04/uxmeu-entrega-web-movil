import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Labels from '../../assets/labels.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  labels: any = Labels;

  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/auth']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
