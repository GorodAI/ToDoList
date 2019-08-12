import { Injectable } from '@angular/core';
import { IListItem } from "../Models/Interfaces/IListItem";

@Injectable({
  providedIn: 'root'
})
export class TodoListServiceService {
  private readonly _url:string = "https://jsonplaceholder.typicode.com/todos"

  constructor() 
  { }

  getData(limit?: number):Promise<IListItem[]> {
    limit = limit || 10;
    return fetch(`${this._url}?_limit=${limit}`)
    .then(response => response.json())
    .then(todos => todos.map(td => {
      return <IListItem> {
        id: td.id || Math.random(),
        title: td.title || "default",
        text: td.description || "default",
        status: td.completed || false,
      };
    }));
  }
  
  getItem(id?:number):Promise<IListItem>
  {
    return fetch(`${this._url}/${id}`)
    .then(response => response.json())
    .then(json => {
      
      console.log(json);
    return json;}); 
  }

  createItem(item:IListItem):Promise<IListItem>
  {
    return fetch(`${this._url}`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(obj => {
      
      obj.text = item.text;
      console.log(obj);
    return obj;});
  }

  updateItem(item:IListItem):Promise<IListItem>
  {          
    return fetch(`${this._url}/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    return json;});
  }

  deleteItem(id:number):Promise<boolean>
  {
    return fetch(`${this._url}/${id}`, {
      method: 'DELETE'
    }).then(r=>
      {console.log(r);
      return r.status === 200 && r.ok});
  }
}
