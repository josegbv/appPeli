import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDetalle, RespuestaCredits } from 'src/app/interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';
import { Cast, Crew } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
  export class DetalleComponent implements OnInit {

    @Input() id;
    peliculas:PeliculaDetalle = {};
    oculto:number = 150;
    actores:Cast[]= [];
    slideOptsActores = {
        slidesPerView: 3.3,
        freeMode:true
    }

    estrella = "star-outline";
    

    constructor(private MoviesService:MoviesService,
      private ModalController:ModalController, private Favorito:FavoritosService) { }


     ngOnInit() {

      this.MoviesService.getPeliculasDetalles(this.id).subscribe(resp =>{
        this.peliculas = resp;
      })  

      this.MoviesService.getActores(this.id).subscribe((resp:RespuestaCredits) =>{
        this.actores = resp.cast;
      })

      this.Favorito.existeFavoritos(this.id).then(e => this.estrella = (e) ? 'star':'star-outline');
      

     }

     regresar(){
       this.ModalController.dismiss();
     }
      
      favorito(){ 
       const existe =  this.Favorito.guardarPelicula(this.peliculas);
        this.estrella = (existe) ? "star": "star-outline"; 
      }

      

  }
