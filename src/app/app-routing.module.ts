import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'post', component: AddReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
