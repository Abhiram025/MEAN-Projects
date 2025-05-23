import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.css']
})
export class PaymentTypeComponent implements OnInit {
  payment = {
    selectedCar: "Maruti Suzuki Swift ZDI",
    timeIn: new Date('9-May-2025'),
    timeOut: new Date('11-May-2025'),
    rent: 5000
  }
  tax=this.payment.rent+300
  isToggledUpi = false
  isToggledCard = false
  toggleUpi() {
    this.isToggledUpi = !this.isToggledUpi
    if(this.isToggledUpi) {
      this.isToggledCard = false;
    }
  }
  toggleCard() {
    this.isToggledCard = !this.isToggledCard
    if(this.isToggledCard) {
      this.isToggledUpi = false;
    }
  }


  viewPay:string='v1'

  constructor() { }

  ngOnInit(): void {

  }
}
