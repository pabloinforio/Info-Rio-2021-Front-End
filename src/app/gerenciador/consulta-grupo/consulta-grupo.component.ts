import { Component, OnInit } from '@angular/core';
import { Grupo } from '../core/model';

@Component({
  selector: 'app-consulta-grupo',
  templateUrl: './consulta-grupo.component.html',
  styleUrls: ['./consulta-grupo.component.css']
})
export class ConsultaGrupoComponent implements OnInit {
  grupo = new Grupo;

  constructor() { }

  ngOnInit() {
  }

}
