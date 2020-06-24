import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroneComponent } from './drone.component';
import { DroneDetailComponent } from './drone-detail/droneDetail.component';

const routes: Routes = [
  {
    path: '',
    component: DroneComponent
  },
  { 
    path: 'detail/:id',
    component: DroneDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DronesRoutingModule {}
