import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hbm-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  @Input() room:RoomList[]=[]
  @Output() selectedRoom=new EventEmitter<RoomList>()

  constructor() {}  
  ngOnInit(): void {
    
  }

  selectRoom(room:RoomList) {
    this.selectedRoom.emit(room)
  }
}
