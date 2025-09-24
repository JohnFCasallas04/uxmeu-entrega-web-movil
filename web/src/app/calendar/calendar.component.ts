import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface CalendarDay {
  number: number;
  isToday: boolean;
  isOtherMonth: boolean;
  isSelected: boolean;
  isHoliday: boolean;
  date: Date;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  labels: any[] = [];
  currentDate: Date = new Date();
  currentMonthYear: string = '';
  calendarDays: CalendarDay[] = [];
  selectedDay: CalendarDay | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadLabels();
    this.updateCalendar();
  }

  async loadLabels() {
    try {
      const response = await fetch('/assets/labels.json');
      this.labels = await response.json();
    } catch (error) {
      console.error('Error loading labels:', error);
    }
  }

  goBack(): void {
    this.router.navigate(['/principal-menu']);
  }

  addCalendar(): void {
    console.log('Añadiendo nuevo calendario');
    // Aquí se implementaría la lógica para añadir un calendario
  }

  saveHoliday(): void {
    if (this.selectedDay) {
      console.log('Guardando festivo para:', this.selectedDay.date);
      this.selectedDay.isHoliday = true;
      // Aquí se implementaría la lógica para guardar el festivo
    }
  }

  deleteHoliday(): void {
    if (this.selectedDay && this.selectedDay.isHoliday) {
      console.log('Eliminando festivo para:', this.selectedDay.date);
      this.selectedDay.isHoliday = false;
      // Aquí se implementaría la lógica para eliminar el festivo
    }
  }

  previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateCalendar();
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateCalendar();
  }

  selectDay(day: CalendarDay): void {
    // Deseleccionar día anterior
    if (this.selectedDay) {
      this.selectedDay.isSelected = false;
    }
    
    // Seleccionar nuevo día
    day.isSelected = true;
    this.selectedDay = day;
  }

  private updateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    // Actualizar el texto del mes y año
    this.currentMonthYear = this.currentDate.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });

    // Obtener el primer día del mes y cuántos días tiene
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Obtener el día de la semana del primer día (0 = domingo, 1 = lunes, etc.)
    let startDayOfWeek = firstDay.getDay();
    // Convertir domingo (0) a posición 6 para que lunes sea 0
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    // Limpiar días anteriores
    this.calendarDays = [];

    // Añadir días del mes anterior (para completar la primera semana)
    const prevMonth = new Date(year, month - 1, 0);
    const daysInPrevMonth = prevMonth.getDate();
    
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const dayNumber = daysInPrevMonth - i;
      this.calendarDays.push({
        number: dayNumber,
        isToday: false,
        isOtherMonth: true,
        isSelected: false,
        isHoliday: false,
        date: new Date(year, month - 1, dayNumber)
      });
    }

    // Añadir días del mes actual
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDayDate = new Date(year, month, day);
      const isToday = currentDayDate.toDateString() === today.toDateString();
      
      this.calendarDays.push({
        number: day,
        isToday: isToday,
        isOtherMonth: false,
        isSelected: false,
        isHoliday: this.isHoliday(currentDayDate),
        date: currentDayDate
      });
    }

    // Completar la última semana con días del mes siguiente
    const totalDays = this.calendarDays.length;
    const remainingDays = 42 - totalDays; // 6 semanas * 7 días = 42
    
    for (let day = 1; day <= remainingDays; day++) {
      this.calendarDays.push({
        number: day,
        isToday: false,
        isOtherMonth: true,
        isSelected: false,
        isHoliday: false,
        date: new Date(year, month + 1, day)
      });
    }
  }

  private isHoliday(date: Date): boolean {
    // Aquí se implementaría la lógica para verificar si una fecha es festivo
    // Por ahora, marquemos algunos días como ejemplo
    const day = date.getDate();
    const month = date.getMonth();
    
    // Ejemplo: 1 de enero, 25 de diciembre
    return (month === 0 && day === 1) || (month === 11 && day === 25);
  }
}
