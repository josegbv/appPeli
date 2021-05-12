import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {
  @Input() peliculasPopulares;
  @Output() cargarPagina = new EventEmitter();
  slideOpts = {
    slidesPerView: 3.3,
    freeMode:true 
  };
  constructor( private modalController: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.cargarPagina.emit();
  }

  async verDetalle(id){
      const modal = await this.modalController.create({
        component: DetalleComponent,
        componentProps: {
          id
        }
      })
      return await modal.present();
  }

}
