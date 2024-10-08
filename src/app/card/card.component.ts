import { Component, Input } from '@angular/core';
import { NavigationExtras, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive],
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

  constructor( private router: Router ) {}

  toggleIsCompleted() {
    this.card.isCompleted = !this.card.isCompleted;
  };

  openDetails() {
  }
};
