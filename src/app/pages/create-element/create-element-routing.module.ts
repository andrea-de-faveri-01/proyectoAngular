import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateElementComponent } from './create-element.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateElementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateElementRoutingModule {}
