import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormats'
})
export class NumberFormatsPipe implements PipeTransform {

  transform(value: number): string {
    const binary = value.toString(2);
    const hexadecimal = value.toString(16);
    const octal = value.toString(8);

    return `Binary: ${binary}, Hexadecimal: ${hexadecimal}, Octal: ${octal}`;
  
  }

}
