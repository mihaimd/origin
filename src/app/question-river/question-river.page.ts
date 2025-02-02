import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, RefresherCustomEvent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFooter, IonFab, IonFabButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent, IonButton} from '@ionic/angular/standalone';
import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoIonic, heart, home, personCircleOutline, cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-question-river',
  templateUrl: './question-river.page.html',
  styleUrls: ['./question-river.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRefresher, IonRefresherContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFooter, IonFab, IonFabButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonButton]
})
export class QuestionRiverPage implements OnInit {
  private data = inject(DataService);
  readonly router = inject(Router);

  constructor() { 
    addIcons({personCircleOutline,cameraOutline,home,heart,logoIonic});
  }

  ngOnInit() {
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

  questionDetail(id: string) {
    this.router.navigate(['q-detail', id]);
  }


}
