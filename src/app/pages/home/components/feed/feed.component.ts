import { AutenticacaoService } from './../../../../autenticacao/shared/autenticacao.service';
import { GetPostDto } from './../../shared/models/get-post.dto';
import { FeedService } from './../../shared/feed.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  novoPost: string = ''
  posts: GetPostDto[] = []
  novoComentario = new FormControl('')

  constructor(private feedService: FeedService, private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.posts = this.feedService.getFeed()
  }

  adicionarPost() {
    this.feedService.adicionarPost({
      corpo: this.novoPost,
      usuario: this.autenticacaoService.usuarioAtual?.nome!
    })
    this.novoPost = ''
  }

  adicionarComentario(post: string) {
    this.feedService.adicionarComentario({
      post: post,
      comentario: this.novoComentario.value,
      usuario: this.autenticacaoService.usuarioAtual?.nome!
    })

    this.novoComentario.reset()
  }

}
