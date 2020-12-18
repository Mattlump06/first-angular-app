import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {

  userItem = '';
  waitItem = 'Waiting to add item';
  itemArray = ['bike', 'shoes'];
  itemCreated = false;
  itemDisplay = 'You added ' + this.userItem;

  constructor() {

  }

  ngOnInit(): void {
  }

  onAddItem(){
    this.itemCreated = true;
    this.itemArray.push(this.userItem);
    this.waitItem = 'Success! ' + this.userItem + ' was added to our database';
  }

}
