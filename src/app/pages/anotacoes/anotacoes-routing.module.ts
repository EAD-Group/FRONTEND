import { AnotacoesEmptyComponent } from './components/anotacoes-empty/anotacoes-empty.component';
import { AnotacoesDetalheComponent } from './components/anotacoes-detalhe/anotacoes-detalhe.component';
import { AnotacoesAdicionarComponent } from './components/anotacoes-adicionar/anotacoes-adicionar.component';
import { AnotacoesComponent } from './components/anotacoes/anotacoes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AnotacoesEmptyComponent
  },
  {
    path: 'add',
    component: AnotacoesAdicionarComponent
  },
  {
    path: ':id',
    component: AnotacoesDetalheComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnotacoesRoutingModule { }
