import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emitters } from './emitters/emitters';
import { Item } from './objects/item';
import { Login } from './objects/Login';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private serviceEndpoint: string = "https://jsstore20210516191532.azurewebsites.net/";

  constructor(
    private httpClient: HttpClient
  ) { }

  login(data: Login) {
    return this.httpClient.post(this.serviceEndpoint + '/api/security/jwt', data);
  }

  logout() {
    localStorage.removeItem('jwt');
    emitters.authEmitter.emit(false);
  }

  getAllItems() {
    return this.httpClient.get(this.serviceEndpoint + '/api/items');
  }

  addItem(item: Item) {
    return this.httpClient.post(this.serviceEndpoint + '/api/items', item);
  }

  updateItem(item: Item) {
    return this.httpClient.put(this.serviceEndpoint + '/api/items/' + item.id, item);
  }

  deleteItem(id: number) {
    return this.httpClient.delete(this.serviceEndpoint + '/api/items/' + id)
  }
}
