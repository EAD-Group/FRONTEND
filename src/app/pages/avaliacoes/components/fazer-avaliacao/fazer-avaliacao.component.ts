import { AutenticacaoService } from 'src/app/autenticacao/shared/autenticacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliacoesService } from './../../shared/avaliacoes.service';
import { GetAvaliacaoDto } from './../../shared/models/get-avaliacao.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazer-avaliacao',
  templateUrl: './fazer-avaliacao.component.html',
  styleUrls: ['./fazer-avaliacao.component.scss']
})
export class FazerAvaliacaoComponent implements OnInit {

  avaliacao!: GetAvaliacaoDto
  resposta: string = ''

  constructor(private autenticacaoService: AutenticacaoService, private avaliacoesService: AvaliacoesService, private route: ActivatedRoute,private router: Router) { 
    this.route.params.subscribe(params => {
      this.avaliacao = this.avaliacoesService.getAvaliacao(params['id'])
    })
  }

  ngOnInit(): void {
  }

  onChangeEditor(event: any) {
    this.resposta = escape(event['html'])
  }

  enviarResultado() {
    this.avaliacoesService.fazerAvaliacao({
      aluno: this.autenticacaoService.usuarioAtual?.nome!,
      corrigida: false,
      nota: 0,
      avaliacao: this.avaliacao.id,
      avaliacaoFeita: this.resposta
    })
    this.router.navigateByUrl('')
  }

}
