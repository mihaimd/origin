import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Message {
  question: string;
  answers: Answer;
  date: string;
  id: number;
  category: string
}

export interface Answer {
  type: string;
  options: Option[];
}

export interface Option {
  label: string,
  correct: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      question: 'What is the capital of Romania?',
      answers: {options: [{label: 'Bucharest', correct: true}, {label: 'Budapest', correct: false}, {label: 'Prague', correct: false}, {label: 'Warsaw', correct: false}], type: 'single'},
      date: '2025-02-03',
      id: 0,
      category: "geography"
    },
    {
      question: 'What is the capital of Romania?',
      answers: {options: [{label: 'Bucharest', correct: false}, {label: 'Budapest', correct: false}, {label: 'Prague', correct: false}, {label: 'Warsaw', correct: false}], type: 'single'},
      date: '2015-02-03',
      id: 1,
      category: "geography"
    },
    {
      question: 'What is the capital of Romania?',
      answers: {options: [{label: 'Bucharest', correct: false}, {label: 'Budapest', correct: false}, {label: 'Prague', correct: false}, {label: 'Warsaw', correct: false}], type: 'single'},
      date: '2015-02-03',
      id: 2,
      category: "geography"
    },
    {
      question: 'What is the capital of Romania?',
      answers: {options: [{label: 'Bucharest', correct: false}, {label: 'Budapest', correct: false}, {label: 'Prague', correct: false}, {label: 'Warsaw', correct: false}], type: 'single'},
      date: '2015-02-03',
      id: 3,
      category: "geography"
    },
    {
      question: 'What is the capital of Romania?',
      answers: {options: [{label: 'Bucharest', correct: false}, {label: 'Budapest', correct: false}, {label: 'Prague', correct: false}, {label: 'Warsaw', correct: false}], type: 'single'},
      date: '2015-02-03',
      id: 4,
      category: "geography"
    },
    {
      question: 'What is the capital of Romania?',
      answers: {options: [{label: 'Bucharest', correct: false}, {label: 'Budapest', correct: false}, {label: 'Prague', correct: false}, {label: 'Warsaw', correct: false}], type: 'single'},
      date: '2015-02-03',
      id: 5,
      category: "geography"
    },
    {
      question: 'What is the capital of Romania?',
      answers: {options: [{label: 'Bucharest', correct: false}, {label: 'Budapest', correct: false}, {label: 'Prague', correct: false}, {label: 'Warsaw', correct: false}], type: 'single'},
      date: '2015-02-03',
      id: 6,
      category: "geography"
    },
    {
      question: 'What is the capital of Romania?',
      answers: {options: [{label: 'Bucharest', correct: false}, {label: 'Budapest', correct: false}, {label: 'Prague', correct: false}, {label: 'Warsaw', correct: false}], type: 'single'},
      date: '2015-02-03',
      id: 7,
      category: "geography"
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Observable<Message> {
    return of(this.messages[id]);
  }
}
