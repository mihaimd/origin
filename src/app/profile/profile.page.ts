import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonAvatar, IonCard, IonRow, IonCol, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic, heart, home, personCircleOutline, cameraOutline, personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonAvatar, IonCard, IonRow, IonCol, IonSelect, IonSelectOption]
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
