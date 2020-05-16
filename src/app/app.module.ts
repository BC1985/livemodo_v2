import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { TextareaComponent } from './components/textarea/textarea.component';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  MatMenuModule,
  MatCardModule,
  BrowserModule,
  MatSidenavModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule,
  MatRadioModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    AddReviewComponent,
    DatepickerComponent,
    TextareaComponent,
  ],
  providers: [],
  imports: [[...modules]],
  bootstrap: [AppComponent]
})
export class AppModule { }
