import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, RefresherCustomEvent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFooter, IonFab, IonFabButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent, IonButton, IonButtons} from '@ionic/angular/standalone';
import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoIonic, heart, home, personCircleOutline, cameraOutline, personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-question-river',
  templateUrl: './question-river.page.html',
  styleUrls: ['./question-river.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRefresher, IonRefresherContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFooter, IonFab, IonFabButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonButton, IonButtons]
})
export class QuestionRiverPage implements OnInit {
  private data = inject(DataService);
  readonly router = inject(Router);
  private date = new Date();
  public formattedDate = '';


  constructor() { 
    addIcons({home,personCircle,personCircleOutline,cameraOutline,heart,logoIonic});
    this.formattedDate = this.date.toISOString().split('T')[0];
  }

  ngOnInit() {
    this.getQuestions()
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getQuestions(): Message[] {
    return this.data.getMessages();
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }

  onIonInfinite(e: InfiniteScrollCustomEvent) {

  }

  questionDetail(id: number) {
    this.router.navigate(['q-detail', id]);
  }


}
