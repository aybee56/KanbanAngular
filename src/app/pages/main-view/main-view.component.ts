import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  board: Board = new Board('Test Board', [
    new Column('To-read', [
      "Atomic Habits",
      "Vanishing Half",
      "The Second Sex"
    ]),
    new Column('Currently reading', [
      "The Language instinct",
      "Ways of seeing"
    ]),
    new Column('Read', [
      'Seven Husbands of Evelyn Hugo',
      'Piranesi',
      'Normal People',
      'Midnight Library'
    ]),
    new Column('Reviewed', [
      'Kim Jiyoung, Born 1982',
      'Sapiens',
      'Room of ones own'
    ])
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
