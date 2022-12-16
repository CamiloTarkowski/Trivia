import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../interfaces/questions.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  questions: Question[] = [];
  i: number = 0;
  score: number = 0;
  congrats: boolean = false;
  saveResponses: string[] = [];

  constructor(private questionsService: QuestionsService,
    private route: ActivatedRoute) {
  }

  checkResponse(res: string){
    if(this.questions[this.i].res == res){
      this.score = this.score + 5;
      this.i = this.i+1;
      alert("Correcto :D");
      this.saveResponses.push(res);

    }
    else{
      alert("Incorrecto :(");
      this.i = this.i+1;
      this.saveResponses.push(res);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.questions = this.questionsService.getQuestions(id);
        }
      );
    };
  }
