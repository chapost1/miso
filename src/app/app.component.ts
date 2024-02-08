import { Component, OnDestroy } from '@angular/core';
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
    private router: Router
  ) {
    this.subscription = new Subscription();
    // get first segment of url and set language accordingly
    this.subscription.add(router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const url = event.url;
        const lang = url.split('/')[1];
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
