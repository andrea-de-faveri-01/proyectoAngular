import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WhatComponent } from './components/what/what.component';
import { WhyComponent } from './components/why/why.component';
import { HowComponent } from './components/how/how.component';

@NgModule({
  declarations: [HomeComponent, WhatComponent, WhyComponent, HowComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
