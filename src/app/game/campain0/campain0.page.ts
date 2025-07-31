import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, inject, AfterViewInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';
import { GlowDirective } from 'src/app/directives/glow.directive';
import { DataService } from 'src/app/services/data.service';
import { addIcons } from 'ionicons';
import { DragDropModule, CdkDragMove, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-campain0',
  templateUrl: './campain0.page.html',
  styleUrls: ['./campain0.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, DragDropModule, GlowDirective]
})
export class Campain0Page implements OnInit, AfterViewInit {
  bubbles = ['a', 'b', 'c'];
  dragOver = false;
  public questions: any[] = [];
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private gameId: string = '1';
  private campaignId: string = '0';
  private droppedOnTarget: number = 0;
  public starScreen: boolean = false;
  @ViewChildren('draggable') draggable!: QueryList<ElementRef>;
  @ViewChild('target') target!: ElementRef;
  @ViewChild('progress') progress!: ElementRef;
  @ViewChild('stars') stars!: ElementRef;
  @ViewChild('star1') star1!: ElementRef;
  @ViewChild('star2') star2!: ElementRef;
  @ViewChild('star3') star3!: ElementRef;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const chapterId = params['chapterId'];
      this.gameId = params['gameId'];
      this.campaignId = params['campaignId'];
      this.starScreen = params['starScreen'] === 'true';
      console.log('Star screen:', this.starScreen);
      this.questions = this.dataService.getMessages(`${chapterId}-${this.gameId}-${this.campaignId}`) || [];
    });
    console.log('onInit');
  }

  onDragMoved(event: CdkDragMove) {
    // This method is called when the draggable item is moved
    // You can use this to update the position or perform any logic
    const isOverlap = this.checkOverlap(
      event.source.element.nativeElement, this.target.nativeElement
    );
    // console.log('top:', event.source.element.nativeElement.getBoundingClientRect().top, 'left:', event.source.element.nativeElement.getBoundingClientRect().left);
    isOverlap ? this.target.nativeElement.classList.add('shake') : this.target.nativeElement.classList.remove('shake');
  }

  onDragEnded(event: CdkDragEnd, question: any) {
    const draggedEl = event.source.element.nativeElement;
    const targetEl = this.target.nativeElement;

    const isDroppedOnTarget = this.checkOverlap(draggedEl, targetEl);

    if (isDroppedOnTarget) {
      console.log('Dropped on target!');
      console.log('Draggable: ', this.draggable.length);
      this.droppedOnTarget++;
      draggedEl.classList.add('dropped');
      targetEl.classList.remove('shake');
      const qId = draggedEl.getAttribute('id');
      if (qId) {
        this.droppedOnTarget === this.draggable.length ?
          this.questionDetail(parseInt(this.gameId, 10), parseInt(this.campaignId, 10), parseInt(qId, 10), true) :
          this.questionDetail(parseInt(this.gameId, 10), parseInt(this.campaignId, 10), parseInt(qId, 10));
      }

      // You can trigger logic here: drop zone logic, emit event, etc.
    } else {
      console.log('Not dropped on target');
    }
  }

  checkOverlap(el1: HTMLElement, el2: HTMLElement): boolean {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();

    return !(
      r1.right < r2.left ||
      r1.left > r2.right ||
      r1.bottom < r2.top ||
      r1.top > r2.bottom
    );
  }

  questionDetail(gameId: number, campaignId: number, id: number, last: boolean = false) {
    console.log('id ->', id);
    this.router.navigate(['q-detail', '1', gameId, campaignId, id, last]);
  }

  triggerProgress() {
    this.progress.nativeElement.style.height = '30%';
    this.stars.nativeElement.style.visibility = 'visible';
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    if (this.route.snapshot.params['starScreen'] === 'true') {
      const getStorage = localStorage.getItem('campaigns');
      if (getStorage) {
        let games = JSON.parse(getStorage);
        const game = games.filter((c: any) => c.id === this.gameId);
        if (game[0]) {
          console.log('Game found ->', game);
          // game[0].completed.push(parseInt(this.campaignId, 10));
          // games = [...games, game[0]];
          games.forEach((g: any)=>{
            if(g.id === game[0].id){
              g.completed.push(parseInt(this.campaignId,10))
            }
          })
        } else {
          games.push({
            id: this.gameId,
            completed: [parseInt(this.campaignId, 10)]
          })
        }

        localStorage.setItem('campaigns', JSON.stringify(games));
      } else {
        localStorage.setItem('campaigns', JSON.stringify([{ id: this.gameId, completed: [parseInt(this.campaignId, 10)] }]));
      }
      // const localStorageData = JSON.stringify([{ id: this.gameId, completed: [1] }]);
      // localStorage.setItem('campaigns', localStorageData);
      setTimeout(() => {
        this.star1.nativeElement.classList.add('star__1');
        this.star2.nativeElement.classList.add('star__2');
        this.star3.nativeElement.classList.add('star__3');
      }, 3000);
      this.draggable.forEach((el: ElementRef) => {
        el.nativeElement.style.display = 'none';
      })
    }
  }

  backToStory() {
    if (this.gameId === '1') {
      this.router.navigate([`game0`, this.campaignId]);
    } else {
      this.router.navigate([`game1-${this.gameId}`, this.campaignId]);
    }
  }
}
