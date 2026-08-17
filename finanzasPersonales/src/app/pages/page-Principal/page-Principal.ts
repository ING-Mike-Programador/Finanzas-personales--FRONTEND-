import { Component, signal } from '@angular/core';
import { TablaInfoMensual } from '../../components/tablaInfoMensual/tablaInfoMensual';

@Component({
  selector: 'app-page-principal',
  imports: [TablaInfoMensual],
  templateUrl: './page-Principal.html',
})
export default class PagePrincipal {}
