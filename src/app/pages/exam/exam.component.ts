import { Component } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent {
  constructor(public langService: LangService) {}

}
