import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiListRoutingModule } from './ai-list-routing.module';
import { AiListComponent } from './ai-list.component';


@NgModule({
  declarations: [
    AiListComponent
  ],
  imports: [
    CommonModule,
    AiListRoutingModule
  ]
})
export class AiListModule { }
