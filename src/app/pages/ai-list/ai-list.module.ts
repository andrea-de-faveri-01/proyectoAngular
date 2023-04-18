import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiListRoutingModule } from './ai-list-routing.module';
import { AiListComponent } from './ai-list.component';
import { AiComponent } from './components/ai/ai.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AiListComponent, AiComponent],
  imports: [CommonModule, FormsModule, AiListRoutingModule, SharedModule],
})
export class AiListModule {}
