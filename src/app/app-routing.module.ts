import { AutenticadoGuard } from './guards/autenticado.guard';
import { HomeComponent } from './pages/home/components/home/home.component';
import { AnotacoesComponent } from './pages/anotacoes/components/anotacoes/anotacoes.component';
import { PlanejamentoComponent } from './pages/planejamento/components/planejamento/planejamento.component';
import { AdicionarAlunoComponent } from './pages/adicionar-aluno/components/adicionar-aluno/adicionar-aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'autenticacao',
    loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
  },
  {
    path: 'alunos',
    component: AdicionarAlunoComponent,
    loadChildren: () => import('./pages/adicionar-aluno/adicionar-aluno.module').then(m => m.AdicionarAlunoModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'planejamento',
    component: PlanejamentoComponent,
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'anotacoes',
    component: AnotacoesComponent,
    loadChildren: () => import('./pages/anotacoes/anotacoes.module').then(m => m.AnotacoesModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'avaliacoes',
    loadChildren: () => import('./pages/avaliacoes/avaliacoes.module').then(m => m.AvaliacoesModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: '**',
    redirectTo: 'autenticacao'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
