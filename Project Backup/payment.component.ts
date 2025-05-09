import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment = {
    selectedCar: "Maruti Suzuki Swift ZDI",
    timeIn: new Date('9-May-2025'),
    timeOut: new Date('11-May-2025'),
    rent: 5000
  }

  constructor() { }
  ngOnInit(): void {

  }
}
