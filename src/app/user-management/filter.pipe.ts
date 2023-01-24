import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], filterValue:string): any {
    return users.filter(u => u.name.includes(filterValue))
  }

}