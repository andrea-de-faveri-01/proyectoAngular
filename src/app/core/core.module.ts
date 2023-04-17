import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, HeaderModule],
  exports: [HeaderModule, FooterComponent],
})
export class CoreModule {}
