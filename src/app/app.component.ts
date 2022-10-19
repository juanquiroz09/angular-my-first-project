import { Component} from '@angular/core';
import {Setting} from './models/config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public title = 'Master en javascript y angular';
  public descripcion : string;
  public show_videogames: boolean = true;
  public setting;

  constructor(){
    this.setting = Setting;
    this.title = Setting.titulo;
    this.descripcion = Setting.descripcion;
  }

  coverVideogames(value:any){
    this.show_videogames = value;
  }
}
