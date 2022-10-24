import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
    this.fecha = Date();
    this.new_user = {
      name: '',
      job: '',
    };
  }

  ngOnInit(): void {
    this.cargaUsuario();
  }
  cargaUsuario() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      (result) => {
        this.user = result.data;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
