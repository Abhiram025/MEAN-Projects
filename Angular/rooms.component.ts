import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import {Room, RoomList} from './rooms'

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

  title=''

  roomsList:RoomList[]=[]
  constructor() {}

  ngOnInit():void{
    console.log(this.header)
    this.roomsList=[{
      roomNumber: "A-104",
      roomType:"Deluxe Room",
      amenities:"Free Wifi, A/C Room, 24/7 Water",
      price:1200,
      photo:'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkIn:new Date('28-Apr-2025'),
      checkOut:new Date('29-Apr-2025')
    },
    {
      roomNumber: "C-312",
      roomType:"Private Suite",
      amenities:"Free Wifi, A/C Room, 24/7 Water",
      price:3200,
      photo:'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkIn:new Date('3-May-2025'),
      checkOut:new Date('5-May-2025')
    },
    {
      roomNumber: "B-705",
      roomType:"Basic Room",
      amenities:"Free Wifi, A/C Room, 24/7 Water",
      price:500,
      photo:'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkIn:new Date('1-May-2025'),
      checkOut:new Date('2-May-2025')
    }]
  }

  // ngDoCheck(): void {
  //   console.log('Check method is initialized')
  // }
  ngAfterViewInit() {
    console.log(this.header)
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
}import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import {Room, RoomList} from './rooms'

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

  title=''

  roomsList:RoomList[]=[]
  constructor() {}

  ngOnInit():void{
    console.log(this.header)
    this.roomsList=[{
      roomNumber: "A-104",
      roomType:"Deluxe Room",
      amenities:"Free Wifi, A/C Room, 24/7 Water",
      price:1200,
      photo:'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkIn:new Date('28-Apr-2025'),
      checkOut:new Date('29-Apr-2025')
    },
    {
      roomNumber: "C-312",
      roomType:"Private Suite",
      amenities:"Free Wifi, A/C Room, 24/7 Water",
      price:3200,
      photo:'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkIn:new Date('3-May-2025'),
      checkOut:new Date('5-May-2025')
    },
    {
      roomNumber: "B-705",
      roomType:"Basic Room",
      amenities:"Free Wifi, A/C Room, 24/7 Water",
      price:500,
      photo:'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkIn:new Date('1-May-2025'),
      checkOut:new Date('2-May-2025')
    }]
  }

  // ngDoCheck(): void {
  //   console.log('Check method is initialized')
  // }
  ngAfterViewInit() {
    console.log(this.header)
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
