import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevListRoutingModule } from './dev-list-routing.module';
import { DevListComponent } from './dev-list.component';
import { DevComponent } from './components/dev/dev.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DevListComponent,
    DevComponent,
  ],
  imports: [
    CommonModule,
    DevListRoutingModule,
    FormsModule
  ]
})
export class DevListModule { }
