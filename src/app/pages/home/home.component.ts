import { Component } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public langService: LangService) {}

}
