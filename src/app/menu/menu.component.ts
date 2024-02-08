import { Component } from '@angular/core';
import { LangService } from '../services/lang.service';
import { ActivatedRoute, Router } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(
    public langService: LangService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public navigateSibling(sibling: string): void {
    this.router.navigate([`${this.langService.currentLang.code}/${sibling}`]);
  }
}
