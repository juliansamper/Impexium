import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { emitters } from '../emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Item } from '../objects/item';

@Component({
  selector: 'app-advanceditem',
  templateUrl: './advanceditem.component.html',
  styleUrls: ['./advanceditem.component.css']
})
export class AdvanceditemComponent implements OnInit {
  @Input() items: any;
  item: Item;
  ModalTitle:string = "";
  ActivateAddEditItemComp:boolean = false;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.validateLoginStatus();
  }

  closeClick() {
    this.ActivateAddEditItemComp = false;
    this.getItems();
  }

  validateLoginStatus() {
    var jwt = localStorage.getItem('jwt');
    if (!jwt) {
      emitters.authEmitter.emit(false);
    } else {
      emitters.authEmitter.emit(true);
      this.getItems();
    }
  }

  getItems() {
    this.appService.getAllItems().subscribe(res => {
      this.items = res;
    });
  }

  addItem() {
    this.item = <Item> {
      id: 0,
      name: "",
      description: "",
      stock: 0,
      photo: ""
    }
    this.ModalTitle = "Add Item";
    this.ActivateAddEditItemComp = true;
  }

  editItem(item: Item) {
    this.item = item;
    this.ModalTitle = "Edit Item";
    this.ActivateAddEditItemComp = true;
  }

  deleteItem(item: Item) {
    if(confirm(`Do you want to delete (${ item.name })?`))
      this.appService.deleteItem(item.id)
        .subscribe(res => {
          alert(res['message']);
          this.getItems();
        });
  }
}
