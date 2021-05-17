import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Item } from '../objects/item';

@Component({
  selector: 'app-addedit-item',
  templateUrl: './addedit-item.component.html',
  styleUrls: ['./addedit-item.component.css']
})
export class AddeditItemComponent implements OnInit {
  @Input() item: Item;
  id: any;
  name: any;
  description: any;
  stock: any;
  photo: any;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.id = this.item.id;
    this.name = this.item.name;
    this.description = this.item.description;
    this.stock = this.item.stock;
    this.photo = this.item.photo;
  }

  addItem() {
    let data: Item = <Item>{
      name: this.name,
      description: this.description,
      stock: this.stock,
      photo: this.photo
    };
    this.appService.addItem(data)
      .subscribe(res => {
        alert(res['message']);
      });
  }

  updateItem() {
    let data: Item = <Item>{
      id: this.id,
      name: this.name,
      description: this.description,
      stock: this.stock,
      photo: this.photo
    }
    this.appService.updateItem(data)
      .subscribe(res => {
        alert(res['message']);
      });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
