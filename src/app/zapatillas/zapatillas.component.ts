import {Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
public titulo: string = "Componente de zapatilla"
public zapatillas: Array<Zapatilla>;
public marcas: String[];
public color: string;
public mi_marca: string;

constructor(){
  this.zapatillas = [
       new Zapatilla('Nike Airmax','Nike','Rojas', 40, true),
       new Zapatilla('Reebok Classic','Reebok','Blanco', 80, true),
       new Zapatilla('Reebok Spartarn','Reebok','Negra', 180, false),
       new Zapatilla('Nike Runner MD','Nike','Negra', 60, true),
       new Zapatilla('Adidas Yezzy','Adidas','Gris', 180, false),

  ];
  this.marcas = new Array();
  this.color  = 'yellow';
  this.mi_marca = 'Fila';
}
ngOnInit(): void {
  console.log(this.zapatillas)
  this.getMarcas();
}
getMarcas(){
  this.zapatillas.forEach((element, index)=>{
    if(this.marcas.indexOf(element.marca)<0){
      this.marcas.push(element.marca);
    }
  
  });
  console.log(this.marcas);
}
getMarca(){
  alert(this.mi_marca);
}
addMarca(){
  this.marcas.push(this.mi_marca);
}
borrarMarca (index: number){
  this.marcas.splice(index, 1);
}
onBlur(){
  console.log("On blur ejecutado");
}
}