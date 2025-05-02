import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomsList: RoomList[] = [{
    roomNumber: "A-104",
    roomType: "Deluxe Room",
    amenities: "Free Wifi, A/C Room, 24/7 Water",
    price: 1200,
    photo: 'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    checkIn: new Date('28-Apr-2025'),
    checkOut: new Date('29-Apr-2025')
  },
  {
    roomNumber: "C-312",
    roomType: "Private Suite",
    amenities: "Free Wifi, A/C Room, 24/7 Water",
    price: 3200,
    photo: 'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    checkIn: new Date('3-May-2025'),
    checkOut: new Date('5-May-2025')
  },
  {
    roomNumber: "B-705",
    roomType: "Basic Room",
    amenities: "Free Wifi, A/C Room, 24/7 Water",
    price: 500,
    photo: 'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    checkIn: new Date('1-May-2025'),
    checkOut: new Date('2-May-2025')
  }]
  constructor() { }

  getRoomsList() {
    return this.roomsList
  }
}
