import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Pipe({
  name: 'filterBrandPipe'
})

export class FilterBrandPipePipe implements PipeTransform {

  transform(value: Brand[], filterBrandText:string): Brand[] {
    filterBrandText=filterBrandText?filterBrandText.toLocaleLowerCase():"";

    return filterBrandText ? (value.filter((b:Brand) =>
    b.name.toLocaleLowerCase().indexOf(filterBrandText) !== -1 )) : value;
 }}
