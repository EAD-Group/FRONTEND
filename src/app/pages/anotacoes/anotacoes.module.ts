import { FormsModule } from '@angular/forms';
import { AnotacoesRoutingModule } from './anotacoes-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotacoesComponent } from './components/anotacoes/anotacoes.component';
import { AnotacoesAdicionarComponent } from './components/anotacoes-adicionar/anotacoes-adicionar.component';
import { AnotacoesListaComponent } from './components/anotacoes-lista/anotacoes-lista.component';
import { AnotacoesDetalheComponent } from './components/anotacoes-detalhe/anotacoes-detalhe.component';
import { AnotacoesEmptyComponent } from './components/anotacoes-empty/anotacoes-empty.component';
import { QuillModule } from 'ngx-quill';
import { FiltrarAnotacaoPipe } from './shared/pipe/filtrar-anotacao.pipe';



@NgModule({
  declarations: [
    AnotacoesComponent,
    AnotacoesAdicionarComponent,
    AnotacoesListaComponent,
    AnotacoesDetalheComponent,
    AnotacoesEmptyComponent,
    FiltrarAnotacaoPipe
  ],
  imports: [
    CommonModule,
    AnotacoesRoutingModule,
    RouterModule,
    FormsModule,
    QuillModule.forRoot(),
  ],
  exports: [
    AnotacoesComponent,
    AnotacoesListaComponent
  ]
})
export class AnotacoesModule { }
