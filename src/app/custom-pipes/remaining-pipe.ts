import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {
  transform(input: string, maxLength = 100) {
    return maxLength - input.length;
  }
}
