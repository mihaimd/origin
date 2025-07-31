import { Component, OnInit, inject, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonAvatar, IonCard, IonRow, IonCol, IonSelect, IonSelectOption, IonInput, IonGrid, IonFooter, IonButtons, IonButton, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { createOutline, personCircle, home } from 'ionicons/icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game1-2',
  templateUrl: './game1-2.page.html',
  styleUrls: ['./game1-2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonAvatar, IonCard, IonRow, IonCol, IonSelect, IonSelectOption, IonInput, IonGrid, IonFooter, IonButtons, IonButton, IonFab, IonFabButton]
})
export class GamePage12 implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  public status1: boolean = false;
  public status2: boolean = false;
  public status3: boolean = false;
  private nextStep: number = 1;
  public isDisabled: boolean = true;
  public selectedOption: number = 1;
  public completed: boolean = false;
  public buttonText: string = 'Play';
  private completedCampaingts: any;
  public localStorageGame: any;
  public isGameCompleted: boolean = false;
  @ViewChild('arrow', { static: false }) arrow!: ElementRef<HTMLElement>;
  @ViewChildren('campains') campains!: QueryList<ElementRef>;

  constructor() {
    addIcons({ createOutline, home, personCircle });
  }

  ngOnInit() {
    const finnishedCampains = localStorage.getItem('campaigns');
    if (finnishedCampains) {
      this.completedCampaingts = JSON.parse(finnishedCampains);
      if (this.completedCampaingts.length > 0) {
        this.localStorageGame = this.completedCampaingts.filter((campaign: any) => {
          return parseInt(campaign.id, 10) === 2;
        });
      }
      if (this.localStorageGame.length > 0) {
        this.isGameCompleted = this.localStorageGame[0]['completed'].length === 3;
      }

      if (this.isGameCompleted) {
        this.buttonText = 'Next';
        this.isDisabled = false;
      }
    }
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  selectOption(id: number) {
    if (id === 1 && !this.localStorageGame[0]?.['completed'].includes(1)) {
      this.arrow.nativeElement.style.top = 7 + 'px';
      this.arrow.nativeElement.style.left = 50 + 'px';
    }
    if (id === 2 && !this.localStorageGame[0]?.['completed'].includes(2)) {
      this.arrow.nativeElement.style.top = 40 + 'px';
      this.arrow.nativeElement.style.left = 50 + 'px';
    }

    if (id === 3 && !this.localStorageGame[0]?.['completed'].includes(3)) {
      this.arrow.nativeElement.style.top = 73 + 'px';
      this.arrow.nativeElement.style.left = 50 + 'px';
    }
    if (this.localStorageGame.length > 0 && !this.localStorageGame[0]?.['completed'].includes(id)) {
      this.nextStep = id;
      this.isDisabled = false;
      console.log('next1', this.nextStep);
    } else {
      this.nextStep = id;
      this.isDisabled = false;
      console.log('next2', this.nextStep);
    }

    if (id === 1 && !this.localStorageGame[0]?.['completed'].includes(1)) {
      this.status1 = true;
      this.status2 = false;
      this.status3 = false;
    }

    if (id === 2 && !this.localStorageGame[0]?.['completed'].includes(2)) {
      this.status1 = false;
      this.status2 = true;
      this.status3 = false;
    }

    if (id === 3 && !this.localStorageGame[0]?.['completed'].includes(3)) {
      this.status1 = false;
      this.status2 = false;
      this.status3 = true;
    }
  }

  goToNextStep() {
    console.log('next');
    if (this.localStorageGame[0]?.['completed'].length === 3) {
      this.router.navigate([`game1-3`, 0]);
    } else {
      this.router.navigate([`campain0`, '1', '2', `${this.nextStep}`, 'false']);
    }
  }

}
