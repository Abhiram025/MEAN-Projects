import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hbm-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() room:RoomList[]=[]
  @Input() title:String=''
  @Output() selectedRoom=new EventEmitter<RoomList>()

  constructor() {}  

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']) {
      this.title=changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnInit(): void {
    
  }

  selectRoom(room:RoomList) {
    this.selectedRoom.emit(room)
  }
}
