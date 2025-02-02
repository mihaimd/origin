import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone: true
})
export class TimerComponent  implements OnInit {
  private readonly nums = document.querySelectorAll('.nums span');
  private readonly counter = document.querySelector('.counter');
  private readonly finalMessage = document.querySelector('.final');

  constructor() { }

  ngOnInit() {
    this.runAnimation();
  }

// function resetDOM() {
// 	counter.classList.remove('hide');
// 	finalMessage.classList.remove('show');
    
// 	nums.forEach(num => {
// 		num.classList.value = '';
// 	});

//     nums[0].classList.add('in');
// }

runAnimation() {
	this.nums.forEach((num, idx) => {
		const penultimate = this.nums.length - 1;
		num.addEventListener('animationend', (e: any) => {
			if(e.animationName === 'goIn' && idx !== penultimate){
				num.classList.remove('in');
				num.classList.add('out');
			} else if (e.animationName === 'goOut' && num.nextElementSibling){
				num.nextElementSibling.classList.add('in');
			} else {
				this.counter?.classList.add('hide');
				this.finalMessage?.classList.add('show');
			}
		});
	});
}




}
