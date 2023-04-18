import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePage'
})
export class SlicePagePipe implements PipeTransform {

  transform(value: any[], page: number, pageSize: number): any[] {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return value.slice(start, end);
  }

}
