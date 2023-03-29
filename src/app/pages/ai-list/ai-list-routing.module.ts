import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiListComponent } from './ai-list.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AiListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiListRoutingModule { }
