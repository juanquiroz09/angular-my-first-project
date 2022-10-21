import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';
@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService],
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de zapatilla';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(private _zapatillaService: ZapatillaService) {
    this.zapatillas = new Array();
    this.marcas = new Array();
    this.color = 'yellow';
    this.mi_marca = 'Fila';
  }
  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getZapatillas();
    alert(this._zapatillaService.getTexto());
    this.getMarcas();
  }
  getMarcas() {
    this.zapatillas.forEach((element, index) => {
      if (this.marcas.indexOf(element.marca) < 0) {
        this.marcas.push(element.marca);
      }
    });
    console.log(this.marcas);
  }
  getMarca() {
    alert(this.mi_marca);
  }
  addMarca() {
    this.marcas.push(this.mi_marca);
  }
  borrarMarca(index: number) {
    this.marcas.splice(index, 1);
  }
  onBlur() {
    console.log('On blur ejecutado');
  }
}
