import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliacoesRoutingModule } from './avaliacoes-routing.module';
import { AvaliacoesPendentesComponent } from './components/avaliacoes-pendentes/avaliacoes-pendentes.component';
import { AdicionarAvaliacaoComponent } from './components/adicionar-avaliacao/adicionar-avaliacao.component';
import { FazerAvaliacaoComponent } from './components/fazer-avaliacao/fazer-avaliacao.component';
import { NotasAvaliacaoComponent } from './components/notas-avaliacao/notas-avaliacao.component';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes.component';
import { CorrecaoComponent } from './components/correcao/correcao.component';


@NgModule({
  declarations: [
    AvaliacoesPendentesComponent,
    AdicionarAvaliacaoComponent,
    FazerAvaliacaoComponent,
    NotasAvaliacaoComponent,
    AvaliacoesComponent,
    CorrecaoComponent
  ],
  imports: [
    CommonModule,
    AvaliacoesRoutingModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AvaliacoesPendentesComponent
  ]
})
export class AvaliacoesModule { }
