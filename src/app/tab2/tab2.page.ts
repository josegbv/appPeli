import { Component, ViewChild} from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Result, BusquedaPelicula } from '../interfaces/interfaces';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { DetalleComponent } from '../component/detalle/detalle.component';

  @Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
  })
  export class Tab2Page {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


    ideas:string[] = ["Mujer maravilla", "Xmen", "Crepusculo", "Avengers"];
    textoBuscar = "";
    peliculasBuscadas = [];
    buscando = false;
    valor:string = "";
    

    constructor(private MoviesService:MoviesService, private ModalController:ModalController) {}
  
    buscar(event){
        this.valor = event.detail.value;
    
      console.log(this.valor);
      if(this.valor.length === 0 ){
        this.buscando = false;
        this.textoBuscar = "";
        return;
      }

      this.buscando =  true;

      this.MoviesService.SearchMovie(this.valor).subscribe((resp:BusquedaPelicula) =>{
        console.log("busqueda de las peliculas", resp)
        this.peliculasBuscadas =  resp.results;
        this.buscando = false;
      })
    }

   async detalle(id){
      
        const modal = await this.ModalController.create({
          component:DetalleComponent,
          componentProps:{
            id
          }
        })
  
      modal.present()
       
    }


    }
    
  
     
  
  
