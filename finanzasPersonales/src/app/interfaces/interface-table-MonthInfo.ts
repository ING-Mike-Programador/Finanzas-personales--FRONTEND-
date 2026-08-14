export interface InterfaceTableMonthInfo {
  date: string;      // Fecha en formato "DD-MM-YYYY"
  expenses: number;  // Gastos del día
  income: number;    // Ingresos del día
  total: number;     // Total del día (Totla anterior + ingresos - gastos)
}
