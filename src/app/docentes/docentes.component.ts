import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes:any=[]
  
  constructor() { }

  ngOnInit(): void {
    this.docentes=[
      {Nombre:"Everth", Identificacion: "123", Apellido: "Llanos", Asignatura: "Programación"},
      {Nombre:"Fernando", Identificacion: "12345", Apellido: "Sierra", Asignatura: "Base de Datos"}
    ]
  }

}
