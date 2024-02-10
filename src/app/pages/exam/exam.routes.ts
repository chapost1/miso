import { Routes } from '@angular/router';
import { ExamSelectorComponent } from './exam-selector/exam-selector.component';
import { ExamsComponent } from './exams/exams.component';

const routes: Routes = [
  {path: '', redirectTo: 'exam-selector', pathMatch: 'full'},
  {path: 'exam-selector', component: ExamSelectorComponent},
  {path: 'exams', component: ExamsComponent},
];

export default routes;
