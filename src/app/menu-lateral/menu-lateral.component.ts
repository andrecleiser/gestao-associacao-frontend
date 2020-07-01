import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  chamarNovoAssociado(): void {
    this.route.navigate(['form-associado'], { relativeTo: this.activatedRoute });
  }

  listarAssociado(): void {
    this.route.navigate(['listar-associados'], { relativeTo: this.activatedRoute });
  }
}
