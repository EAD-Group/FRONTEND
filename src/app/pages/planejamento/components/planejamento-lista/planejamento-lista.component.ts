import { GerenciarPlanejamentoService } from './../../shared/gerenciar-planejamento.service';
import { GetCompromissoDto } from './../../shared/models/getCompromisso.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planejamento-lista',
  templateUrl: './planejamento-lista.component.html',
  styleUrls: ['./planejamento-lista.component.scss']
})
export class PlanejamentoListaComponent implements OnInit {

  compromissos: GetCompromissoDto[] = []

  constructor(private gerenciarPlanejamento: GerenciarPlanejamentoService) { }

  ngOnInit(): void {
    this.compromissos = this.gerenciarPlanejamento.getCompromissos()
  }

}
