export class bicicleta {
    color:string=""
    marca:string=""
    velocidad:number=0
    pinones:number=0
    platos:number=0
    electrica:boolean=false
    texto:string=""

    constructor(color:string,marca:string,velocidad:number,pinones:number,platos:number,electrica:boolean){
        this.color=color
        this.velocidad=velocidad
        this.pinones=pinones
        this.platos=platos
        this.marca=marca
        this.electrica=electrica
    }

    acelerar(velocidad:number){
        this.velocidad += velocidad
    }

    frenar(velocidad:number){
        this.velocidad -= velocidad
    }

    Muestrainfo():string{
        this.texto="Color de la bici "+this.color+", Su marca es "+this.marca+",Alcanza una velocidad de "+this.velocidad+", tiene el siguente numero de piñones "+this.pinones+", con los siguientes platos "+this.platos+", la bicicleta "+(this.electrica?"Si":"No")+" es electrica"
        return this.texto
      }


}