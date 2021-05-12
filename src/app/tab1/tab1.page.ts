import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Peliculas, RespuestaMDB } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Peliculas [] =  [];
  populares:Peliculas [] =  [];
 
  constructor(private MoviesService:MoviesService) {}

ngOnInit(){
  this.MoviesService.getFeatures().subscribe((resp:RespuestaMDB) =>{
    this.peliculasRecientes = resp.results;
  });

 this.getPopulares();
}

cargandoPagina(){
this.getPopulares();
}

getPopulares(){
  this.MoviesService.getPopulares().subscribe((resp:RespuestaMDB) =>{
    const arr = [...this.populares, ...resp.results];
    this.populares = arr;
  })
}
}
