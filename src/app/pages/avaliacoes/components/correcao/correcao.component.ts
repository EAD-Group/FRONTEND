import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AvaliacoesService } from './../../shared/avaliacoes.service';
import { GetAvaliacaoDto } from './../../shared/models/get-avaliacao.dto';
import { Component, OnInit } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-correcao',
  templateUrl: './correcao.component.html',
  styleUrls: ['./correcao.component.scss']
})
export class CorrecaoComponent implements OnInit {

  avaliacaoId = ''
  avaliacao!: GetAvaliacaoDto
  notaInput = new FormControl(0)

  constructor(private avaliacaoService: AvaliacoesService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.avaliacaoId = params['id']
      this.avaliacao = this.avaliacaoService.getAvaliacao(params['id'])!
    })
  }

  corrigir(avaliacaoFeitaId: string) {
    this.avaliacaoService.corrigirAvaliacao(this.avaliacaoId,avaliacaoFeitaId,this.notaInput.value)
  }

}
