import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';

import { GerenciadorRoutingModule } from './gerenciador-routing.module';
import { FormsModule } from '@angular/forms';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    CadastroEmpresaComponent, 
    ConsultaEmpresaComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    GerenciadorRoutingModule,
    BsDropdownModule.forRoot()
  ]
})
export class GerenciadorModule { }
