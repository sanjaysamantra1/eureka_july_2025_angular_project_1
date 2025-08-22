import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
  // pure: false
})
export class MySortPipe implements PipeTransform {

  transform(arr: any) {
    console.log('Sort pipe')
    return arr.sort((a: number, b: number) => a - b);
  }

}
