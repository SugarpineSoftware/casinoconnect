import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule',
    canActivate: [AuthenticationGuard] },
  { path: 'view-machine', loadChildren: './view-machine/view-machine.module#ViewMachinePageModule' },
  { path: 'qrmodal', loadChildren: './qrmodal/qrmodal.module#QRModalPageModule' },
  { path: 'scan-modal', loadChildren: './scan-modal/scan-modal.module#ScanModalPageModule' },
  { path: 'forum-posts', loadChildren: './forum-posts/forum-posts.module#ForumPostsPageModule' },
  { path: 'forum-post', loadChildren: './forum-post/forum-post.module#ForumPostPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
