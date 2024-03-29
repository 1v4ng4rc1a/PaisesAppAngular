import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {


  termino: string = "";
  hayError : boolean = false; 
  paises : Country[] = [];

  constructor( private paisService: PaisService) { }

  buscar( termino: string){
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPaisPorCapital(this.termino).subscribe(res => {
       console.log(res);
       this.paises = res; 
    }, err => {
      this.hayError = true; 
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false; 
    console.log("sug", termino);
  }

}
