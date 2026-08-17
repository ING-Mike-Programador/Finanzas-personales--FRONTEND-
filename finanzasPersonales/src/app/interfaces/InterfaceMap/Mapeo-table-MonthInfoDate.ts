
export class MapeoTableMonthInfo {
  // Método para crear un objeto Date a partir de una cadena de fecha en formato 'dd-mm-yyyy'
  public createDateFromString(dateString: string): Date {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
}
