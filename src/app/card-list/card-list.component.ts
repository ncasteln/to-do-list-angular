import { Component, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  // @Input() cards: Card[] | null = null;
  readonly URL = 'https://run.mocky.io/v3/5d819734-b282-459a-8539-389e2a214744';
  cards: Card[] | null = null;

  constructor(private httpClient: HttpClient) {};

  ngOnInit() {
    this.httpClient.get<Card[]>(this.URL).subscribe(res => {
      // console.log(res);
      this.cards = res;
    })
  }
}
