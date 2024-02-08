import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [],
  imports: [
    HomeComponent,
    ExamComponent,
    ContactComponent,
    PagesComponent,
    CommonModule
  ],
  providers: []
})
export class PagesModule {}
