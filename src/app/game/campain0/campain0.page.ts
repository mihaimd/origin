import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, inject } from '@angular/core';
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
export class Campain0Page implements OnInit {
  bubbles = ['a', 'b', 'c'];
  dragOver = false;
  public questions: any[] = [];
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private campaignId: string = '0';
  private droppedOnTarget: number = 0;
  @ViewChildren('draggable') draggable!: QueryList<ElementRef>;
  @ViewChild('target') target!: ElementRef;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const chapterId = params['chapterId'];
      const gameId = params['gameId'];
      this.campaignId = params['campaignId'];
      this.questions = this.dataService.getMessages(`${chapterId}-${gameId}-${this.campaignId}`) || [];
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
          this.questionDetail(parseInt(this.campaignId, 10), parseInt(qId, 10), true) :
          this.questionDetail(parseInt(this.campaignId, 10), parseInt(qId, 10));
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

  questionDetail(campaignId: number, id: number, last: boolean = false) {
    console.log('id ->', id);
    this.router.navigate(['q-detail', '1', '1', campaignId, id, last]);
  }
}
