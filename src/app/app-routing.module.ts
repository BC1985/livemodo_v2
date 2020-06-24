import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowseReviewsComponent } from './browse-reviews/browse-reviews.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'post',
    component: AddReviewComponent,
  },
  {
    path: 'browse',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
