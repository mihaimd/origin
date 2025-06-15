import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { createOutline, personCircle, home } from 'ionicons/icons';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonAvatar, IonCard, IonRow, IonCol, IonSelect, IonSelectOption, IonInput, IonGrid, IonFooter, IonButtons, IonButton, IonFab, IonFabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-game0',
  templateUrl: './game0.page.html',
  styleUrls: ['./game0.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonAvatar, IonCard, IonRow, IonCol, IonSelect, IonSelectOption, IonInput, IonGrid, IonFooter, IonButtons, IonButton, IonFab, IonFabButton]
})
export class Game0Page implements OnInit {

      private router = inject(Router);
      public status1: boolean = false;
      public status2: boolean = false;
      public status3: boolean = false;
      private nextStep: number = 1;
  
    constructor() { 
      addIcons({createOutline,home,personCircle});
    }
  
    ngOnInit() {
    }
  
    goHome(): void {
      this.router.navigateByUrl('/');
    }
  
    goToProfile() {
      this.router.navigate(['profile']);
    }
  
    selectOption(id: number) {
      console.log('here');
      if(id === 1) {
        this.status1 = true;
        this.status2 = false;
        this.status3 = false;
        this.nextStep = id;
      }
  
      if(id === 2) {
        this.status1 = false;
        this.status2 = true;
        this.status3 = false;
      }
  
      if(id === 3) {
        this.status1 = false;
        this.status2 = false;
        this.status3 = true;
      }
    }
  
    goToNextStep() {
      console.log('next');
      this.router.navigate([`game${this.nextStep}-2`]);
    }

}
