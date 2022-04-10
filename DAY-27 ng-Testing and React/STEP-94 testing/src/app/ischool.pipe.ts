import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ischool',
})
export class ischoolPipe implements PipeTransform {
  transform(...args: any[]) {
    return args[1] + args[0];
  }
}
