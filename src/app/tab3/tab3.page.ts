import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../services/favoritos.service';
import { MoviesService } from '../services/movies.service';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  favoritos = [];
  generos:Genre[] = [];
  favoritoPorGenero = []


  constructor(private FavoritosService:FavoritosService, private MoviesService:MoviesService) {

    
  }


  async ngOnInit(){
   this.generos =  await this.MoviesService.getGeneros();

  this.favoritos = await this.FavoritosService.cargarFavoritos();

     this.peliculasGenero( this.generos, this.favoritos)
  }



  

  peliculasGenero( generos:Genre[], favoritos:PeliculaDetalle[]){

    this.favoritoPorGenero = [];

    generos.forEach(genero => {
        this.favoritoPorGenero.push({
          genero: genero.name,
          pelis:  favoritos.filter(peli =>{
            return peli.genres.find(genre => genre.id === genero.id);
          })
        });
    });

console.log("facoreisnsdd", this.favoritoPorGenero)
  
}
}
