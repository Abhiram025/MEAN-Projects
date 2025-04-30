import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hbm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title='checking for the view child and AfterViewInit life cycle hook'
  constructor() {}

  ngOnInit(): void {
    
  }
}
