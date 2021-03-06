import { AdminGuard } from '../core/admin.guard';

export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate : [AdminGuard],
    data: { icon: 'home', text: 'Tổng quan' }
  },
  {
    path: 'drone',
    loadChildren: () =>
      import('./drone/drone.module').then(m => m.DroneModule),
    data: { icon: 'flight', text: 'Quản lý drone' },
    canActivate : [AdminGuard]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule),
    data: { icon: 'account_box', text: 'Quản lý người dùng' }
  },
  {
    path: 'assignment',
    loadChildren: () => import('./assignment/assignment.module').then(m => m.AssignmentModule),
    data: { icon: 'assignment', text: 'Quản lý công việc' },
    canActivate : [AdminGuard]
  },
  {
    path: 'image',
    loadChildren: () =>
      import('./image/image.module').then(m => m.ImageModule),
    data: { icon: 'image', text: 'Quản lý ảnh chụp' },
    canActivate : [AdminGuard]
  }
  // {
  //   path: 'material',
  //   loadChildren: () =>
  //     import('./mat-components/mat-components.module').then(
  //       m => m.MatComponentsModule
  //     ),
  //   data: { icon: 'code', text: 'Material' }
  // },
  // {
  //   path: 'animations',
  //   loadChildren: () =>
  //     import('./animations/animations.module').then(m => m.AnimationsModule),
  //   data: { icon: 'perm_media', text: 'Animations' }
  // },
  // {
  //   path: 'google-maps',
  //   loadChildren: () =>
  //     import('./google-map-demo/google-map-demo.module').then(
  //       m => m.GoogleMapDemoModule
  //     ),
  //   data: { icon: 'place', text: 'Google Maps' }
  // }
];

export const notAdminRoutes = [];
