import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IListItem } from "../../Models/Interfaces/IListItem";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-new-list-item',
  templateUrl: './add-new-list-item.component.html',
  styleUrls: ['./add-new-list-item.component.css']
})
export class AddNewListItemComponent implements OnInit {
  newItemForm:any;
  
  @Output() addNew = new EventEmitter<IListItem>();
  constructor(private formBuilder:FormBuilder) {
    this.newItemForm= this.formBuilder.group({
      title: '',
      text: ''
    });
   }

  ngOnInit() {
  }

  newItem(toDoData): void {
    this.addNew.emit({
      id: 0,
      title: toDoData.title,
      text: toDoData.text,
      status: false
    });

    this.newItemForm.reset();
  }
}
