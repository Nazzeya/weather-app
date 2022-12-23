import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(kelvins: any, ...args: any[]): number {
    return kelvins-273.15;
  }

}
