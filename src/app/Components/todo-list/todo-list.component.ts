import { Component, OnInit } from '@angular/core';
import { IListItem } from "../../Models/Interfaces/IListItem";
import { TodoListServiceService } from "../../Services/todo-list-service.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  ListItems: IListItem[];
  constructor(private ToDoService:TodoListServiceService) { }

  ngOnInit() 
  {
    this.ToDoService.getData().then(d=>this.ListItems = d);
  }


  addNew(newItem: IListItem): void 
  {
    this.ToDoService.createItem(newItem)
    .then(i=>this.ListItems.push(i));
  }

  delItem(item: IListItem): void {
    this.ToDoService.deleteItem(item.id)
    .then(r=>
      {
        if(r)
        {
          const index = this.ListItems
          .findIndex(el=>el === item) ||        
          this.ListItems
          .findIndex(el => 
            el.id === item.id
            && el.status === item.status
            && el.text === item.text
            && el.title === item.title);
    
        if (index > -1)
          this.ListItems.splice(index, 1); 
        }
      });   
  } 

  getInfoItem(item:IListItem)
  {
    this.ToDoService.getItem(item.id).then(json=>alert(JSON.stringify(json)));
  }

  updateItem(item:IListItem)
  {
    this.ToDoService.updateItem(item).then(r=>
      {

      });
  }
}
