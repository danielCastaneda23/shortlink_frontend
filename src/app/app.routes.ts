import { AuthGuard } from './user/guard/auth.guard';
import { Routes } from '@angular/router';
import { ShortlinkComponent } from './shortlink/shortlink.component';
import { UserComponent } from './user/component/user.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'login',
        component: UserComponent,
      },
      { path: 'shortlink', component: ShortlinkComponent, canActivate: [AuthGuard] },
    ],
  },
];
