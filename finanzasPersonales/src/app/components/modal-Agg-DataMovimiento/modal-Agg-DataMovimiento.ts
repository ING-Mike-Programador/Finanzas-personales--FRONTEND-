import { Component, signal } from '@angular/core';
@Component({
  selector: 'modal-agg-data-movimiento',
  imports: [],
  templateUrl: './modal-Agg-DataMovimiento.html',
})
export class ModalAggDataMovimiento {
  dia = signal(String(new Date().getDate()).padStart(2, '0'));
  mes = signal(String(new Date().getMonth() + 1).padStart(2, '0'));
  año = signal(new Date().getFullYear());
  fecha = signal(new Date());
}
