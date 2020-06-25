import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/userProfile.component';
import { AdminGuard } from 'src/app/core/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate : [AdminGuard]
  },
  { 
    path: 'profile/:id',
    component: UserProfileComponent,
    canActivate : [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
