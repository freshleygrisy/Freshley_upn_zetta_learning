import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstpageRoutingModule } from './firstpage-routing.module';
import { ItemComponent } from './item/item.component';
import { AccountComponent } from './account/account.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    ItemComponent,
    AccountComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    FirstpageRoutingModule
  ]
})
export class FirstpageModule { }
