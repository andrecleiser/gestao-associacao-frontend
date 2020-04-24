import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  chamarNovoAssociado(): void {
    this.route.navigate(['form-associado']);
  }

  listarAssociado(): void {
    this.route.navigate(['listar-associados']);
  }
}
