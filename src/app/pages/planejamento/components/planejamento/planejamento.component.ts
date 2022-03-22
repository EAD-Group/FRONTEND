import { AutenticacaoService } from 'src/app/autenticacao/shared/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planejamento',
  templateUrl: './planejamento.component.html',
  styleUrls: ['./planejamento.component.scss']
})
export class PlanejamentoComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  eProfessor() {
    return this.autenticacaoService.eProfessor()
  }

  eAluno() {
    return this.autenticacaoService.eAluno()
  }

}
