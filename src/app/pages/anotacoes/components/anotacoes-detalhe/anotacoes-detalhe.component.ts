import { ActivatedRoute } from '@angular/router';
import { GerenciarAnotacoesService } from './../../shared/gerenciar-anotacoes.service';
import { Component, OnInit } from '@angular/core';
import { GetAnotacoesDto } from '../../shared/models/get-anotacoes.dto';

@Component({
  selector: 'app-anotacoes-detalhe',
  templateUrl: './anotacoes-detalhe.component.html',
  styleUrls: ['./anotacoes-detalhe.component.scss']
})
export class AnotacoesDetalheComponent implements OnInit {

  anotacao!: GetAnotacoesDto
  id!: string

  constructor(private gerenciarAnotacoes:GerenciarAnotacoesService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.anotacao = this.gerenciarAnotacoes.getAnotacao(params['id'])!
    })
    
  }

  ngOnInit(): void {
  }

}
