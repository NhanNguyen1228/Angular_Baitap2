import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { BaitapStructuralDirectiveComponent } from './baitap-structural-directive/baitap-structural-directive.component';

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [Baitap2Component, BaitapStructuralDirectiveComponent],
  exports: [Baitap2Component, BaitapStructuralDirectiveComponent],
  imports: [
    CommonModule, NgxPaginationModule
  ]
})
export class Baitap2Module { }
