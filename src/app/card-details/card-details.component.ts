import { Component, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  id: number = -1;

  constructor( private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param)
      this.id = Number(param);
  }
}
