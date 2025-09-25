import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent implements OnInit {
  labels: any[] = [];
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
    
    if (field === 'correo') {
      this.correoValue = value;
    }
  }

  clearInput(field: string): void {
    const input = document.getElementById(field) as HTMLInputElement;
    if (input) {
      input.value = '';
      input.focus();
      
      if (field === 'correo') {
        this.correoValue = '';
      }
    }
  }

  navigateBack(): void {
    this.router.navigate(['/auth']);
  }
}
