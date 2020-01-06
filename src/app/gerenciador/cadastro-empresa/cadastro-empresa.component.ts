import { Component, OnInit } from '@angular/core';
import { Empresa } from '../core/model';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent implements OnInit {
  empresa = new Empresa();

  constructor() { }

  ngOnInit() {
  }

}
