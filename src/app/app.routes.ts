import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import PagesRoutes from './pages/pages.routes';

import { defaultLang, langs } from './services/lang.service';

const routes: Routes = [
    { path: '', redirectTo: `/${defaultLang}`, pathMatch: 'full' },
];

for (let lang of langs) {
    routes.push({ path: `${lang}`, redirectTo: `/${lang}/home`, pathMatch: 'full' });
    routes.push({ path: `${lang}`, component: PagesComponent, children: PagesRoutes });
}

routes.push({ path: '**', redirectTo: `/${defaultLang}/not-found` });

export default routes;
