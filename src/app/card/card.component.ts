import { Component } from '@angular/core';

export interface Card {
  title: string,
  body: string,
  bgColor: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = "title";
  body = "ifuwe hfiweu hfeifu wehfiew uhwe iuh";
  bgColor = "rgb(54, 54, 54)";
  isCompleted = false;
  editMode = false;

  toggleIsCompleted() {
    if (!this.editMode) {
      this.isCompleted = !this.isCompleted ;
      this.isCompleted
        ? this.bgColor = "rgb(47, 125, 27)"
        : this.bgColor = "rgb(54, 54, 54)";
    }
  };
  editBody() {
    // need implementation
    // this.editMode = true;
  }
};
