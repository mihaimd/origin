import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface Answer {
  type: string;
  options: string[];
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  public answers: Answer[] = [
    {
      type: 'multiple',
      options: ['New event: Trip to Vegas', 'fsdfds', 'fgdsygfyds gyds gfysdg', 'fsdfhuds hfh dagygdysag d gsa gy g'],
      id: 1
    },
    {
      type: 'single',
      options: ['New event: Trip to Vegas', 'fsdfds', 'fgdsygfyds gyds gfysdg', 'fsdfhuds hfh dagygdysag d gsa gy g'],
      id: 2
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getAnswerById(id: number): Observable<Answer> {
    return of(this.answers[id]);
  }
}
