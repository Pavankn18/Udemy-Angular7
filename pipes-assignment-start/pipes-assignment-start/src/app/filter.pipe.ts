import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, propName: string, filterValue): any {
    if ( value.length === 0 || filterValue.length === 0) {
      return value;
    }

    const filteredValues: any[] = [];

    for ( const item of value) {
      if (item[propName] === filterValue) {
        filteredValues.push(item);
      }
    }

    return filteredValues;

  }

}
