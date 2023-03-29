import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevListComponent } from './dev-list.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: DevListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevListRoutingModule { }
