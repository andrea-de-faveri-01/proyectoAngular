import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditElementComponent } from './edit-element.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EditElementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditElementRoutingModule {}
