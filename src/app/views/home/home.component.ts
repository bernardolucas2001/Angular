import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent1 implements OnInit {
  public titulo!: string;
  public texto!: string;

  classToDiv = {};
  
  constructor() {

    this.classToDiv = {
      'text-sucess': true
    };

  }
  ngOnInit() {
    this.titulo! = 'O que é Lorem Ipsum?';
    this.texto! = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.';
    
  }

}
