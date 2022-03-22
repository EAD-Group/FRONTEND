import { Router } from '@angular/router';
import { AutenticacaoService } from './../../shared/autenticacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private autenticacaoService: AutenticacaoService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['',[Validators.required]]
    })
  }

  logar() {
    const { email , senha } = this.loginForm.value
    const loginValido = this.autenticacaoService.login(email,senha)
    if (loginValido) {
      this.router.navigateByUrl('')
    } else {
      
    }
  }

}
