import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics : any[];


  constructor() {
    this.topics = [{id:1, name: 'Matemáticas'},
    {id:2, name: 'Geografía'},
    {id:3, name:'Ciencias'},
    {id:4, name:'Lenguaje'},
    {id:5, name:'Mixto'}];
   }

  ngOnInit(): void {
  }

}
