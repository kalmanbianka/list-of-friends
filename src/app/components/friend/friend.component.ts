import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/model/friend';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  friend = new Friend('Laura', 'female', 'Lala', 23);
  constructor() { }

  ngOnInit() {
  }

}
