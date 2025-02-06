import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonFooter, IonFab, IonFabButton, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { AnswersComponent } from '../shared/answers/answers.component';
import { TimerComponent } from '../shared/timer/timer.component';
import { Observable, of } from 'rxjs';
import { DataService, Answer, Message } from '../services/data.service';
import { addIcons } from 'ionicons';
import { logoIonic, heart, home, personCircleOutline, cameraOutline, personCircle } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q-detail',
  templateUrl: './q-detail.page.html',
  styleUrls: ['./q-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardContent, AnswersComponent, TimerComponent, IonFooter, IonFab, IonFabButton, IonIcon, IonButtons, IonButton]
})
export class QDetailPage implements OnInit {
  public answer$: Observable<Message> = of(   {
    question: 'Kelly Richardson',
    answers: {options: [{label: 'What is the capital of Romania?', correct: false}], type: 'single'},
    date: '2015-02-03',
    id: 7,
    category: "geography"
  });
  private dataService = inject(DataService);
  private router = inject(Router);
  private location = inject(Location);
  public isCorrect: boolean = false;
  public isInCorrect: boolean = false;

  constructor() {
    addIcons({home,personCircle,personCircleOutline,cameraOutline,heart,logoIonic}); 
    const result = this.dataService.getMessageById(0) || of({});
    if(result !== null) {
      this.answer$ = result;
    }
  }

  ngOnInit() {

  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }
  
  timeUp(over: boolean) {
    console.log('Times up');
    if(over) {
      this.location.back();
    }
  }

  onAnswerChosen(e: MouseEvent, correct: boolean) {
    const clickedElement = e.target as HTMLElement;
    if(correct) {
      clickedElement.classList.add('green');
    } else {
      clickedElement.classList.add('red');
    }
    setTimeout(() => {this.location.back()}, 1300);
  }
}
