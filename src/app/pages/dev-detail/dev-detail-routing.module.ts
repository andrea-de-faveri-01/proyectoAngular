import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevDetailComponent } from './dev-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DevDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevDetailRoutingModule {}
