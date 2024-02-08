import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import PagesRoutes from './pages/pages.routes';

export const routes: Routes = [
    {path: '', redirectTo: '/en/home', pathMatch: 'full'},
    {path: 'en', component: PagesComponent, children: PagesRoutes},
    {path: 'he', component: PagesComponent, children: PagesRoutes}
];
