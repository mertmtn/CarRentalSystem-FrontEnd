import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterCarText:string): Car[] {
    filterCarText=filterCarText?filterCarText.toLocaleLowerCase():"";

    return filterCarText ? (value.filter((c:Car) =>
    c.carName.toLocaleLowerCase().indexOf(filterCarText) !== -1 ||
    c.brandName.toLocaleLowerCase().indexOf(filterCarText) !== -1 ||
    c.colorName.toLocaleLowerCase().indexOf(filterCarText) !== -1 )) : value;
 }




}



