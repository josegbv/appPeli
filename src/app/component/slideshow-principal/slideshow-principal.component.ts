import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';
import { Peliculas } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-principal',
  templateUrl: './slideshow-principal.component.html',
  styleUrls: ['./slideshow-principal.component.scss'],
})
export class SlideshowPrincipalComponent implements OnInit {

  @Input() peliculasRecientes:Peliculas[];

  slideOpts = {
    slidesPerView: 0.9,
    freeMode:true
  };


  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async verDetalle(id:string) {
    const modal = await this.modalController.create({
      component: DetalleComponent,
      cssClass: 'my-custom-class',
      componentProps:{ id }
    });
    return await modal.present();
  }


}
