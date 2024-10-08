import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Card, CardComponent } from './card/card.component';
import { HttpClient } from '@angular/common/http';
import { NewCardComponent } from './new-card/new-card.component';
import { NavComponent } from './nav/nav.component';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    NewCardComponent,
    NavComponent,
    CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly URL = 'https://run.mocky.io/v3/5d819734-b282-459a-8539-389e2a214744';
  constructor( private router: Router ) {};

  /*
    CHANGE APPROACH TO PASS DATA IN ROUTING:
    understand how this works, probbly with rxJs according to a couple of answers and phind.
    Understand state handling in general a bit an then rxtract the card fetching into
    a state, which can be retrieved into the card-details component.
  */

}

/*
[
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
]


*/
