import { Component, OnInit, inject, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { createOutline, personCircle, home } from 'ionicons/icons';
import { Router, ActivatedRoute } from '@angular/router';
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
  private route = inject(ActivatedRoute);
  public status1: boolean = false;
  public status2: boolean = false;
  public status3: boolean = false;
  private nextStep: number = 1;
  public isDisabled: boolean = true;
  public selectedOption: number = 1;
  public completed: boolean = false;
  public buttonText: string = 'Play';
  @ViewChild('arrow', { static: false }) arrow!: ElementRef<HTMLElement>;
  @ViewChildren('campains') campains!: QueryList<ElementRef>;

  constructor() {
    addIcons({ createOutline, home, personCircle });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['completed']) {
        this.completed = params['completed'] === 'true';
      }
    });
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  selectOption(id: number) {
    if (id === 1) {
      this.arrow.nativeElement.style.top = 7 + 'px';
      this.arrow.nativeElement.style.left = 30 + 'px';
    }
    if (id === 2) {
      this.arrow.nativeElement.style.top = 40 + 'px';
      this.arrow.nativeElement.style.left = 30 + 'px';
    }

    if (id === 3) {
      this.arrow.nativeElement.style.top = 73 + 'px';
      this.arrow.nativeElement.style.left = 50 + 'px';
    }

    this.nextStep = id;
    this.isDisabled = false;

    if (id === 1) {
      this.status1 = true;
      this.status2 = false;
      this.status3 = false;
    }

    if (id === 2) {
      this.status1 = false;
      this.status2 = true;
      this.status3 = false;
    }

    if (id === 3) {
      this.status1 = false;
      this.status2 = false;
      this.status3 = true;
    }
  }

  goToNextStep() {
    console.log('next');
    if (this.completed) {
      this.router.navigate([`game${this.nextStep}-2`]);
      this.buttonText = 'Next';
    } else {
      this.buttonText = 'Play';
      this.router.navigate([`campain0`, '1', '1', `${this.nextStep}`]);
    }
  }

}
