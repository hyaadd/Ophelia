import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { HomeComponent } from './home.component';
import { HomeListComponent } from './home-list/home-list.component';
import { homeRouting } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    MomentModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    HomeListComponent
  ]
})
export class HomeModule {}
