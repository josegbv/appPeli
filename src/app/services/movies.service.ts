import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaCredits } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http:HttpClient) { }
  paginaNumero =  0;
  generos;
  

  public ejecutarInstruccion(instruccion:string){
    instruccion = environment.url + instruccion;
    instruccion += "&api_key=" + environment.apiKey +  "&language=es&include_lenguage_image=es";

      return this.http.get(instruccion)
  }

  getFeatures() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;

    let mesFormato;

    if(mes < 10){
      mesFormato = '0' + mes;
    }else{
      mesFormato = mes;
    }

    const inicio = `${hoy.getFullYear()}-${mesFormato}-01`;
    const fin = `${hoy.getFullYear()}-${mesFormato}-${ultimoDia}`;

    return this.ejecutarInstruccion(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}&`)
  
}


getPopulares(){
  this.paginaNumero++
const query =`/discover/movie?sort_by=popularity.desc&page=${this.paginaNumero}`
  return this.ejecutarInstruccion(query)
}

getPeliculasDetalles(id){
  const query = `/movie/${id}?a=1`
  return this.ejecutarInstruccion(query);
}

getActores(id){
  const query = `/movie/${id}/credits?a=1`
  return this.ejecutarInstruccion(query)
}

SearchMovie(busqueda:string){
  const query = `/search/movie?query=${busqueda}`
  return this.ejecutarInstruccion(query)
}

 getGeneros():Promise<any[]>{

  return new Promise(resolve=>{
    return  this.ejecutarInstruccion(`/genre/movie/list?`).subscribe((resp:any) =>{
      this.generos = resp.genres;
      console.log("generos", this.generos);
      resolve(this.generos)
    });;
                  
  })
 
}
}
