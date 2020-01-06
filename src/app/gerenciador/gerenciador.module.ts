import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';

import { GerenciadorRoutingModule } from './gerenciador-routing.module';
import { FormsModule } from '@angular/forms';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CadastroGrupoComponent } from './cadastro-grupo/cadastro-grupo.component';
import { ConsultaGrupoComponent } from './consulta-grupo/consulta-grupo.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    CadastroEmpresaComponent, 
    ConsultaEmpresaComponent, 
    CadastroGrupoComponent, 
    ConsultaGrupoComponent, 
    ConsultaUsuarioComponent, 
    CadastroUsuarioComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    GerenciadorRoutingModule,
    BsDropdownModule.forRoot(),
  ]
})
export class GerenciadorModule { }
