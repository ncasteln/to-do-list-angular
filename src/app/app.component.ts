import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card, CardComponent } from './card/card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly URL = 'https://run.mocky.io/v3/5d819734-b282-459a-8539-389e2a214744';
  readonly title = 'to-do list creator!';
  readonly subtitle = 'by ncasteln';
  cards: Card[] | null = null;

  constructor(private httpClient: HttpClient) {};

  ngOnInit() {
    this.httpClient.get<Card[]>(this.URL).subscribe(res => {
      console.log(res);
      this.cards = res;
    })
  }
}
