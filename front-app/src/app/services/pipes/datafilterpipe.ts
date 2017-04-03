/**
 * Created by iZel on 4/3/17.
 */
import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(array: any[], query: string,key :string): any {
    if (query) {
      return _.filter(array, row=>row[key].indexOf(query) > -1);
    }
    return array;
  }
}

