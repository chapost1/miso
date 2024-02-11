import { Component, OnDestroy } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { LangService } from './services/lang.service';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuComponent } from './menu/menu.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    PagesModule,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(
    public langService: LangService,
    private router: Router,
    private locationStrategy: LocationStrategy
  ) {
    this.subscription = new Subscription();
    // get first segment of url and set language accordingly
    this.subscription.add(router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let url = event.url;
        const href = this.locationStrategy.getBaseHref();
        if (href && url.startsWith(href)) {
          url = url.slice(href.length);
        } else if (url.startsWith('/')) {
          url = url.slice(1);
        }
        const lang = url.split('/')[0];
        this.langService.setLang(lang);
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getYear() {
    return new Date().getFullYear();
  }
}
