import { Component } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { CardInputComponent } from '../card-input/card-input.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CardListComponent, CardInputComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
