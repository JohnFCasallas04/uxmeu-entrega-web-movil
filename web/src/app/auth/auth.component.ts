import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Labels from '../../assets/labels.json';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  labels: any = Labels;
  usuarioValue: string = '';
  passwordValue: string = '';

  constructor(private router: Router) {}

  clearInput(inputType: string): void {
    if (inputType === 'usuario') {
      this.usuarioValue = '';
      const usuarioInput = document.getElementById('usuario') as HTMLInputElement;
      if (usuarioInput) {
        usuarioInput.value = '';
        usuarioInput.focus();
      }
    } else if (inputType === 'password') {
      this.passwordValue = '';
      const passwordInput = document.getElementById('password') as HTMLInputElement;
      if (passwordInput) {
        passwordInput.value = '';
        passwordInput.focus();
      }
    }
  }

  onInputChange(event: any, inputType: string): void {
    if (inputType === 'usuario') {
      this.usuarioValue = event.target.value;
    } else if (inputType === 'password') {
      this.passwordValue = event.target.value;
    }
  }

  navigateToRecoverPass(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/recover-pass']);
  }

  navigateBack(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    // Aquí se podría agregar validación de credenciales en el futuro
    this.router.navigate(['/principal-menu']);
  }
}
