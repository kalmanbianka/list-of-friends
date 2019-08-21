import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/model/friend';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() friend = new Friend('', '', '', 0);
  constructor() { }

  ngOnInit() {
  }

}
