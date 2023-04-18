import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { RouterModule } from '@angular/router';
import { SlicePagePipe } from './pipes/slice-page.pipe';

@NgModule({
  declarations: [FormComponent,SlicePagePipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [FormComponent,SlicePagePipe],
})
export class SharedModule {}
