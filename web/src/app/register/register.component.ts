import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  labels: any[] = [];
  nombresValue: string = '';
  apellidosValue: string = '';
  correoValue: string = '';
  passwordValue: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadLabels();
  }

  async loadLabels() {
    try {
      const response = await fetch('/assets/labels.json');
      this.labels = await response.json();
    } catch (error) {
      console.error('Error loading labels:', error);
    }
  }

  onInputChange(event: Event, field: string): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    
    switch (field) {
      case 'nombres':
        this.nombresValue = value;
        break;
      case 'apellidos':
        this.apellidosValue = value;
        break;
      case 'correo':
        this.correoValue = value;
        break;
      case 'password':
        this.passwordValue = value;
        break;
    }
  }

  clearInput(field: string): void {
    const input = document.getElementById(field) as HTMLInputElement;
    if (input) {
      input.value = '';
      input.focus();
      
      switch (field) {
        case 'nombres':
          this.nombresValue = '';
          break;
        case 'apellidos':
          this.apellidosValue = '';
          break;
        case 'correo':
          this.correoValue = '';
          break;
        case 'password':
          this.passwordValue = '';
          break;
      }
    }
  }

  navigateBack(): void {
    this.router.navigate(['/']);
  }
}
