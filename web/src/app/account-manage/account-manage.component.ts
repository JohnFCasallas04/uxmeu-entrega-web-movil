import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.css']
})
export class AccountManageComponent implements OnInit {
  labels: any[] = [];
  nombresValue: string = '';
  apellidosValue: string = '';
  correoValue: string = '';

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
      }
    }
  }

  navigateBack(): void {
    this.router.navigate(['/principal-menu']);
  }

  changePassword(): void {
    // Navegar al componente de cambiar contraseña (change-pass)
    this.router.navigate(['/change-pass']);
  }

  saveChanges(): void {
    // Lógica para guardar cambios
    console.log('Guardando cambios:', {
      nombres: this.nombresValue,
      apellidos: this.apellidosValue,
      correo: this.correoValue
    });
    // Aquí podrías agregar la lógica para enviar los datos al backend
    alert(this.labels[0]?.MsjGuardado || 'Guardado con éxito!');
  }

  cancel(): void {
    // Volver al menú principal
    this.router.navigate(['/principal-menu']);
  }
}
