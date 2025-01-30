import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'data', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

