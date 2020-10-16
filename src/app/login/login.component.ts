import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from './../shared/service/auth/auth.service';
import { UsuarioService } from './../shared/service/auth/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  public loginInvalid: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AutenticacaoService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
  }

  public ngOnInit() {
    this.formLogin = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  public login() {
    if (this.formLogin.valid) {
      const username = this.formLogin.get('username').value;
      const password = this.formLogin.get('password').value;
      this.authService
        .autenticar(username, password)
        .subscribe(() => {
          this.router.navigate(['home']);
          this.usuarioService.registrarUsuario();
        });
    }
  }
}
