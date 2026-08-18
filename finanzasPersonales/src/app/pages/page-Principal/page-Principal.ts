import { Component, signal } from '@angular/core';
import { TablaInfoMensual } from '../../components/tablaInfoMensual/tablaInfoMensual';
import { ModalAggDataMovimiento } from '../../components/modal-Agg-DataMovimiento/modal-Agg-DataMovimiento';

@Component({
  selector: 'app-page-principal',
  imports: [TablaInfoMensual, ModalAggDataMovimiento],
  templateUrl: './page-Principal.html',
})
export default class PagePrincipal {

}
