import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  labels: any[] = [];
  currentPasswordValue: string = '';
  newPasswordValue: string = '';
  confirmPasswordValue: string = '';

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
      case 'currentPassword':
        this.currentPasswordValue = value;
        break;
      case 'newPassword':
        this.newPasswordValue = value;
        break;
      case 'confirmPassword':
        this.confirmPasswordValue = value;
        break;
    }
  }

  clearInput(field: string): void {
    const input = document.getElementById(field) as HTMLInputElement;
    if (input) {
      input.value = '';
      input.focus();
      
      switch (field) {
        case 'currentPassword':
          this.currentPasswordValue = '';
          break;
        case 'newPassword':
          this.newPasswordValue = '';
          break;
        case 'confirmPassword':
          this.confirmPasswordValue = '';
          break;
      }
    }
  }

  navigateBack(): void {
    this.router.navigate(['/account-manage']);
  }

  saveChanges(): void {
    // Validar que las contraseñas coincidan
    if (this.newPasswordValue !== this.confirmPasswordValue) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Validar que todos los campos estén llenos
    if (!this.currentPasswordValue || !this.newPasswordValue || !this.confirmPasswordValue) {
      alert('Por favor complete todos los campos');
      return;
    }

    // Lógica para cambiar contraseña
    console.log('Cambiando contraseña:', {
      currentPassword: this.currentPasswordValue,
      newPassword: this.newPasswordValue
    });
    
    // Aquí podrías agregar la lógica para enviar los datos al backend
    alert(this.labels[0]?.MsjGuardado || 'Contraseña cambiada con éxito!');
    
    // Volver al componente de gestión de cuenta
    this.router.navigate(['/account-manage']);
  }
}
