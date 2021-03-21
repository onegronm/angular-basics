import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  clicked = false;
  buttonClicks = [];
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clicked = !this.clicked;
    this.buttonClicks.push(++this.count);
  }

  getBgColor(number){
    if(number > 5){
      return 'blue';
    }
  }

  getColor(number){
    if(number > 5){
      return 'white';
    }
  }

}
