import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
   
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value == "0001-01-01T00:00:00")
      return ''
    
    return super.transform(value, "dd/MM/y");
  }
}