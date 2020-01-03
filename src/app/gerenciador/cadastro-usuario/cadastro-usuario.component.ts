import { Component, OnInit } from '@angular/core';
import { Gertbusuario } from '../core/model';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  usuario = new Gertbusuario();

  constructor() { }

  ngOnInit() {
  }

}
