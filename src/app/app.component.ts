import { Component } from '@angular/core';
import { Friend } from '../model/friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  friend = new Friend('Laura', 'female', 'Lala', 23);
}
