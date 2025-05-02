import { AfterViewInit, Component, OnInit, 
         QueryList, ViewChild, ViewChildren } from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import {Room, RoomList} from './rooms'
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hbm-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hideRooms=false
  selectedRoom!:RoomList

  rooms:Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 4
  }

  @ViewChild(HeaderComponent, {static:true}) header!:HeaderComponent
  @ViewChildren(HeaderComponent) headerChild!:QueryList<HeaderComponent>
  

  title=''

  roomsList:RoomList[]=[]
  constructor(private roomsService:RoomsService) {}

  ngOnInit():void{
    this.roomsList=this.roomsService.getRoomsList()
  }

  // ngDoCheck(): void {
  //   console.log('Check method is initialized')
  // }
  ngAfterViewInit() {
    this.headerChild.last.title='this is a test for view children and dynamic rendering'
    this.headerChild.forEach((head,index)=> {
      if(index!==0 && index!==this.headerChild.length-1) {
        head.title='This is for changing instances in between using forEach loop'
      }
    })
  }

  selectRoom(room:RoomList) {
    this.selectedRoom=room
  }
  toggle() {
    this.hideRooms=!this.hideRooms
    this.title='Blank is the default value of this title'
  }

  addRoom() {
    const newRoom:RoomList={
      roomNumber: "A-705",
      roomType:"Special Room",
      amenities:"Free Wifi, A/C Room, 24/7 Water",
      price:9500,
      photo:'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkIn:new Date('10-May-2025'),
      checkOut:new Date('21-May-2025')
    }
    this.roomsList=[...this.roomsList, newRoom]    
  }

  
}
