import { AutenticadoGuard } from './guards/autenticado.guard';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { HomeModule } from './pages/home/home.module';
import { QuillModule } from 'ngx-quill';
import { AnotacoesModule } from './pages/anotacoes/anotacoes.module';
import { PlanejamentoModule } from './pages/planejamento/planejamento.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PlanejamentoModule,
    AnotacoesModule,
    HomeModule,
    QuillModule.forRoot(),
    AutenticacaoModule
  ],
  providers: [AutenticadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
