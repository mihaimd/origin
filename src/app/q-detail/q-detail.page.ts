import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { AnswersComponent } from '../shared/answers/answers.component';
import { TimerComponent } from '../shared/timer/timer.component';
import { Observable, of } from 'rxjs';
import { DataService, Answer } from '../services/data.service';

@Component({
  selector: 'app-q-detail',
  templateUrl: './q-detail.page.html',
  styleUrls: ['./q-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardContent, AnswersComponent, TimerComponent]
})
export class QDetailPage implements OnInit {
  public answer$: Observable<Answer> = of({type: 'single', options:['dasddasd'], id: 0});
  private dataService = inject(DataService);

  constructor() { 
    const result = this.dataService.getAnswerById(0) || of({});
    if(result !== null) {
      this.answer$ = result;
    }
  }

  ngOnInit() {

  }

}
