import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import PagesRoutes from './pages/pages.routes';

import { defaultLang } from './services/lang.service';

const routes: Routes = [
    {path: '', redirectTo: `/${defaultLang}`, pathMatch: 'full'},
    {path: ':lang', redirectTo: `/:lang/home`, pathMatch: 'full'},
    {path: ':lang', component: PagesComponent, children: PagesRoutes},
];

export default routes;
