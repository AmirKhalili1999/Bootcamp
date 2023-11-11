import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user.component";
import {AddComponent} from "./add/add.component";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'',component:ListComponent
      },
      {
        path:'add',component:AddComponent
      },
      {
        path:'list',component:ListComponent
      },
      {
        path:'detail',component:DetailComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
