import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeListComponent } from './home-list/home-list.component';



export const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeListComponent
      }
    ]
  }
]);
