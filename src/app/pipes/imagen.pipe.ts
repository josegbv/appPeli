import { Pipe, PipeTransform } from '@angular/core';

const URL =   "https://image.tmdb.org/t/p/";

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img:string, size:string="w500"): string {
    if (!img){
      return "./assets/no-image.jpg";
    }
    const imgUrls = `${URL}${size}${img}`

    return imgUrls;
  }

}
