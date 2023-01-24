import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], filterVAlue:string): any {
    return products.filter(p => p.title.includes(filterVAlue))
  }

}