import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emitters } from '../emitters/emitters';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(
    private router: Router,
    private appService:AppService
  ) { }

  ngOnInit(): void {
    emitters.authEmitter.subscribe((auth: boolean) => {
      this.authenticated = auth;
      if(this.authenticated) {
        if(this.router.url != '/items')
          this.router.navigate(['/manageitems']);
      } else {
        if(this.router.url != '/items')
          this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.appService.logout();
  }
}
