import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowPrincipalComponent } from './slideshow-principal/slideshow-principal.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { SlideShowParesComponent } from './slide-show-pares/slide-show-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [SlideshowPrincipalComponent, SlideShowPosterComponent, SlideShowParesComponent, DetalleComponent],
  imports: [
    CommonModule,
    IonicModule, 
    PipesModule
  ],
  exports:[SlideshowPrincipalComponent, SlideShowPosterComponent, SlideShowParesComponent, DetalleComponent],
})
export class ComponentModule { }
