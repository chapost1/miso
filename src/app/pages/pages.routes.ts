import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';
import ExamRoutes from './exam/exam.routes';
import { ContactComponent } from './contact/contact.component';
import { ThanksComponent } from './thanks/thanks.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'exam', component: ExamComponent, children: ExamRoutes},
  {path: 'contact', component: ContactComponent},
  {path: 'thanks', component: ThanksComponent},
  {path: '**', component: NotFoundComponent},
];

export default routes;
