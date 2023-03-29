import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiDetailRoutingModule } from './ai-detail-routing.module';
import { AiDetailComponent } from './ai-detail.component';


@NgModule({
  declarations: [
    AiDetailComponent
  ],
  imports: [
    CommonModule,
    AiDetailRoutingModule
  ]
})
export class AiDetailModule { }
