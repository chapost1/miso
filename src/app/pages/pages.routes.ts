import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';
import { ContactComponent } from './contact/contact.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'exam', component: ExamComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'thanks', component: ThanksComponent},
];

export default routes;
