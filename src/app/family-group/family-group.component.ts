import { Component } from '@angular/core';
import { Router } from '@angular/router';
import labels from '../../assets/labels.json';

@Component({
  selector: 'app-family-group',
  templateUrl: './family-group.component.html',
  styleUrls: ['./family-group.component.css']
})
export class FamilyGroupComponent {
  labels = labels[0];
  newMemberEmail: string = '';

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/principal-menu']);
  }

  deleteIntegrant() {
    // Lógica para eliminar integrante
    console.log('Eliminar integrante seleccionado');
  }

  addMember() {
    if (this.newMemberEmail.trim()) {
      // Lógica para añadir nuevo integrante
      console.log('Añadir integrante:', this.newMemberEmail);
      this.newMemberEmail = '';
    }
  }
}
