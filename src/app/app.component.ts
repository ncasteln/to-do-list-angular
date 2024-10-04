import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card, CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do list creator!';
  subtitle = 'by ncasteln';
  cards: Card[] = [
    {
      "id": 0,
      "title": "Buy groceries",
      "body": "Buy milk, eggs, and bread from the supermarket.",
      "isCompleted": false,
      "bgColor": "#FFEECC",
      "isEditMode": false
    },
    {
      "id": 1,
      "title": "Finish project report",
      "body": "Complete the annual report and send it to the manager.",
      "isCompleted": false,
      "bgColor": "#CCE5FF",
      "isEditMode": false
    },
    {
      "id": 2,
      "title": "Workout",
      "body": "Go for a 30-minute run and do strength exercises.",
      "isCompleted": true,
      "bgColor": "#CCFFCC",
      "isEditMode": false
    },
    {
      "id": 3,
      "title": "Read a book",
      "body": "Read 50 pages of the current novel.",
      "isCompleted": false,
      "bgColor": "#FFCCCC",
      "isEditMode": false
    }
  ];
}
