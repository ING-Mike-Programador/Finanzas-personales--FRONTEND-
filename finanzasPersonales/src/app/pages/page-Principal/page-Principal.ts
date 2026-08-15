import { Component, signal } from '@angular/core';
import { InterfaceTableMonthInfo } from './../../interfaces/interface-table-MonthInfo';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { MapeoTableMonthInfo } from '../../interfaces/InterfaceMap/Mapeo-table-MonthInfoDate';

@Component({
  selector: 'app-page-principal',
  imports: [CurrencyPipe, DatePipe, NgClass],
  templateUrl: './page-Principal.html',
})
export default class PagePrincipal {
  mapeoFecha = new MapeoTableMonthInfo();

  month = signal(new Date().getMonth()); // agosto (los meses van de 0 a 11)
  year = signal(new Date().getFullYear());
  daysInMonth = signal(new Date(this.year(), this.month() + 1, 0).getDate());

  dayActual = signal(new Date());

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
    'Diciembre',
  ];

  monthInfo = signal<InterfaceTableMonthInfo[]>([
    {
      date: this.mapeoFecha.createDateFromString('01-08-2026'),
      expenses: 1200,
      income: 2500,
      total: 1300,
    },
    {
      date: this.mapeoFecha.createDateFromString('02-08-2026'),
      expenses: 500,
      income: 2000,
      total: 1500,
    },
    {
      date: this.mapeoFecha.createDateFromString('03-08-2026'),
      expenses: 0,
      income: 3000,
      total: 3000,
    },
    {
      date: this.mapeoFecha.createDateFromString('04-08-2026'),
      expenses: 800,
      income: 2200,
      total: 1400,
    },
    {
      date: this.mapeoFecha.createDateFromString('05-08-2026'),
      expenses: 1000,
      income: 2500,
      total: 1500,
    },
    {
      date: this.mapeoFecha.createDateFromString('06-08-2026'),
      expenses: 600,
      income: 1800,
      total: 1200,
    },
    {
      date: this.mapeoFecha.createDateFromString('07-08-2026'),
      expenses: 400,
      income: 2000,
      total: 1600,
    },
    {
      date: this.mapeoFecha.createDateFromString('08-08-2026'),
      expenses: 700,
      income: 2100,
      total: 1400,
    },
    {
      date: this.mapeoFecha.createDateFromString('09-08-2026'),
      expenses: 300,
      income: 1500,
      total: 1200,
    },
    {
      date: this.mapeoFecha.createDateFromString('10-08-2026'),
      expenses: 900,
      income: 2500,
      total: 1600,
    },
    {
      date: this.mapeoFecha.createDateFromString('11-08-2026'),
      expenses: 500,
      income: 2000,
      total: 1500,
    },
    {
      date: this.mapeoFecha.createDateFromString('12-08-2026'),
      expenses: 1000,
      income: 2800,
      total: 1800,
    },
    {
      date: this.mapeoFecha.createDateFromString('13-08-2026'),
      expenses: 600,
      income: 2200,
      total: 1600,
    },
    {
      date: this.mapeoFecha.createDateFromString('14-08-2026'),
      expenses: 750,
      income: 2500,
      total: 1750,
    },
  ]);
  obtnrData(): InterfaceTableMonthInfo[] {
    for (let i = this.monthInfo().length; i < this.daysInMonth(); i++) {
      this.monthInfo().push({
        date: this.mapeoFecha.createDateFromString(`${i + 1}-${this.month() + 1}-${this.year()}`),
        expenses: 0,
        income: 0,
        total: 0,
      });
    }
    return this.monthInfo();
  }
}
