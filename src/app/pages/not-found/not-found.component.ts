import { Component } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor(public langService: LangService) {}

}
