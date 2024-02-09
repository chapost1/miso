import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamModule } from './exam/exam.module';

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
    CommonModule,
    ExamModule
  ],
  providers: []
})
export class PagesModule {}
