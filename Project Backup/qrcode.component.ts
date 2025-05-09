import { Component } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {
  generateRandomWord=(minLength: number=4, maxLength: number=10): string=> {
    let length=Math.floor(Math.random()*(maxLength-minLength+1))+minLength
    let word='' 
    for(let i=0; i<length; i++) {
      word+='abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random()*26))
    }
    return word.charAt(0).toUpperCase()+word.slice(1)
  }
  qrGenerator:string=this.generateRandomWord()
}
