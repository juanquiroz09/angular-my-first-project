import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

export class ZapatillaService {
public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 40, true),
      new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
      new Zapatilla('Reebok Spartarn', 'Reebok', 'Negra', 180, false),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negra', 60, true),
      new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),
    ];
  }

  getTexto(){
    return "Hola mundo desde un servicio"
  }
  getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
  }
}
