import { Pipe, PipeTransform } from '@angular/core';

import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contentItems: Content[], search?:string): any {
    if(!contentItems) return null;
    if(!search) {
      return contentItems.filter(c => !c.type);
    } else {
      return contentItems.filter(c => c.type === search);
    }
  }

}
