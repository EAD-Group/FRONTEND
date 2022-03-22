import { GerenciarPlanejamentoService } from './../../shared/gerenciar-planejamento.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planejamento-adicionar',
  templateUrl: './planejamento-adicionar.component.html',
  styleUrls: ['./planejamento-adicionar.component.scss']
})
export class PlanejamentoAdicionarComponent  {

  compromissoForm: FormGroup

  constructor(private gerenciarPlanejamento: GerenciarPlanejamentoService, private fb: FormBuilder) { 
    this.compromissoForm = this.fb.group({
      titulo: [],
      corpo: [],
      data: []
    })
  }

  adicionarCompromisso() {
    const { titulo , corpo , data } = this.compromissoForm.value
    this.gerenciarPlanejamento.adicionarCompromisso({titulo, corpo , data})
    this.compromissoForm.reset()
  }

}
