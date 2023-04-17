import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateElementRoutingModule } from './create-element-routing.module';
import { CreateElementComponent } from './create-element.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreateElementComponent],
  imports: [CommonModule, CreateElementRoutingModule, SharedModule],
})
export class CreateElementModule {}
