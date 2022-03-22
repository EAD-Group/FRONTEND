import { Observable } from 'rxjs';
import { AdicionarComentarioDto } from './models/adicionar-comentario.dto';
import { AdicionarPostDto } from './models/adicionar-post.dto';
import { GetPostDto } from './models/get-post.dto';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feed: GetPostDto[] = []

  constructor() { }

  adicionarPost(adicionarPost: AdicionarPostDto): void {
    this.feed.splice(0,0,{
      id: uuid(),
      usuario: adicionarPost.usuario,
      corpo: adicionarPost.corpo,
      comentarios: []
    })
  }

  adicionarComentario(adicionarComentario: AdicionarComentarioDto): void {
    const post = this.feed.find(post => post.id === adicionarComentario.post)
    post?.comentarios.push({
      id: uuid(),
      corpo: adicionarComentario.comentario,
      usuario: adicionarComentario.usuario
    })
  }

  getFeed(): GetPostDto[] {
    return this.feed
  }
}
