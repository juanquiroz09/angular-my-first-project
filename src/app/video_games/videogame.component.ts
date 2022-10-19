import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videogame.component.html',
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;
  constructor() {
    this.titulo = 'Componente de Video Juegos';
    this.listado = 'Listado de los mejores títulos';
    //console.log('El componente se ha cargado');
  }
  ngOnInit(): void {
    //console.log('OnInit Ejecutado');
  }
  ngDoCheck(): void {
    //console.log('Do check ejecutado');
  }
  ngOnDestroy(): void {
    //console.log("Destroy ejecutado")
  }
  changeTitle(): void {
    this.titulo = 'Nuevo titulo del componente';
  }

 
}
