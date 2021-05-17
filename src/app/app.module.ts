import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdvanceditemComponent } from './advanceditem/advanceditem.component';
import { BasicitemComponent } from './basicitem/basicitem.component';
import { NavComponent } from './nav/nav.component';
import { SecuredHttpInterceptor } from './secured-http.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReadmeComponent } from './readme/readme.component';
import { AddeditItemComponent } from './addedit-item/addedit-item.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdvanceditemComponent,
    BasicitemComponent,
    NavComponent,
    ReadmeComponent,
    AddeditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecuredHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
