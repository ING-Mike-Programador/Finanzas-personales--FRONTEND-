import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-page-principal',
  imports: [],
  templateUrl: './page-Principal.html',
})
export default class PagePrincipal {
  month = signal(new Date().getMonth()); // agosto (los meses van de 0 a 11)
  year = signal(new Date().getFullYear());
  daysInMonth = signal(new Date(this.year(), this.month() + 1, 0).getDate());
  days = signal(Array.from({ length: this.daysInMonth() }, (_, i) => i + 1));

  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]
}
