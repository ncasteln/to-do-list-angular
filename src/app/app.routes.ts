import { Routes } from '@angular/router';
import { NewCardComponent } from './new-card/new-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';

export const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'newCard', component: NewCardComponent },
  { path: 'card-details/:id', component: CardDetailsComponent }
];
