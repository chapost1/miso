import { Component } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public langService: LangService) {}

}
