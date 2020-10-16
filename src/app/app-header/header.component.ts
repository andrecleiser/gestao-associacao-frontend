import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from '../shared/service/auth/usuario.service';
import { Usuario } from './../shared/models/auth/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit{

  public usuario$: Observable<Usuario>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario$ = this.usuarioService.obterUsuario$();
  }

  public logout(): void {
    this.usuarioService.efetuarLogout();
  }
}
