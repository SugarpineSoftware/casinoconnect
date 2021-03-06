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
  { path: 'forum-post', loadChildren: './forum-post/forum-post.module#ForumPostPageModule' },
  { path: 'post-modal', loadChildren: './post-modal/post-modal.module#PostModalPageModule' },
  { path: 'mael-book', loadChildren: './mael-book/mael-book.module#MaelBookPageModule' },
  { path: 'new-comment', loadChildren: './new-comment/new-comment.module#NewCommentPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'wiki', loadChildren: './wiki/wiki.module#WikiPageModule' },
  { path: 'wiki-doc', loadChildren: './wiki-doc/wiki-doc.module#WikiDocPageModule' },
  { path: 'new-meal-entry', loadChildren: './new-meal-entry/new-meal-entry.module#NewMealEntryPageModule' },
  { path: 'break-timer', loadChildren: './break-timer/break-timer.module#BreakTimerPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
