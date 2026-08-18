export interface InterfaceTableMovimientos {
  date: Date;        // Fecha en formato "DD-MM-YYYY"
  tipoMovimiento: movimiento;  // Tipo de movimiento (ingreso o gasto)
  descripcion: string;  // Descripción del movimiento (Opcional)
  totalMovimiento: number;     // Total del día (dinero utilizado en el movimiento)
}
type movimiento = 'ingreso' | 'gasto';
