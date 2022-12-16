import { Injectable } from '@angular/core';
import { Question } from '../interfaces/questions.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  math: Question[];
  geography: Question[];
  science: Question[];
  language: Question[];
  mixed: Question[];

  constructor() {
    this.math = [];
    this.geography = [{
      id:1,
      description: "¿Dónde se encuentra la comuna de Talagante?",
      a: "En Chile",
      b: "En Dinamarca",
      c: "En Transilvania",
      d: "En El Monte",
      res: "a"},
      {id:2,
      description: "¿En qué región de Chile se encuentra Los Andes?",
      a: "En la región de Los Ríos",
      b: "En la región de la Araucanía",
      c: "En la región Metropolitana",
      d: "En la región de Valparaíso",
      res: "d"
      },
      {id: 3,
      description: "¿En qué país de Asia se originó el virus Covid-19?",
      a: "En China",
      b: "En Japón",
      c: "En Taiwán",
      d: "En India",
      res: "a"
      },
      {id: 4,
        description: "¿En qué año terminó la Guerra del Pacífico?",
        a: "En 1833",
        b: "En 1883",
        c: "En 1933",
        d: "En 1903",
        res: "b"
        }];
    this.science = [];
    this.language = [];
    this.mixed = [];

   }
   getQuestions(id: number): Question[] {
    if(id == 1) return this.math;
    if(id == 2) return this.geography;
    if(id == 3) return this.science;
    if(id == 4) return this.language;
    if(id == 5) return this.mixed;
    else{
      return[];
    }
    
   }
}
