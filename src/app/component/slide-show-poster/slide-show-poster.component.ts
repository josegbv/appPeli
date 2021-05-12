import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';
import { Peliculas } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit {
@Input() peliculasCartelera:Peliculas;

slideOpts = {
  slidesPerView: 3.3,
  freeMode:true
};
  constructor(private ModalController:ModalController) { }

  ngOnInit() {}

  async verDetalle(id:string){
      const modal = await this.ModalController.create({
        component:DetalleComponent,
        componentProps:{
          id
        }
      })

     return await modal.present()
     
  }

}
