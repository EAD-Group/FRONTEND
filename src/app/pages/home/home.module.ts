import { AvaliacoesModule } from './../avaliacoes/avaliacoes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AnotacoesModule } from '../anotacoes/anotacoes.module';
import { FeedComponent } from './components/feed/feed.component';



@NgModule({
  declarations: [
    HomeComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    AnotacoesModule,
    FormsModule,
    ReactiveFormsModule,
    AvaliacoesModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
