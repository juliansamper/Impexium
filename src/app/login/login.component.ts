import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { emitters } from '../emitters/emitters';
import { LoginResponse } from '../objects/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private appService:AppService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: 'juliansamper@gmail.com',
      password: 'Julian123'
    });
  }

  submit(): void {
    this.appService.login(this.form.getRawValue())
      .subscribe((res: LoginResponse) => {
        localStorage.setItem('jwt',res.token);
        emitters.authEmitter.emit(true);
      }, err => {
        alert(err['error']['message']);
        emitters.authEmitter.emit(false);
      });
  }

}
