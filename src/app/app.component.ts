import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  standalone : true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nombre = 'Leda';
  placeholder ="Escriba algo papu";
  deshabilitado = true;
  constructor(){
    setInterval(()=>this.deshabilitado = false,3000)
  }
  getSuma(numero1: number, numero2: number){
    return (numero1+numero2);
  }
  show = true;
  listStudents: any [] = [
    {name:"Pedro Orrantia", status:"Promocionado"},
    {name:"Daniel Fuentes", status:"Regular"},
    {name:"Luis Pérez", status:"Regular"},
  ]

  toggle(): void{
    this.show = !this.show
  }
}
