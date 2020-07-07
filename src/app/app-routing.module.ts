import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowseReviewsComponent } from './browse-reviews/browse-reviews.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home', 
    pathMatch:"full"
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'post',
    component: AddReviewComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'reviews',
    component: BrowseReviewsComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    component: RegisterUserComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
