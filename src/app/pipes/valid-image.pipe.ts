import { Pipe, PipeTransform } from '@angular/core';
import { Util } from '../util';

@Pipe({
  name: 'validImage'
})
export class ValidImagePipe implements PipeTransform {

  util: Util = new Util();

  transform(value: any, args?: any): any {
    let imagePath = 'assets/img/notfound.png';

    if(value.img_url) {
      imagePath = this.util.storageUrl + '/' + value.code;
    }

    return imagePath;
  }

}
