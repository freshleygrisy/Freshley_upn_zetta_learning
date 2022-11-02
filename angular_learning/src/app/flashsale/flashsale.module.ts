import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashsaleRoutingModule } from './flashsale-routing.module';
import { ItemComponent } from './item/item.component';
import { FilterComponent } from './filter/filter.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    ItemComponent,
    FilterComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FlashsaleRoutingModule
  ]
})
export class FlashsaleModule { }
