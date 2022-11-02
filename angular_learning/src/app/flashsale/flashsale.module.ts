import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashsaleRoutingModule } from './flashsale-routing.module';
import { ItemComponent } from './item/item.component';
import { FilterComponent } from './filter/filter.component';
import { ChartComponent } from './chart/chart.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    ItemComponent,
    FilterComponent,
    ChartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    FlashsaleRoutingModule
  ]
})
export class FlashsaleModule { }
