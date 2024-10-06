import { Component, Input } from '@angular/core';

export interface Card {
  id: number,
  title: string,
  body: string,
  bgColor: string,
  isCompleted: boolean,
  isEditMode: boolean
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card: Card = {
    id: -1,
    title: "",
    body: "",
    bgColor: "",
    isCompleted: false,
    isEditMode: false
  };

  toggleIsCompleted() {
    this.card.isCompleted = !this.card.isCompleted;
  };
  editBody() {
    // need implementation
    // this.card.isEditMode = true;
  }
};
