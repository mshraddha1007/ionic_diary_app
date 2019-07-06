import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'title': "20 july 2016 ",
      'description': "Hey Diary"
    }
  ]

  constructor() { }

  createItem(title, description){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  
  }

  deleteItem(deleteValue){
    let itemIndex = this.items.findIndex(item => item.id == deleteValue.id);
    this.items.splice(itemIndex);
  }
}
