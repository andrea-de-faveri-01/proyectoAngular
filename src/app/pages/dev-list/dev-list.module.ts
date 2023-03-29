import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevListRoutingModule } from './dev-list-routing.module';
import { DevListComponent } from './dev-list.component';


@NgModule({
  declarations: [
    DevListComponent
  ],
  imports: [
    CommonModule,
    DevListRoutingModule
  ]
})
export class DevListModule { }
