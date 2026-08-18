import { Component, signal } from '@angular/core';
import { TablaInfoMensual } from '../../components/tablaInfoMensual/tablaInfoMensual';
import { ModalAggDataMovimiento } from '../../components/modal-Agg-DataMovimiento/modal-Agg-DataMovimiento';
import { ModalAggFuenteMonetario } from "../../components/modal-Agg-FuenteMonetario/modal-Agg-FuenteMonetario";

@Component({
  selector: 'app-page-principal',
  imports: [TablaInfoMensual, ModalAggDataMovimiento, ModalAggFuenteMonetario],
  templateUrl: './page-Principal.html',
})
export default class PagePrincipal {
  dayActual = signal(new Date()); // obtener la fecha actual
  month = signal(new Date().getMonth()); // obtener el mes actual (los meses van de 0 a 11)
  year = signal(new Date().getFullYear()); // obtener el año actual
  daysInMonth = signal(new Date(this.year(), this.month() + 1, 0).getDate()); // obtener el número de días en el mes actual

  // Array con los nombres de los meses
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
}
