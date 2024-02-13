import { Routes } from '@angular/router';
import { PsychoacousticTestComponent } from './psychoacoustic-test/psychoacoustic-test.component';
import { SelfReportComponent } from './self-report/self-report.component';

const routes: Routes = [
  {path: 'psycho-acoustic', component: PsychoacousticTestComponent},
  {path: 'self-report', component: SelfReportComponent},
];

export default routes;
