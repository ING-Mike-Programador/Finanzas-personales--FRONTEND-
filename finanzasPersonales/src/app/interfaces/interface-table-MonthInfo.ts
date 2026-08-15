export interface InterfaceTableMonthInfo {
  date: Date;      // Fecha en formato "DD-MM-YYYY"
  expenses: number;  // Gastos del día
  income: number;    // Ingresos del día
  total: number;     // Total del día (Totla anterior + ingresos - gastos)
}
