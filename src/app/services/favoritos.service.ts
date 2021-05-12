import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { Peliculas } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  peliculasStorage:PeliculaDetalle[] = [];
  mensaje:string = "";
  

    constructor(private storage:Storage,  private toast:ToastController) {  }

  async presentToast(message:string) {
    const toast = await this.toast.create({
      message,
      duration: 1500
    });
    toast.present();
  }


  guardarPelicula(pelicula:PeliculaDetalle){
      let existe = false;    

    for(const pelis of this.peliculasStorage){
          if(pelis.id === pelicula.id){
              existe = true;
              break;
    }
  }

    if(existe){
      this.peliculasStorage = this.peliculasStorage.filter(pelis => pelis.id !== pelicula.id) 
      this.mensaje = "Removido de Favoritos";  
      }else{
        this.peliculasStorage.push(pelicula);
        this.mensaje ="Añadido a Favoritos"
      }
      this.presentToast(this.mensaje);
      this.storage.set('peliculas', this.peliculasStorage)

      return !existe;
  
}

async cargarFavoritos(){
  const favoritos = await this.storage.get('peliculas');
  this.peliculasStorage = favoritos || [];

return this.peliculasStorage; 

}

async existeFavoritos(id){
  await this.cargarFavoritos();
 const existe =  this.peliculasStorage.find(pelis => pelis.id === id);
 return (existe)?true:false;
}

/// otra forma
// const existe = this.peliculasStorage.find(pelis => pelis.id === peliculas.id)
// if (!existe){
// this.peliculasStorage.push(pelicula);
//}
// this.storage.set('peliculas', this.peliculasStorage)
}
