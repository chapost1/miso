import { Component } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent {
  constructor(public langService: LangService) {}

}
