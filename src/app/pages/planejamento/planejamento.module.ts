import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanejamentoComponent } from './components/planejamento/planejamento.component';
import { PlanejamentoListaComponent } from './components/planejamento-lista/planejamento-lista.component';
import { PlanejamentoAdicionarComponent } from './components/planejamento-adicionar/planejamento-adicionar.component';
import { FiltrarCompromissoPipe } from './shared/pipes/filtrar-compromisso.pipe';



@NgModule({
  declarations: [
    PlanejamentoComponent,
    PlanejamentoListaComponent,
    PlanejamentoAdicionarComponent,
    FiltrarCompromissoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PlanejamentoModule { }
