import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './../seguranca/auth.guard';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';


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
        path: 'empresas/nova',
        component: CadastroEmpresaComponent,
        data: {
          title: 'Cadastro empresa'
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