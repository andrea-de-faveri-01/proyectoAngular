import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevDetailRoutingModule } from './dev-detail-routing.module';
import { DevDetailComponent } from './dev-detail.component';

@NgModule({
  declarations: [DevDetailComponent],
  imports: [CommonModule, DevDetailRoutingModule],
})
export class DevDetailModule {}
