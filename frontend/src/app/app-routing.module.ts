import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { homepageGuard } from './homepage/homepage.guard';
import { CreatePostComponent } from './homepage/create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'createPost',
    component: CreatePostComponent,
  },
  {
    path: 'toPost',
    component: CreatePostComponent,
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
    canActivate: [homepageGuard],
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}