import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username = '';
  isEmpty: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameChanged(){
    this.isEmpty = this.username.length ? false : true;
  }

  onClick(){
    this.username = '';
    this.isEmpty = true;
  }
}