import { Usuario } from './models/usuario';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private _autenticado = false
  private _usuarioAtual: Usuario | undefined

  public usuarios: Usuario[] = [
    {
      id: uuid(),
      email: 'professor@mail.com',
      nome: 'PROFESSOR',
      senha: '12345678',
      role: 'PROFESSOR'
    },
    {
      id: uuid(),
      email: 'davi@mail.com',
      nome: 'DAVI CAMPOS',
      senha: '12345678',
      role: 'ALUNO'
    }
  ]

  constructor() { }

  get autenticado(): boolean {
    return this._autenticado
  }

  get usuarioAtual(): Usuario | undefined {
    return this._usuarioAtual
  }

  login(email: string, senha: string): boolean {
    const usuario = this.usuarios.find(u => u.email === email && u.senha === senha)
    if (usuario) {
      this._autenticado = true
      this._usuarioAtual = usuario
      return true
    } else {
      this._usuarioAtual = undefined
      this._autenticado = false
      return false
    }
  }

  registrar(nome: string, email: string, senha: string) {
    this.usuarios.push({
      id: uuid(),
      email: email,
      nome: nome,
      senha: senha,
      role: 'ALUNO'
    })
  }

  logout() {
    this._usuarioAtual = undefined
    this._autenticado = false
  }

  eProfessor() {
    return this.usuarioAtual?.role === 'PROFESSOR'
  }

  eAluno() {
    return this.usuarioAtual?.role === 'ALUNO'
  }


}
