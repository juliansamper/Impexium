import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceditemComponent } from './advanceditem/advanceditem.component';
import { BasicitemComponent } from './basicitem/basicitem.component';
import { LoginComponent } from './login/login.component';
import { ReadmeComponent } from './readme/readme.component';

const routes: Routes = [
  {path:'', component:AdvanceditemComponent},
  {path:'manageitems', component:AdvanceditemComponent},
  {path:'items', component:BasicitemComponent},
  {path:'readme', component:ReadmeComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
