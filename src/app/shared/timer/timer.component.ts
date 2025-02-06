import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone: true
})
export class TimerComponent  implements OnInit {
  @Output() timeUp = new EventEmitter<boolean>();
  public initTime: number = 0;
  constructor() { }

  ngOnInit() {
    this.runAnimation();
  }

  runAnimation() {
    setInterval(() => {
      this.initTime++;
      if(this.initTime === 20){
        this.timeUp.emit(true);
      }
    }, 1000)
  }
  
  
}
