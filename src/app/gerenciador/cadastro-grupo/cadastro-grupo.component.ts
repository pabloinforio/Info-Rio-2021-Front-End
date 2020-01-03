import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../core/model';

@Component({
  selector: 'app-cadastro-grupo',
  templateUrl: './cadastro-grupo.component.html',
  styleUrls: ['./cadastro-grupo.component.css']
})
export class CadastroGrupoComponent implements OnInit {
  grupo = new Grupo();

  constructor() { }

  ngOnInit() {
  }

}
