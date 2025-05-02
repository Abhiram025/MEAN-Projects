import { AfterViewInit, Component, ViewChild, OnInit, 
         ViewContainerRef, ElementRef} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
@Component({
  selector: 'hbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'hotelBookingApplication'
  firstName='Abhiram'
  hotelName='Baratie'
  // role='users'
  
  @ViewChild('rooms', {read:ViewContainerRef}) view!:ViewContainerRef
  @ViewChild('name',{static:true}) name!:ElementRef

  constructor() {}
  ngOnInit(): void {
    this.name.nativeElement.innerText=`Checkout the rooms we have Abhi!!`
  } 
  ngAfterViewInit(): void {
    const component=this.view.createComponent(RoomsComponent)
    component.instance.rooms.availableRooms=20
  }
}
