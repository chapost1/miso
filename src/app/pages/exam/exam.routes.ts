import { Routes } from '@angular/router';
import { ExamSelectorComponent } from './exam-selector/exam-selector.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  {path: '', redirectTo: './exam-selector', pathMatch: 'full'},
  {path: 'exam-selector', component: ExamSelectorComponent},
  {path: 'tests', component: TestsComponent},
];

export default routes;
