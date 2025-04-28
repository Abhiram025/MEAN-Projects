import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hotelBookingApplication'
  firstName='Abhiram'
  hotelName='Baratie'

  

  constructor() {}
  ngOnInit():void{}  
}
