import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonButton, IonFab, IonFabButton, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { logoIonic, heart, home, personCircleOutline, cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.page.html',
  styleUrls: ['./how-to.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonButton, IonFab, IonFabButton, IonIcon, IonFooter]
})
export class HowToPage implements OnInit {

  readonly router = inject(Router);

  constructor() { 
    addIcons({personCircleOutline,cameraOutline,home,heart,logoIonic});
  }

  ngOnInit() {
  }

  goToQuestions(): void {
    localStorage.setItem('champStart', 'true');
    this.router.navigateByUrl('question-river');
  }

}
