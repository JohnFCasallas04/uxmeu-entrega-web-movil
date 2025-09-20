import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-menu',
  templateUrl: './principal-menu.component.html',
  styleUrls: ['./principal-menu.component.css']
})
export class PrincipalMenuComponent implements OnInit {
  labels: any[] = [];

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

  navigateToGestionCuenta(): void {
    // TODO: Implementar navegación a gestión de cuenta
    console.log('Navegando a Gestión de Cuenta');
  }

  navigateToGestionGrupos(): void {
    // TODO: Implementar navegación a gestión de grupos familiares
    console.log('Navegando a Gestión de Grupos Familiares');
  }

  navigateToGestionCalendario(): void {
    // TODO: Implementar navegación a gestión de calendario
    console.log('Navegando a Gestión de Calendario');
  }

  logout(): void {
    // Navegar de vuelta al home o auth
    this.router.navigate(['/']);
  }
}
