import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {
  transform(startDate: string, endDate: string): string {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffHours = Math.ceil(diffTime / (1000 * 60)) / 60;
    const [hours, minsDecimal] = diffHours.toString().split('.');
    const mins = +`.${minsDecimal}`;
    let result: string;
    if (+hours) {
      result = `${hours} hour${+hours > 1 ? 's' : ''}`;
    }
    if (mins) {
      const minsString = `${mins * 60} mins`;
      result = result ? `${result} ${minsString}` : minsString;
    }
    return result;
  }
}
