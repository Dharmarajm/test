import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the HomeSearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'homeSearch',
})
export class HomeSearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  /*transform(value: string, ...args) {
    return value;
  }*/
  /*transform(items: any, conditions: {[field: string]: any}): Array<any> {
        return items.filter(item => {
            for (let field in conditions) {
                if (item[field] !== conditions[field]) {
                    return false;
                }
            }
            return true;
        });
    }*/
  transform(items: any[], filterQuery: any): any[] {
        if (!filterQuery) return items;
        return items.filter(function(item){ 
            return item.title.toLowerCase().includes(filterQuery.toLowerCase());
        })
  }
  /*transform(data: any[], searchTerm: string): any[] {
    if(!data) return [];
    searchTerm = searchTerm.toUpperCase();
    return data.filter(item => {
      return item.toUpperCase().indexOf(searchTerm) !== -1 
    });
  }*/




}
