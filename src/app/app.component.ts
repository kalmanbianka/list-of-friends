import { Component } from '@angular/core';
import { Friend } from '../model/friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  friendsList = [
    new Friend('Laura', 'female', 'Lala', 23),
    new Friend('István', 'male', 'Pista', 25),
    new Friend('Petra', 'female', 'Petu', 15),
    new Friend('Rebeka', 'female', 'Rebi', 22),

  ]
}
