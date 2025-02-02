import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFooter, IonButton, IonIcon, IonFab, IonFabButton, IonFabList } from '@ionic/angular/standalone';
import { MessageComponent } from '../message/message.component';
import { Router } from '@angular/router';

import { DataService, Message } from '../services/data.service';
import { addIcons } from 'ionicons';
import { logoIonic, heart, home, personCircleOutline, cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, MessageComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFooter, IonButton, IonIcon, IonFab, IonFabButton, IonFabList],
})
export class HomePage {
  private data = inject(DataService);
  constructor(private router: Router) {
    addIcons({personCircleOutline,cameraOutline,home,heart,logoIonic});
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  goToHowTo() {
    if (localStorage.getItem('champStart') === 'true') {
      this.router.navigateByUrl('question-river');
    } else {
      this.router.navigateByUrl('how-to');
    }
  }
}
