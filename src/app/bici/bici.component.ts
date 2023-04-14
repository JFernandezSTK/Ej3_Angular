import { Component } from '@angular/core';
import { bicicleta } from '../_modelo/bicicleta';
@Component({
  selector: 'app-bici',
  templateUrl: './bici.component.html',
  styleUrls: ['./bici.component.css']
})
export class BiciComponent {
  bici:bicicleta
  dif:number=0
  info:string=""

    constructor(){
      this.bici = new bicicleta("","",0,0,0,false)
    }

    ngOnInit():void{}

    mostrarInfo(){
      this.info=this.bici.Muestrainfo()
    }
}
