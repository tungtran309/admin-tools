import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image.component';
import { ImageCompareComponent } from './image-compare/imageCompare.component';

const routes: Routes = [
  {
    path: '',
    component: ImageComponent
  },
  {
    path : 'compare',
    component : ImageCompareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule {}
