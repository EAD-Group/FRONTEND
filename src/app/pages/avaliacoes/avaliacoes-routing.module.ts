import { CorrecaoComponent } from './components/correcao/correcao.component';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes.component';
import { NotasAvaliacaoComponent } from './components/notas-avaliacao/notas-avaliacao.component';
import { FazerAvaliacaoComponent } from './components/fazer-avaliacao/fazer-avaliacao.component';
import { AdicionarAvaliacaoComponent } from './components/adicionar-avaliacao/adicionar-avaliacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notas',
    component: NotasAvaliacaoComponent
  },
  {
    path: '',
    component: AvaliacoesComponent
  },
  {
    path: 'correcao/:id',
    component: CorrecaoComponent
  },
  {
    path: 'adicionar',
    component: AdicionarAvaliacaoComponent
  },
  {
    path: ':id',
    component: FazerAvaliacaoComponent
  },
  {
    path: '**',
    redirectTo: 'notas'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliacoesRoutingModule { }
