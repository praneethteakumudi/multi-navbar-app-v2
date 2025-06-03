import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubModule1RoutingModule } from './sub-module1-routing-module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubModule1RoutingModule,
    RouterModule
  ]
})
export class SubModule1Module { }
