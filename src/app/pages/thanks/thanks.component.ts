import { Component } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent {
  constructor(public langService: LangService) {}
}
