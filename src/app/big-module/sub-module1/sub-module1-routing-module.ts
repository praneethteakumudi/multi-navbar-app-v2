import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './navbar1/about/about'
import { Contact } from './navbar1/contact/contact'
import {Login} from './navbar1/login/login'
import {Register} from './navbar1/register/register'

const routes: Routes = [
 {path:'',component:About},
 {path:'contact',component:Contact},
 {path:'login',component:Login},
 {path:'register',component:Register}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubModule1RoutingModule { }
