import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewCardComponent } from './new-card/new-card.component';
import { CardListComponent } from './card-list/card-list.component';

export const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'newCard', component: NewCardComponent }
];
