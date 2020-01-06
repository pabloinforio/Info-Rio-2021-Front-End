import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './../seguranca/auth.guard';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CadastroGrupoComponent } from './cadastro-grupo/cadastro-grupo.component';
import { ConsultaGrupoComponent } from './consulta-grupo/consulta-grupo.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gerenciador'
    },
    children: [
      {
        path: '',
        redirectTo: 'empresas'
      },
      {
        path: 'empresas',
        component: ConsultaEmpresaComponent,
        data: {
          title: 'Consultar empresas'
        }
      },
      {
        path: 'empresas/adiciona',
        component: CadastroEmpresaComponent,
        data: {
          title: 'Cadastro empresa'
        }
      },
      {
        path: 'grupos',
        component: ConsultaGrupoComponent,
        data: {
          title: 'Consultar grupos'
        }
      },
      {
        path: 'grupos/adiciona',
        component: CadastroGrupoComponent,
        data: {
          title: 'Cadastro grupo'
        }
      },
      {
        path: 'usuarios',
        component: ConsultaUsuarioComponent,
        data: {
          title: 'Usuários'
        }
      },
      {
        path: 'usuarios/adiciona',
        component: CadastroUsuarioComponent,
        data: {
          title: 'Cadastro usuário'
        }
      },
      // {
      //   path: 'empresas/:codigo',
      //   component: CadastroEmpresaComponent,
      //   data: {
      //     title: 'Cadastro empresa'
      //   }
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciadorRoutingModule {}