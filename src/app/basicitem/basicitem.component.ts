import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { emitters } from '../emitters/emitters';
import { Item } from '../objects/item';

@Component({
  selector: 'app-basicitem',
  templateUrl: './basicitem.component.html',
  styleUrls: ['./basicitem.component.css']
})
export class BasicitemComponent implements OnInit {
  @Input() items: Item[];

  constructor(
    private httpClient: HttpClient,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.validateLoginStatus();
  }

  validateLoginStatus() {
    var jwt = localStorage.getItem('jwt');
    if(!jwt) {
      emitters.authEmitter.emit(false);
    } else {
      emitters.authEmitter.emit(true);
    }
    this.getItems();
  }

  getItems() {
    this.appService.getAllItems().subscribe(res => {
      this.items = <Item[]> res;
    });
  }

}
