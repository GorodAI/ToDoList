import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  IListItem} from "../..//Models/Interfaces/IListItem";
import { IDisplayedItem } from "../..//Models/Interfaces/IDisplayedItem";
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  displayedItem :IDisplayedItem;
  @Input() item:IListItem;
  @Output() delItem = new EventEmitter<IListItem>();
  @Output() getInfoItem = new EventEmitter<IListItem>();
  @Output() updateItem = new EventEmitter<IListItem>();

  constructor() { }

  ngOnInit() {
    this.displayedItem = 
    {
      item: this.item,
      title_editing: false,
      text_editing: false,
    }
  }

  finish(status:boolean)
  {
    this.item.status = status;
  }

  deleteItem(item:IListItem)
  {
    this.delItem.emit(item);
  }

  getItem(item:IListItem)
  {
    
    this.getInfoItem.emit(item)
  }

  editTitleItem(disItem:IDisplayedItem)
  {
    
    disItem.title_editing = true;
  }
  editTextItem(disItem:IDisplayedItem)
  {
    
    disItem.text_editing = true;
  }

  doneTitleEditing(disItem:IDisplayedItem)
  {
    
    disItem.title_editing = false;
    this.updateItem.emit(disItem.item);
  }
  doneTexEditing(disItem:IDisplayedItem)
  {
    
    disItem.text_editing = false;
    this.updateItem.emit(disItem.item);
  }
}
