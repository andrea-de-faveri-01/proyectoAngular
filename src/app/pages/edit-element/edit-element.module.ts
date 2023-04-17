import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditElementRoutingModule } from './edit-element-routing.module';
import { EditElementComponent } from './edit-element.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditElementComponent],
  imports: [CommonModule, EditElementRoutingModule, SharedModule],
})
export class EditElementModule {}
