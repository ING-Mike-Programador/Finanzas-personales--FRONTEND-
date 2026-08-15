export class MapeoTableMonthInfo {
public createDateFromString(dateString: string): Date {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
}
